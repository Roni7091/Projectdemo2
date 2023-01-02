import React, {useState} from 'react';
import { AiFillMacCommand } from 'react-icons/ai';
import files from './design/task3.module.css';
import Popalert from './Popalert';
const Task3 = () => {
    const [toogle, setToogle]=useState(false);
    const toogleHandler = () => {
        setToogle(!toogle);
    };
  return (
    <div>
        <section className={files.firstshubh}>
                <div> <label className={files.hii}> <AiFillMacCommand size={20} />   MU NUMBER</label>
<input type="text" className={files.hlo}  placeholder='HD12123145_12' />  </div>
        </section>


        <section className={files.secondshubh}>
            <div>
                <label htmlFor="" className={files.spaces}> #Transform Order Number:</label>  <br />
                <input type="text" name="" id="" className={files.space} placeholder='123456' />
            </div>
            <div>
            <label htmlFor="" className={files.spaces}> Transform Order Status:</label> <br />
            <input type="text" name="" id="" className={files.space} placeholder='CREATED' />
            </div>
            <div>
            <label htmlFor="" className={files.spaces}>*sales order #</label>    <br />
            <input type="text" name="" id="" className={files.space}  placeholder='SO' />
            </div>
        </section>


        <section className={files.thirdshubh}>
            <div>
            <label htmlFor="" className={files.ppp1}> Enter Delivery:</label>  <br />
            <input type="text" name="" id="" className={files.space} placeholder='US'  />
            </div>
            <div>

            <label htmlFor="" className={files.ppp2}>* Ship To Country</label> <br />
<select className={files.movess}  placeholder='Enter Country Name'>
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
            <label htmlFor="" className={files.ppp3}>Transformation Site</label>    <br />
            <input type="text" name="" id="" className={files.space} placeholder='Bengalaru,India' />
            </div>
        </section>

        <section className={files.fourshubh}>
        <div>
<label htmlFor="" className={files.ok1}> *Enter GSTIN </label> <br />
<input type="text" className={files.ok5} />
</div>
<div>
<label htmlFor="" className={files.ok1}> *ENTER Batch</label> <br />
<input type="text" className={files.ok5} />
</div>
<div>
<label htmlFor="" className={files.ok3}> *ENTER Material</label>  <br />
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
<label htmlFor="" className={files.ok1}> ENTER Variant</label>  <br />
<input type="text" className={files.ok5} />
</div>
        </section>


        <section className={files.fiveshubh}>
            
            <button className={files.tok}>save</button>
            
        </section>
        <section className={files.sixshubh}>
            <div >
            <button className={files.tok1}>RE-Read Master Data</button>


            <button onClick={toogleHandler} className={files.tok2}>Create Wo </button>
            <div className={files.poptop}>
              {toogle ? <Popalert  toogle={toogle} setToogle={setToogle}/>:null}
            </div>
        </div>
        </section>
       <section className={files.sevenshubh}>
            
            <b style={{color:"black"}}>Total Number Of Items(1):</b>
            
       </section>
       <section className={files.eightshubh}>
       <table>
<thead>
    <tr>
        <th>  <input type="checkbox"  /> </th>
        <th></th>
        <th>Product Code </th>
        <th> Product Description</th>
        <th> Variant/ Mode Code</th>
        <th> GTIN</th>
        <th> Quantity </th>
        <th> UCOM</th>
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
        <td>  <input type="checkbox"  /></td>
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
    
    
   

</tbody>
</table>

       </section>












    </div>
  )
}

export default Task3;