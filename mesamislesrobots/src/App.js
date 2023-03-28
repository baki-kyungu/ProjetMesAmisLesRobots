import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [robots, setRobots] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setRobots(data);
    };
    fetchData();
  }, []);

  return (
    <div className="rb--container">
      <div className="header--container">
        <span className="cardTitle">MES AMIS ROBOTS</span>
        <input className="search" placeholder="recherche par nom" />
      </div>

      {robots.map((robot) => (
        <div class="card--container">
          <img
            src={`https://robohash.org/${robot.id}`}
            className="rb-image"
            alt=""
            srcset=""
          />
          <h4 className="subTitle">{robot.name}</h4>
          <p className="rbSubTitle">{robot.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
