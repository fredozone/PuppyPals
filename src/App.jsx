import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppyList: ", puppies);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className="puppies-list-info">
      {featPupId && (
        <div className="position-relative">
          <div className="info-puppy">
            <hr className="right-hr" />
            <hr className="left-hr" />
            <div className="info-puppy-div ">
              {" "}
              <b>Name</b>
            </div>
            <h2>{featuredPup.name}</h2>
            <ul className="info-list-puppy">
              <li>
                <b>Age:</b> {featuredPup.age}
              </li>
              <li>
                <b>Email:</b> {featuredPup.email}
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="list-puppies">
        <p>Puppies List</p>
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
