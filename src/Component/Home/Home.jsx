import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div >
            <div className='d-flex justify-content-center align-items-center mt-5 '>
                <NavLink style={{textDecoration:"none"}} to="/rider"><Button style={{borderRadius:"30px"}} className='mx-2 p-4' variant="outline-primary"> Join as a Rider</Button></NavLink>
                <NavLink style={{textDecoration:"none"}} to="/learner"><Button style={{borderRadius:"30px"}} className='mx-2 p-4' variant="outline-success"> Join as a Learner</Button></NavLink>
            </div>
            <br />
            <h4 className='text-center'>----or----</h4>
            <br />
            <div className='d-flex justify-content-center align-items-center '>
                <NavLink style={{textDecoration:"none"}} to="/login"><Button style={{borderRadius:"30px"}} className=' mx-2 p-4 text-center' variant="outline-success">Login</Button></NavLink>
            </div>
            
        </div>
    );
};

export default Home;