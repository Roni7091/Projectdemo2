import React,{useState} from 'react';
import Alert from '../components/Alert';

const Popup1 = () => {

    const [toogle, setToogle]=useState(false);
    const toogleHandler = () => {
        setToogle(!toogle);
    };



  return (
    <div>
        <button onClick={toogleHandler} className="top3" > popup</button>
        {toogle ? <Alert toogle={toogle} setToogle={setToogle}/>:null}




    </div>
  )
}

export default Popup1