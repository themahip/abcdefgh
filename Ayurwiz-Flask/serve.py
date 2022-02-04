from flask import Flask, request, jsonify
import sys

import numpy as np
import pandas as pd
import traceback

import joblib
from sklearn.decomposition import PCA
from sklearn import preprocessing


model = joblib.load('match_making_model') 
# print(model.fit_predict(refined_reduced_df))


############# Building the flask server around it.
app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return jsonify({'Home': "Welcome Home!"})

@app.route('/predict', methods=['POST'])
def predict():

    try:

        sample_data = request.json

        # Just a test data.
        df = pd.read_json("ayurwiz_users.json")

        ############ Normalizing:
        sample_df = pd.DataFrame(sample_data)
        df = df.append(sample_df)
        df = df.reset_index(drop=True)


        df['Education'] = df['Education'].replace(['GED', 'Vocational qualification'], 'Secondary education or high school')
        le = preprocessing.LabelEncoder()
        df['Education'] = le.fit_transform(df.Education)

        # get the dummies and store it in a variable
        dummies = pd.get_dummies(df.Sex)


        # Concatenate the dummies to original dataframe
        df2 = pd.concat([df, dummies], axis = 'columns')

        # Dropping one column to avoid dummy variable trap
        df2 = df2.drop(['Sex', 'Other'], axis='columns')


        # get the dummies and store it in a variable
        dummies = pd.get_dummies(df2['Career Fields'])


        # Concatenate the dummies to original dataframe
        df3 = pd.concat([df2, dummies], axis = 'columns')

        # Dropping one column to avoid dummy variable trap
        df3 = df3.drop(['Career Fields', 'sales'], axis='columns')


        # get the dummies and store it in a variable
        dummies = pd.get_dummies(df3['Relationship Status'])


        # Concatenate the dummies to original dataframe
        df4 = pd.concat([df3, dummies], axis = 'columns')

        # Dropping one column to avoid dummy variable trap
        df4 = df4.drop(['Relationship Status', 'HAPPILY COMMITED'], axis='columns')

        df4['Hobbies'] = df4['Hobbies'].astype(str)
        df4['Hobbies'] = df4['Hobbies'].str.strip().str.split(',')
        df4 = df4.explode('Hobbies')


        # get the dummies and store it in a variable
        dummies = pd.get_dummies(df4['Hobbies'])


        # Concatenate the dummies to original dataframe
        df5 = pd.concat([df4, dummies], axis = 'columns')

        # Dropping one column to avoid dummy variable trap
        df5 = df5.drop(['Hobbies', 'Podcasts'], axis='columns')


        data_last_row = df5.iloc[len(df5.index) - 5:, :] 
        last_index = df5.index[-1]
        refined_df = data_last_row.loc[last_index]
        required_length = len(refined_df)
        refined_df = pd.DataFrame(refined_df)

        pca = PCA(2) # When there's not much data in a row, then 
        refined_reduced_df = pca.fit_transform(refined_df) # This statement recieves a series insted of the dataframe. And if converted to dataframe, the rows and columns are transposed.
        zeros = np.zeros((model.n_clusters-required_length, 2))

        refined_reduced_df = np.append(refined_reduced_df, zeros)
        refined_reduced_df = refined_reduced_df.reshape((model.n_clusters, 2))

        return jsonify({'prediction': str(model.fit_predict(refined_reduced_df))})

    except:

        return jsonify({'trace': traceback.format_exc()})


if __name__ == '__main__':
    try:
        port = int(sys.argv[1]) # This is for a command-line input
    except:
        port = 12345 # If you don't provide any port the port will be set to 12345

    print ('Model loaded!!!!!!!!!')

    app.run(port=port, debug=True)