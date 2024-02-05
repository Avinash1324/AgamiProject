import React from 'react'
import Signup from './Signup';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminSignup = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setCreatepassword]=useState('');
    const [cnfpassword,setCnfpassword]=useState('');
    const navigate=useNavigate('');
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
          navigate('/');
        }
    })
    const handleclick=()=>{
        navigate('/admin')
    }
    const handleclick1=()=>{
        navigate('/signup')
    }
    const CollectData= async()=>{
        console.log(name,email,password,cnfpassword);
        let result=await fetch('http://localhost:5000/admin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,email,password}),
        })
        result =await result.json();
        if(result){
            console.log(result)
            localStorage.setItem('user',JSON.stringify(result));
            setName('');
            setEmail('');
            setCnfpassword('');
            setCreatepassword('');
        }
        else{
            console.log("result null");
        }
    }
    
    return (
        <div className='register'>
            <h1>Admin Sign Up</h1>
            <span> <button onClick={handleclick} >Admin</button> <button   onClick={handleclick1}>Enployee</button></span>
            <form className='form'>
                <input className='item' type='text' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='item' type='email' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='item' type='text' placeholder='Create password' value={password} onChange={(e) => setCreatepassword(e.target.value)} />
                <input className='item' type='password' placeholder='Comfirm password' value={cnfpassword} onChange={(e) => setCnfpassword(e.target.value)} />
            </form>
            <button onClick={CollectData}>Sign UP</button>
        </div>
    )
}

export default AdminSignup
