//  component configuration list webpage35

import React from 'react';
import './design/Four.css';


const Four = () => {
  return (
    <div>
    <div className="nav">
        <img src="https://w7.pngwing.com/pngs/764/620/png-transparent-web-feed-computer-icons-rss-feed-angle-text-rectangle-thumbnail.png" alt="" className='abb'/>
        <h6 >ʝօհղʂօղ-ʝօհղʂօղ</h6>
        <h4>component configuration list</h4>
        <h3>Welcome Shubham Raj</h3>
        <div className="placed">
         <img src="https://icons.veryicon.com/png/o/miscellaneous/ios/ios-notifications-4.png" alt=""  className='moves' />    
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Red_question_icon_with_gradient_background.svg/1200px-Red_question_icon_with_gradient_background.svg.png" alt="" className='moves' />
        <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-shutdown-icon-png-image_1009846.jpg" alt="" className='moves' />
         </div>
    </div>
     <div className='okk'>

<div>   
<label for="text"  > *product code</label>
<br />
            <input type="text" placeholder='45678995552s' required />

           </div> 
            
            <div>
            <label for="">*ship to country:</label>
            <br />

<select className='movess'>
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

      

    </div>
    <div className='move'>
<button type="button" class="btn1"><b>Display</b></button>
<button type="button" class="btn2"><b>Reset</b></button>
 
 </div>
   </div>

  )
}

export default Four;