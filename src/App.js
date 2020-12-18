import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function Component(props) {

  //const [value, setValue] = useState(props.data);
// This will launch only if propName value has chaged.
  //useEffect(() => { setValue(props.data) }, [props.data]);

  function editProp(key) {
    const value = prompt("Enter a value for " + key);
    props.handler(key, value, props.index)
  }


  return (
    <div style={{ border: "solid black", borderRadius: 25, width: 500, margin: 50 }} className="Item">
        <p style={{ marginLeft: "-70%", marginRight: "-18%" }} onClick={() => editProp("number")}>GIA Report No. {props.data.number}</p>
        <div style={{ border: "solid black", borderRadius: 25, width: "95%", margin: 10 }} className="Item">
          <div style={{ display: "flex"}}>
            <div style={{ flex: "35%" }}>
              <p onClick={() => editProp("carat")}>Carat</p>
              <p onClick={() => editProp("color")}>Color</p>
              <p onClick={() => editProp("colorOrigin")}>Color Origin</p>
              <p onClick={() => editProp("clarity")}>Clarity</p>
              <p onClick={() => editProp("cut")}>Cut</p>
            </div>
            <div style={{ borderRight: "solid black" }}></div>
            <div style={{ flex: "65%" }}>
              <p>{props.data.carat}</p>
              <p>{props.data.color}</p>
              <p>{props.data.colorOrigin}</p>
              <p>{props.data.clarity}</p>
              <p>{props.data.cut}</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: -10}}>
            <div style={{ flex: "35%" }}>
              <p onClick={() => editProp("fluo")}>Fluo. {props.data.fluo}</p>
              <p onClick={() => editProp("pol")}>Pol. {props.data.pol}</p>
            </div>
            <div style={{ flex: "65%" }}>
              <p onClick={() => editProp("size")}>Size. {props.data.size}</p>
              <p onClick={() => editProp("sym")}>Sym. {props.data.sym}</p>
            </div>
          </div>
      </div>
  );
}

function App() {
  const [testParam, setTestParam] = useState([{
    number: "2316239570",
    carat: "0.30 ct",
    color: "E",
    colorOrigin: "Natural",
    clarity: "IF",
    cut: "Pear Shape",
    fluo: "NONE",
    pol: "5.86 x 3.87 x 2.25mm",
    size: "GOOD",
    sym: "VERY GOOD"
  }]);
  function handler(key, value, index) {
    const newValue = [...testParam];
    newValue[index] = {...testParam[index], [key]: value};
    setTestParam(newValue);
  }
  function newComponent() {
    setTestParam([...testParam, {
      number: "2316239570",
      carat: "0.30 ct",
      color: "E",
      colorOrigin: "Natural",
      clarity: "IF",
      cut: "Pear Shape",
      fluo: "NONE",
      pol: "5.86 x 3.87 x 2.25mm",
      size: "GOOD",
      sym: "VERY GOOD"
    }]);
  }
  const listItems = testParam.map((item, index) =>
    <Component data={item} handler={handler} index={index} />
  );
  return (
    <div className="App">
      <ul>{listItems}</ul>
      <button onClick={newComponent}>
        New
      </button>
    </div>
  );
}

export default App;
