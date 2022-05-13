import React, { useState } from 'react';

import './App.css';

import { Table } from "./Components/Table";
import { header } from "./constants";

import primaryData from './data.json';


const App = () => {
  const [ data, setData ] = useState(primaryData.all_data);

  return (
    <div className="App">
      <div className="container">
        <Table
          header={header}
          setData={setData}
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
