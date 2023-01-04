import React from 'react';
import { AiFillMacCommand } from 'react-icons/ai';
import Model2 from './design2/verification1.module.css';
import Task4 from './Task4';
import Verification2 from './Verification2';

const verification1 = () => {
  return (
    <div className={Model2.top}>
             <section className={Model2.firstsh}>
              
            <div> <label > <AiFillMacCommand size={20} /> TRANSFORM ORDER NUMBER</label>
            <input type="text"   placeholder='TO136O' />  </div>

            <div> <label > <AiFillMacCommand size={20} />   HU NUMBER</label>
                <input type="text"   placeholder='HD12123145_12' />   </div>
            </section>
      <div className={Model2.top2}>
          <Verification2/>


      </div>




    </div>
  )
}

export default verification1;