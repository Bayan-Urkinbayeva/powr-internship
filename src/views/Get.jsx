import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import '../Page.css';

const Show = () => {
  const {id} = useParams()
  const [rerender, setRerender] = useState(false);
  const [createJson, setJson] = useState();
  const [buildJson, setBuildJson] = useState([]);
  const [list, setList] = useState([]);
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

useEffect(() => {
    getSavedJson();
},[])

const getSavedJson =  () => {
 axios.get(`http://localhost:8000/${id}`)
  .then((res) => {
    setList(res.data)
    setRerender(!rerender);
  })
  .catch((error) => {
    console.log(error)
  })
}

  const build = (e) => {
    setList(JSON.parse(buildJson));
    setRerender(!rerender);
  }

  return (
    <div className="App">
      {Container(list, rerender, setRerender)}
      <div className='create-json'>
        <label>{createJson}</label>
        <button className='button' onClick={() => {
          setJson(JSON.stringify(list))
        }}>Create JSON</button>
      </div>
      <div className='build'>
        <textarea rows="10" cols="40"  type="text" value={buildJson} onChange={(e) => setBuildJson(e.target.value)}/>
        <button className='button' onClick={build}>Build</button>
      </div>
    </div>
  );
}
export default Show;

let uid = 0;
const Box = (clr, rrnd, srnd) => {
  const handleChange = e => {
    clr.color = e.target.value
    srnd(!rrnd)
  }
  return (
    <div key={ ++uid } style={{backgroundColor: clr.color}}  className="box">
      <input key={++uid} type="color" className="input" onChange={handleChange}></input>
    </div>
    
  );
}

const Container = (items, rrnd, srnd) => {
  return (
    <div key={++uid} style={{ border: '1px solid black' , padding: '15px', margin: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {items.map( (elem) => {
        if (elem.type === "Box") {
          return Box(elem, rrnd, srnd);
        }
        else if (elem.type === "Container") {
          return Container(elem.items, rrnd, srnd);
        }
      })}
    
    <div className='btns'>
                <div className='buttons'>
                    <button className='btn' onClick={() => {
                        items.push({
                          type: "Box",
                          color: "orange"
                        })
                      srnd(!rrnd)
                      }} key={ ++uid } >Box</button>
                    <button className='btn' onClick={() => {
                        items.push({
                          type: "Container",
                          items: []
                        })
                      srnd(!rrnd)
                      }} key={ ++uid } >Container</button>
                </div>
            <div className='button'>Add</div>
        </div>
    </div>
  );
}