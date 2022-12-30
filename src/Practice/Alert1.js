import React,{useState} from 'react';
import './design/Alert1.css';

const Alert1 = ({toogle,setToogle}) => {
    const toogleHandler= () => {
        setToogle(!toogle);
};


  return (
    <div>
           <div className='top'>
       
       <div></div>
      <div style={{color:"white"}}>Workstation successfully Created</div>
       <div  > 
       {toogle ? (
          <button onClick={toogleHandler}   >X</button>
      ) :null}
  </div>





</div>  




    </div>
  )
}

export default Alert1;