import React, { useState } from 'react';
import { ImMenu } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';

import './example.css'



const Example = () => {
    const [drop, setDrop] = useState(false)
    return (
        <div>
            <div className='topcorner'>


                <div className='topinner'> <ImMenu size={20} className='icon' /> <h2>Supply Chain  <br />
                    Management</h2></div>
            </div>
            <div className='topnav'>
                <div >Work Order Execution</div>
                <div>Verification</div>
                <div>RSC WorkFlow Index</div>
                <div>Set Location</div>
                <div className='top45'>
                    <CgProfile size={27} />
                    <div class="dropdown">
                        <button onClick={() => setDrop(val => !val)}>  Dropdown button
                        </button>
                        {drop &&
                            <ul class="dropdown-menu" >
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>}
                    </div>
                </div>

            </div>



            {/* //cards section */}
            <div className="cards">
                <div>
                </div>
                <div className='firstcard'>
                    <div className='topmain'>

                    </div>
                    <div className='topmain1'>
                        <div className="inner">
                            <div className='first'> <b>Data Coolpit</b></div>
                            <div className='inner1'>
                                <ul type="circle"  >
                                    <li>Master Data</li>
                                    <li>Product Data upload</li>
                                    <li>Component Master</li>
                                    <li>Component Assignment</li>
                                    <li>Component Configuration list</li>
                                    <li>Component Repository Bulk Upload</li>
                                    <li>Cr Assignment Test App</li>

                                </ul>
                            </div>
                            <div className="inner2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkSMZsV691hi5WDs9juZp5XWKSkvMDWFr1g&usqp=CAU" alt="" className='imgsizer' />
                            </div>
                        </div>
                    </div>


                </div>


                <div className='secondcard'>
                    <div className='topmain'>

                    </div>
                    <div className='topmain1'>
                        <div className="inner">
                            <div className='first'> <b>Product Transformation</b></div>
                            <div className='inner1'>
                                <ul type="circle"  >
                                    <li>Work Order Execution</li>
                                    <li>Verification</li>
                                    <li>User Reporting</li>
                                    <li>Create Transformation Order</li>
                                    <li>Display To/Work Order</li>
                                    <li>Cancel To/Work Order</li>


                                </ul>
                            </div>
                            <div className="inner3">
                                <img src="https://www.shutterstock.com/image-photo/happy-couple-having-fun-while-260nw-618433028.jpg" alt="" className='imgsizer2' />
                            </div>
                        </div>
                    </div>


                </div>
                <div className='thirdcard'>
                    <div className='topmain'>

                    </div>
                    <div className='topmain1'>
                        <div className="inner">
                            <div className='first'> <b>Configuration</b></div>
                            <div className='inner1'>
                                <ul type="circle"  >
                                    <li>Set Location</li>
                                    <li>Table Viewer</li>
                                    <li>Config Maintainance</li>
                                    <li>Error Handler Report</li>
                                    <li>Audit Log</li>
                                    <li>Error Configuration</li>
                                    <li>Qik Reporting</li>

                                </ul>
                            </div>
                            <div className="inner4">
                                <img src="https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg" alt="" className='imgsizer3' />
                            </div>
                        </div>
                    </div>


                </div>
                <div></div>




            </div>




        </div>
    )
}

export default Example;