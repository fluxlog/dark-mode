import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [query, setQuery] = useState("");
console.log(query);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${query}&order=market_cap_desc&per_page=10&page=1&sparkline=true`
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, [query]);
  return (
    <div className="App">
      <Navbar setQuery={setQuery} query={query}/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
