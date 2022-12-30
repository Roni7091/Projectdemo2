import React from 'react';
import './design/Alert.css';

const Alert = ({toogle,setToogle}) => {

    const toogleHandler= () => {
        setToogle(!toogle);
    } ;


  return (
    <div className='top'>
       <div className='top1'>
           <div>

           </div>
           <div>
            <h5 style={{color:"white"}} >Component Assignment System message</h5>
           </div>
           <div>
           {toogle ? (
                <button onClick={toogleHandler} style={{color:"red"}} >X</button>
            ) :null}
           </div>
       </div>
       <div className='top2'> 
        <h6 style={{color:"black"}}>The Assignment's has been recieved and is being Processed for Updating UI.</h6>
        </div>



    </div>
  )
}

export default Alert;