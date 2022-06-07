import {React, useState } from 'react';
import './App.css';
import Box from './components/Box';
import Container from './components/Container';
const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [divList, setDivList] = useState([]);
  const [containerList, setContainerList] = useState([]);
  const color = 'orange'
  const createBox = e => {
      setDivList(divList.concat(<Box style={{backgroundColor: color}} key={divList.length}></Box>))
      console.log("Box created")
    }
  const createContainer = e => {
    setDivList(divList.concat(
    setContainerList(containerList.concat(<Container key={containerList.length} array={divList} containerList={containerList} createBox={createBox} createContainer={createContainer} ></Container>))
    
    ))
  }
  return (
    <div className="App"> 
    
      <div className='outline-border'>
        {divList}
        <div className='btns' onMouseOver={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} >
          {containerList}
        {isShown && (
          <div className='buttons'>
            <button className='btn' onClick={createBox}>Box</button>
            <button className='btn' onClick={createContainer}>Container</button>
          </div>
        )}
        <div className='add-button'>Add</div>
        </div>
      </div>
    </div>
  );
}

export default App;
