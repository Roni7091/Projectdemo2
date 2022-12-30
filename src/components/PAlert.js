import React, {useState} from 'react';
import './design/PAlert.css';


const PAlert = ({toogle,setToogle}) => {
   
    const toogleHandler= () => {
        setToogle(!toogle);
    } ;
  return (
    <div className='top'>
       
             <div></div>
            <div style={{color:"white"}}>Work Order Has Been Created Successfully</div>
             <div  > 
             {toogle ? (
                <button onClick={toogleHandler}   >X</button>
            ) :null}
        </div>
      




    </div>
  )
}

export default PAlert;