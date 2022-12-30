import React,{useState} from 'react';
import Alert1 from './Alert1';


const Popup2 = () => {

    const [toogle, setToogle]=useState(false);
    const toogleHandler = () => {
        setToogle(!toogle);
    };


  return (
    <div>


<button onClick={toogleHandler} className='tok2'>Popup </button>
<div className="poptop">
    {toogle ? <Alert1  toogle={toogle} setToogle={setToogle}/>:null}
</div>




    </div>
  )
}

export default Popup2;