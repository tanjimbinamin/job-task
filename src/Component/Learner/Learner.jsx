import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useLocation,useHistory } from 'react-router-dom';
import img from "./ride.svg"
import Swal from 'sweetalert2'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const Rider = () => {
    

    const location=useLocation()
    const history=useHistory()
    const url=location?.state?.from || "/home"

    
    
     const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const onSubmit = data =>{ 
        
        console.log(data)
        Swal.fire(
            
            'Successfully Registered!',
            'You became a learner!',
            'success'
        
          )
        history?.push(url)
        
       
        fetch(`http://localhost:5000/learner`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
    };

    return (
        
        <Container>
            <h1 className='text-center mt-5 mb-5'>Welcome to the Learning platform</h1>
            <Row className="mt-5 shadow-3">
                <Col sm={6} style={{backgroundColor:"#6062df", borderRadius:"10px",boxShadow: "7.0px 14.1px 14.1px hsl(0deg 0% 0% / 0.28)" ,overFlow:"hidden"}} >
                   <img style={{width:"100%"}} src={img} alt="" />
                </Col>
                <Col sm={5} xs={5}>
                        <div className="login-box w-25 m-auto mt-5">
                                <div className="event-box border border d-flex justify-content-center align-items-center">
                                <div className="login-form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        {...register("name" , { required: true })}
                                        placeholder="Full Name" 
                                        className="p-2 m-2"
                                    />
                                    <br />
                                    <input
                                        {...register("email", { required: true })}
                                        placeholder="Email" 

                                        className="p-2 m-2"
                                    />
                                    <br />
                                    <input
                                        {...register("Address", { required: true })}
                                        placeholder="Address"
                                        className="p-2 m-2"
                                    />
                                    <br />
                                    <input
                                        {...register("Age", { required: true })}
                                        placeholder="age" 
                                        className="p-2 m-2"
                                    />
                                    <br />
                                    <input
                                        {...register("Phone", { required: true })}
                                        placeholder="Phone" 
                                        className="p-2 m-2"
                                    />
                                    <br />
                                   
                                    <select {...register("vehicleType")}>
                                        <option value="car">car</option>
                                        <option value="bike">bike</option>
                                    </select>
                                    <br />

                                    <h6>Password</h6>
                                    <input
                                     name="password" 
                                     placeholder="Password"
                                     type="password" {...register('password')} 
                                     className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                     
                                     />
                                     <div className="invalid-feedback">{errors.password?.message}</div>
                                    <br />
                                    <input 
                                    name="confirmPassword" 
                                    placeholder="Confirm Password"
                                    type="password" {...register('confirmPassword')} 
                                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                   
                                     />
                                    <div className="invalid-feedback">{errors.confirmPassword?.message }</div>
                                        <br />
                                    
                                    
                                    <br />
                                    {errors.exampleRequired && <span>This field is required</span>}

                                   
                                    <input type="submit" placeholder="place" className="btn btn-danger w-50" />
                                    </form>
                                    
                                </div>
                                </div>
                        </div>
                </Col>
                
            </Row>
        </Container>
       
    );
};

export default Rider;