import {React , useState}  from 'react';
import Alertpop1 from './Alertpop1';
import FOR from './form2.module.css';

const Form2 = () => {
    const [toggleT1,setToggleT1] = useState(false);
  const toggleHandlerT1 =(event)=>{
    event.preventDefault();
    setToggleT1(!toggleT1);
  }

  return (
    <>
    <div className={FOR.f1cont}>
        <form>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>WH :</label>
                <input className={FOR.input1} type="text"></input>
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>Location:</label>
                <input className={FOR.input1} type="text"></input>
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>Product:</label>
                <input className={FOR.input1} type="text"></input>
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>Lot :</label>
                <input className={FOR.input1} type="text"></input>
            </div>
            <div className={FOR.inputf1} >
                <label className={FOR.label2}>Quantity :</label>
                <input className={FOR.input2} type="text"></input>
                <input className={FOR.input3} type="text"></input>
            </div>
            
            <div>
                <button className={FOR.btn2} onClick={toggleHandlerT1}>Submit</button>
            </div>
            {toggleT1?<Alertpop1/>:null}

            
        </form>
    </div>
    </>

  )
}

export default Form2;