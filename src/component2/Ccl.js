import React from 'react';
import Model5 from './design2/ccl.module.css';


const Ccl = () => {
  return (
    <div className={Model5.main}>
      <section className={Model5.first}>
      <div>   
      <label for="text" > *product code</label>
              <br />
            <input type="text" required />

           </div>


           <div>
            <label for="">*ship to country:</label>
            <br />

        <select >
            <option value="none"></option>
            <option value="Afghanistan" >Afghanistan</option>
  <option value="Algeria">Algeria</option>
  <option value="Australia">Australia</option>
  <option value="Japan">Japan</option>
  <option value="Africa">Africa</option>
  <option value="Argentina">Argentina</option>
  <option value="China">China</option>
  <option value="India">India</option>
  <option value="Pakistan">Pakistan</option>
  <option value="Canada">Canada</option>
  <option value="Cuba">Cuba</option>
  <option value="Finland">Finland</option>
  <option value="Dubai">Dubai</option>
  <option value="Afganistan">Afganistan</option>
  <option value="America">America</option>
  <option value="Russia">Russia</option>
  <option value="Nepal">Nepal</option>
  <option value="Indonesia">Indonesia</option>
  <option value="Malaysia">Malaysia</option>
</select>
            </div>
      </section>

           <section className={Model5.second}>
           
                <button type="button" class={Model5.but1}><b>Display</b></button>
                <button type="button" class={Model5.but2}><b>Reset</b></button>
 
            
           </section>
 

    </div>
  )
}

export default Ccl;