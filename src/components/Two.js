// component configuration list webpage 33


import React from 'react';
import './design/Two.css';

const Two = () => {
  return (
   <div>
    <div className="nav">
        <img src="https://w7.pngwing.com/pngs/764/620/png-transparent-web-feed-computer-icons-rss-feed-angle-text-rectangle-thumbnail.png" alt="" className='abb'/>
        <h6 >ʝօհղʂօղ-ʝօհղʂօղ</h6>
        <h4>Component Configuration List</h4>
        <h3>Welcome Shubham Raj</h3>
         <div className="placed">
         <img src="https://icons.veryicon.com/png/o/miscellaneous/ios/ios-notifications-4.png" alt=""  className='moves' />    
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Red_question_icon_with_gradient_background.svg/1200px-Red_question_icon_with_gradient_background.svg.png" alt="" className='moves' />
        <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-shutdown-icon-png-image_1009846.jpg" alt="" className='moves' />
         </div>
    </div>
     <div className='okk'>

<div>   
<label for="text" > *product code</label>
<br />
            <input type="text" required />

           </div> 
            
            <div>
            <label for="">*ship to country:</label>
            <br />

<select className='movess'>
  <option ></option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
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

export default Two;