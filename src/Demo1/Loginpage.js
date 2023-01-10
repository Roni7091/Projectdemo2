import React from 'react';
import '../Demo1/loginpage.css';
// import{FaSearch} from 'react-icons/fa';
import { FaDatabase} from 'react-icons/fa';
import{GrAnalytics} from 'react-icons/gr';
import {GrTransaction} from 'react-icons/gr';
import pic1 from '../Demo1/logo.jpeg';

import {NavLink} from 'react-router-dom';


const Loginpage = () => {
  return (
    <div className='top'>
            
            {/* <div className="topnav">

                <div className='imgs' >  <img src={pic1} alt="" />   </div>
                <div className='navbar'>
                    <div className='main1'>Mygo Consulting Demo Apps
                                                     </div>
                    <div className='navlast'>Welcome,Admin</div>
                    <div><BsBellFill size={20}/></div>
                    <div> <BsFillQuestionOctagonFill size={20}/></div>
                    <div>  <FaPowerOff size={20}/></div>
                    
                </div>

            </div> */}

           
            {/* <div className='maintop'>
                Featured Topics:
            </div> */}
            <div className='maincard'>
                    <div className='innercard'>
                                <div className='logo'><GrTransaction size={30}/>  
                                
                                </div>
                               
                                <NavLink to={"/home1"}><div className='second'> Transactional App </div></NavLink>
                                
                    </div>
                    <div className='innercard'>
                    <div className='logo'>  <GrAnalytics size={30}/> </div>
                                <div className='second'> Analytical App </div>
                                {/* <div className='third'> 131 Insights  &emsp;  &emsp;    &emsp;  &emsp;    #po </div> */}
                    </div>
                    <div className='innercard'>
                    <div className='logo'><FaDatabase size={30}/> </div>
                                <div className='second'> Data Cockpit</div>
                                {/* <div className='third'> 51 Insights  &emsp;  &emsp;    &emsp;  &emsp;  &emsp;     #po </div> */}
                    </div>
            </div>




    </div>
  )
}

export default Loginpage;