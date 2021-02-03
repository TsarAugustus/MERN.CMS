import './App.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [blogData, updateData] = useState();
  useEffect(() => {
    Axios.get('/testAPI').then(res => {
      if(res.status === 200)
        return res.data;
    }).then(data => updateData(data.message));
  });  

  return (
    <div className="App">
      {blogData}
    </div>
  );
}

export default App;
