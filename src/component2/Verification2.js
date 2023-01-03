import React from 'react';
import { AiFillMacCommand } from 'react-icons/ai';
import Model3 from './design2/verification2.module.css'; 

const Verification2 = () => {
  return (
    <div className={Model3.top}>
            <section className={Model3.firstsh}>
            <div> <label > <AiFillMacCommand size={20} /> TRANSFORM ORDER NUMBER</label>
            <input type="text"   placeholder='TO136O' />  </div>

            <div> <label > <AiFillMacCommand size={20} />   HU NUMBER</label>
                <input type="text"   placeholder='HD12123145_12' />   </div>
            </section>



            <section className={Model3.secondsh}>
                    <div>
                    <label htmlFor="" > TransFormation Site:</label>  <br />
                    <input type="text" name="" id=""    />
            
                    </div>
                    <div>
                    <label htmlFor="" > Ship To Country</label>  <br />
                    <input type="text" name="" id=""    />
                    </div>
                    <div>
                    <label htmlFor="" > To Start Date And Time</label>  <br />
                    <input type="text" name="" id=""    />
                    </div>
                    <div>
                    <label htmlFor="" > OE Operator</label>  <br />
                    <input type="text" name="" id=""    />
                    </div>
                    <div>
                    <label htmlFor="" > Transform Order Status</label>  <br />
                    <input type="text" name="" id=""    />
                    </div>
                    <div>
                    <label htmlFor="" > Verify Line Clearance</label>  <br />
                    <input type="checkbox" name="" id="" className={Model3.check}   />
                    </div>
                    <div>
                    <label htmlFor="" > Material Number:</label>  <br />
                    <input type="text" name="" id=""    />
                    </div>
                    
                    <div>
                    <label htmlFor="" >Batch Number </label>  <br />
                    <input type="text" name="" id=""    />
                    </div>





            </section>


            <section className={Model3.thirdsh}>
                        <div ><h2>Work Order Details:</h2></div>
                        <div className={Model3.mid}>
                            <button className={Model3.but1}>Clear</button>
                            <button className={Model3.but2} >Save</button>
                        </div>


            </section>
            <section className={Model3.foursh}>
                    <table className={Model3.tabshad}>
                                <thead>
                                    <tr>
                                        <th>Work Order Number</th>
                                        <th>Material Number</th>
                                        <th>Batch-Number</th>
                                        <th>GTIN</th>
                                        <th>Work Order Quantity</th>
                                        <th>Work Order Status</th>
                                        <th>WO Disposition</th>
                                        <th> Accepted Quantity</th>
                                        <th>Rejection Quantity</th>
                                        <th>Reject Reason</th>
                                        <th>Comments</th>
                                        <th>Exception HU</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Wo179</td>
                                        <td>24236-92</td>
                                        <td>BATCHH</td>
                                        <td>10895878945589</td>
                                        <td>1</td>
                                        <td>PENDING QA </td>
                                        <td>
                                            
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <input type="text" />
                                        </td>
                                    </tr>
                                </tbody>
                    
                    
                    
                                        </table>



            </section>





    </div>
  )
}

export default Verification2