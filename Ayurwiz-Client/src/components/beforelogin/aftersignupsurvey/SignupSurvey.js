import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import "./signupsurvey.css";

export default function SignupSurvey() {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [careerchoice, setCareerchoice] = useState("");
  const [relationship, setRelationship] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [noHobbies, setnoHobbies]=useState(0);
  const history = useHistory();
  function submmitData(e) {
    e.preventDefault();
    if (
      !age ||
      !gender ||
      !education ||
      !careerchoice ||
      !relationship ||
      !hobbies
    ) {
      alert("Please Fill the form Properly");
    } else if (age < 18 || age > 45) {
      alert("Age should be between 18 - 45");
    } else if (noHobbies < 2) {
      alert("Hobbies Should be more than 2");
    } else {
      axios.post("http://localhost:5000/data", {
        Education: education,
        Sex: gender,
        "Carrer Fields": careerchoice,
        "Relationship Status": relationship,
        Hobbies: hobbies,
        Age: age,
      });
      history.push('/ayurwiz/dashboard')
    }
  }
  return (
    <div className="SignupSurvey">
      <h1 className="aboutyou">ABOUT YOU</h1>
      <div className="questionlogo">
        <div className="question">
          {/* all the forms */}
          <input
            className="age"
            placeholder="Age"
            type="number"
            min={18}
            max={45}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <Select
            placeholder="Gender"
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
              { value: "Other", label: "Other" },
            ]}
            onChange={(e) => {
              setGender(e.value);
            }}
          />
          <Select
            options={[
              { value: "sales", label: "sales" },
              {
                value: "law and public policy",
                label: "law and public policy",
              },
              { value: "health and medicine", label: "health and medicine" },
              { value: "government", label: "government" },
              { value: "farming", label: "farming" },
              { value: "fishing and forestry", label: "fishing and forestry" },
              { value: "installation", label: "installation" },
              {
                value: "repair and maintenance",
                label: "repair and maintenance",
              },
              {
                value: "science and technology",
                label: "science and technology",
              },
              { value: "education", label: "education" },
              {
                value: "community and social services",
                label: "community and social services",
              },
              { value: "communications", label: "communications" },
              { value: "business", label: "business" },
              {
                value: "management and administration",
                label: "management and administration",
              },
              { value: "arts", label: "arts" },
              {
                value: "culture and entertainment",
                label: "culture and entertainment",
              },
              {
                value: "architecture and engineering",
                label: "architecture and engineering",
              },
            ]}
            placeholder="Career Choice"
            onChange={(e) => {
              setCareerchoice(e.value);
            }}
          />
          <Select
            onChange={(e) => {
              setRelationship(e.value);
            }}
            placeholder="Relationship Status"
            options={[
              {
                value: "FRIENDS WITH BENEFITS",
                label: "FRIENDS WITH BENEFITS",
              },
              { value: "THE SIDE PIECE", label: "THE SIDE PIECE" },
              {
                value: "IN AN OPEN RELATIONSHIP",
                label: "IN AN OPEN RELATIONSHIP",
              },
              {
                value: "IN AN “OPEN” RELATIONSHIP",
                label: "IN AN “OPEN” RELATIONSHIP",
              },
              {
                value: "IN A “SUGAR” RELATIONSHIP",
                label: "IN A “SUGAR” RELATIONSHIP",
              },
              { value: "IT’S COMPLICATED", label: "IT’S COMPLICATED" },
              { value: "“TALKING TO” SOMEONE", label: "“TALKING TO” SOMEONE" },
              { value: "THE BOOTY CALL", label: "THE BOOTY CALL" },
              { value: "A PLACEHOLDER", label: "A PLACEHOLDER" },
              { value: "THE BACKUP", label: "THE BACKUP" },
              { value: "BROKEN SOUL", label: "BROKEN SOUL" },
              { value: "PROUD SINGLE", label: "PROUD SINGLE" },
              { value: "HAPPILY COMMITED", label: "HAPPILY COMMITED" },
              {
                value: "FRIENDS WITH BENEFITS",
                label: "FRIENDS WITH BENEFITS",
              },
              { value: "THE SIDE PIECE", label: "THE SIDE PIECE" },
              {
                value: "IN AN OPEN RELATIONSHIP",
                label: "IN AN OPEN RELATIONSHIP",
              },
              {
                value: "IN AN “OPEN” RELATIONSHIP",
                label: "IN AN “OPEN” RELATIONSHIP",
              },
              {
                value: "IN A “SUGAR” RELATIONSHIP",
                label: "IN A “SUGAR” RELATIONSHIP",
              },
              { value: "IT’S COMPLICATED", label: "IT’S COMPLICATED" },
              { value: "“TALKING TO” SOMEONE", label: "“TALKING TO” SOMEONE" },
              { value: "THE BOOTY CALL", label: "THE BOOTY CALL" },
              { value: "A PLACEHOLDER", label: "A PLACEHOLDER" },
              { value: "THE BACKUP", label: "THE BACKUP" },
              { value: "BROKEN SOUL", label: "BROKEN SOUL" },
              { value: "PROUD SINGLE", label: "PROUD SINGLE" },
              { value: "HAPPILY COMMITED", label: "HAPPILY COMMITED" },
            ]}
          />
          <Select
            placeholder="Education"
            options={[
              { value: "No formal education", label: "No formal education" },
              { value: "Primary education", label: "Primary education" },
              {
                value: "Secondary education or high school",
                label: "Secondary education or high school",
              },
              { value: "GED", label: "GED" },
              {
                value: "Vocational qualification",
                label: "Vocational qualification",
              },
              { value: "Bachelor's degree", label: "Bachelor's degree" },
              { value: "Master's degree", label: "Master's degree" },
              { value: "Doctorate or higher", label: "Doctorate or higher" },
            ]}
            onChange={(e) => {
              setEducation(e.value);
            }}
          />
          <Select
            options={[
              { value: "Reading", label: "Reading" },
              { value: "Martial Arts", label: "Martial Arts" },
              { value: "Jewelry Making", label: "Jewelry Making" },
              { value: "Woodworking", label: "Woodworking" },
              { value: "Gardening", label: "Gardening" },
              { value: "Video Games", label: "Video Games" },
              { value: "Fishing", label: "Fishing" },
              { value: "Walking", label: "Walking" },
              { value: "Team Sports", label: "Team Sports" },
              { value: "Yoga", label: "Yoga" },
              { value: "Traveling", label: "Traveling" },
              { value: "Golf", label: "Golf" },
              { value: "Watching Sports", label: "Watching Sports" },
              { value: "Playing Cards", label: "Playing Cards" },
              { value: "Board Games", label: "Board Games" },
              { value: "Eating Out", label: "Eating Out" },
              { value: "Writing", label: "Writing" },
              { value: "Running", label: "Running" },
              { value: "Tennis", label: "Tennis" },
              { value: "Volunteer Work", label: "Volunteer Work" },
              { value: "Dancing", label: "Dancing" },
              { value: "Painting", label: "Painting" },
              { value: "Cooking", label: "Cooking" },
              { value: "Bicycling", label: "Bicycling" },
              { value: "Housework", label: "Housework" },
              { value: "Movie Watching", label: "Movie Watching" },
              { value: "Genealogy", label: "Genealogy" },
              { value: "Religious Activities", label: "Religious Activities" },
              { value: "Calligraphy", label: "Calligraphy" },
              { value: "Podcasts", label: "Podcasts" },
              { value: "Television", label: "Television" },
              { value: "Collecting", label: "Collecting" },
            ]}
            placeholder="Hobbies"
            isMulti
            onChange={(e) => {
              let value = "";
              setnoHobbies(e.length)
              if (e.length > 5) {
                delete e[0];
              }
              for (let i = 0; i < e.length; i++) {
                value += e[i].value + ", ";
              }
              setHobbies(value);
            }}
            isSearchable
          />
          <button onClick={submmitData}>Submit</button>
        </div>
        <div className="logo">
          {/* all the  */}
          <h1>Cuboholic</h1>
        </div>
      </div>
    </div>
  );
}
