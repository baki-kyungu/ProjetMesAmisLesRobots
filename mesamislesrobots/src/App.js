import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRobots, setFilteredRobots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setRobots(data);
      setFilteredRobots(data);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = robots.filter((robot) =>
      robot.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRobots(filtered);
  };

  return (
    <div className="rb--container">
      <div className="header--container">
        <span className="cardTitle">MES AMIS ROBOTS</span>
        <input
          className="search"
          placeholder="recherche par nom"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {filteredRobots.map((robot) => (
        <div class="card--container">
          <img
            src={`https://robohash.org/${robot.id}`}
            className="card-image"
            alt=""
            srcset=""
          />
          <h4 className="robot--name">{robot.name}</h4>
          <p className="robot--info">{robot.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
