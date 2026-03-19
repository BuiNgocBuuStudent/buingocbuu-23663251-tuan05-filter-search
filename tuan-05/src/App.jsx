import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
//import "./App.css";

function App() {
  const [rootData, setRootData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const [searchData, setSearchData] = useState("");

  var url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    async function fetchData() {
      var respond = await fetch(url);
      var data = await respond.json();
      setRootData(data);
    }
    fetchData();
  }, []);
  function handleSearchData(data) {
    setSearchData(data.target.value);
    console.log(data.target.value);

    var filter = rootData.filter((item) => {
      return item.title.includes(data.target.value);
    });
    setFilterData(filter);
  }
  return (
    <>
      <input
        type="text"
        value={searchData}
        placeholder="Input title..."
        onChange={handleSearchData}
      />
      {filterData.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
            <h3>{item.body}</h3>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default App;
