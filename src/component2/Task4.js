import React from 'react';
import { AiFillMacCommand } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import  Model from './design2/task4.module.css';

const Task4 = () => {
  return (
    <div className={Model.top}>
            <section className={Model.firstsh}>
            <div> <label > <AiFillMacCommand size={20} /> TRANSFORM ORDER NUMBER  </label>
            <input type="text"   placeholder='TO136O' />  </div>

            <div> <label > <AiFillMacCommand size={20} />   HU NUMBER  </label>
                <input type="text"   placeholder='HD12123145_12' />    </div>
            </section>



            <section className={Model.secondsh}>
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
                    <input type="checkbox" name="" id="" className={Model.check}   />
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


            <section className={Model.thirdsh}>
                        <div ><h2>Work Order Details:</h2></div>
                        <div className={Model.mid}>
                            <button className={Model.but1}>Clear</button>
                            <button className={Model.but2} >Save</button>
                        </div>


            </section>
            <section className={Model.foursh}>
                    <table className={Model.tabshad}>
                                <thead>
                                    <tr>
                                    <th>Work Order Number <BiFilterAlt /></th>
                                        <th>Material Number <BiFilterAlt/></th>
                                        <th>Batch-Number <BiFilterAlt/>  </th>
                                        <th>GTIN<BiFilterAlt/> </th>
                                        <th>Work Order Quantity <BiFilterAlt/></th>
                                        <th>Work Order Status <BiFilterAlt/></th>
                                        <th>WO Disposition <BiFilterAlt/></th>
                                        <th> Accepted Quantity <BiFilterAlt/></th>
                                        <th>Rejection Quantity <BiFilterAlt/></th>
                                        <th>Reject Reason <BiFilterAlt/></th>
                                        <th>Comments <BiFilterAlt/></th>
                                        <th>Exception HU <BiFilterAlt/></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Wo179</td>
                                        <td>24236-92</td>
                                        <td>BATCHH</td>
                                        <td>10895878945589</td>
                                        <td>1</td>
                                        <td>QA IN PROGRESS</td>
                                        <td>
                                            <select className={Model.opt} >
                                                <option value="none"></option>
                                                <option value="accept">Accept</option>
                                                <option value="Reject">Reject</option>
                                                <option value="Partially Accept">Partially Accept</option>
                                            </select>
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

export default Task4