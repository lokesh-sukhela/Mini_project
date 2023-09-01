import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import validation from './SignupValidation'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

// Sign Up Page Component
function Signup() {
    const [values,setValues]=useState({
        name:'',
        email:'',
        password:''
    })
    const navigate=useNavigate();
    const [errors, setErrors]=useState({})

    const handleInput = (event) =>{
        setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))

    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name ==="" && errors.email==="" && errors.password===""){
            axios.post('http://localhost:3002/signup',values)
            .then((res) =>{
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));

        }

    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'style={{ background: 'linear-gradient(#19105b, #472067, #7c3375, #FF6196)'}}>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="text" placeholder="Enter Name" name='name' 
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder="Enter Email" name='email' 
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>password</strong></label>
                <input type="password" placeholder="Enter Password" name='password' 
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0 bg-primary'  ><strong>Sign up</strong></button>
            <p> If Account exists</p>
            <Link to="/" className='btn btn-success w-100 rounded-0' >Login</Link>
        </form>
    </div>
</div>
  )
}

export default Signup;

