//component create transfomation order webpage40


import React, {useState} from 'react';
import './design/Popup.css';

import Popalert from './Popalert';



const Popup = () => {


        const [toogle, setToogle]=useState(false);
        const toogleHandler = () => {
            setToogle(!toogle);
        };

  return (
    <div>
    <div className="nav">
<img src="https://w7.pngwing.com/pngs/764/620/png-transparent-web-feed-computer-icons-rss-feed-angle-text-rectangle-thumbnail.png" alt="" className='abb'/>
<h6 >ʝօհղʂօղ-ʝօհղʂօղ</h6>
<h4>Create Transformation Order</h4>
<h3>Welcome Shubham Raj</h3>
<div className="placed">
         <img src="https://icons.veryicon.com/png/o/miscellaneous/ios/ios-notifications-4.png" alt=""  className='moves' />    
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Red_question_icon_with_gradient_background.svg/1200px-Red_question_icon_with_gradient_background.svg.png" alt="" className='moves' />
        <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-shutdown-icon-png-image_1009846.jpg" alt="" className='moves' />
         </div>
</div>

<div className='second'>
<label className='hii'> MU NUMBER</label>
<input type="text" className='hlo'  placeholder='HD12123145_12' />
</div>

<div className='third'>
<div>
<label htmlFor="" className='spaces'> #Transform Order Number:</label>  <br />
<input type="text" name="" id="" className='space' placeholder='123456' />
</div>

<div>
<label htmlFor="" className='spaces'> Transform Order Status:</label> <br />
<input type="text" name="" id="" className='space' placeholder='CREATED' />
</div>

<div>
<label htmlFor="" className='spaces'>*sales order #</label>    <br />
<input type="text" name="" id="" className='space'  placeholder='SO' />
</div>
</div>



<div className='four'>
<div>
<label htmlFor="" className='ppp1'> Enter Delivery:</label>  <br />
<input type="text" name="" id="" className='space' placeholder='US'  />
</div>

<div>
<label htmlFor="" className='ppp2'>* Ship To Country</label> <br />
<select className='movess'  placeholder='Enter Country Name'>
<option value="none">None</option>
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

<div>
<label htmlFor="" className='ppp3'>Transformation Site</label>    <br />
<input type="text" name="" id="" className='space' placeholder='Bengalaru,India' />
</div>
</div>


<div className="sixx">
<div>
<label htmlFor="" className='ok1'> *Enter GSTIN </label> <br />
<input type="text" className='ok5' />
</div>
<div>
<label htmlFor="" className='ok1'> *ENTER Batch</label> <br />
<input type="text" className='ok5' />
</div>
<div>
<label htmlFor="" className='ok3'> *ENTER Material</label>  <br />
<select >
    <option value="">LABEL1 MATERIAL........</option>
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
</select>
</div>
<div>
<label htmlFor="" className='ok1'> ENTER Variant</label>  <br />
<input type="text" className='ok5' />
</div>
</div>
<div className='tik'>
<button className='tok'>save</button>
</div>
<div className='tik'>
<button className='tok1'>RE-Read Master Data</button>




<button onClick={toogleHandler} className='tok2'>Create Wo </button>
<div className="poptop">
    {toogle ? <Popalert  toogle={toogle} setToogle={setToogle}/>:null}
</div>

</div>

<div className='five'>
<b>Total Number Of Items(1):</b>
</div>

<div>
<table>
<thead>
    <tr>
        <th> <input type="radio"  /> </th>
        <th></th>
        <th>Product Code </th>
        <th> Product Description</th>
        <th> Variant/ Mode Code</th>
        <th> GTIN</th>
        <th> Quantity </th>
        <th> UOM</th>
        <th> Batch</th>
        <th> Dom</th>
        <th>SLED</th>
        <th>Comments</th>
        <th>Master Data Error..</th>
        <th>Work Order#</th>
    </tr>
</thead>
<tbody>

    <tr>
        <td> <input type="radio"  /></td>
        <td></td>
        <td>242436-12</td>
        <td>COUPLER AC ZOOM </td>
        <td>12</td>
        <td>108869962556</td>
        <td>1</td>
        <td>EA</td>
        <td>BATCHH</td>
        <td></td>
        <td></td>
        <td>MDM CHECK SUCCESS</td>
        <td>N/A</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    

</tbody>
</table>
</div>



</div>
  )
}

export default Popup