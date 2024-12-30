import './App.css';
import data from './data';
import React, {useState} from 'react';

import Tours from './components/Tour';


function App() {
  const[initialVal, changeFun] = useState(data)
  function removeTour(id){
    const newData = initialVal.filter(item=>item.id!==id);
    changeFun(newData);
  
  }
   
  function updateTour(){
    changeFun(data);

  }


  if(initialVal.length==0){
    return<>
    <h1>No Tour Left</h1>
    <button onClick={updateTour}>Refresh</button>

    </>
    
  }
  

  return (
   <>
    <div className="container" >
      <h1 className="heading">Plan With Love</h1>
    </div>
    <Tours data={initialVal} removeTour={removeTour}></Tours>
    </>
  );
}

export default App;
