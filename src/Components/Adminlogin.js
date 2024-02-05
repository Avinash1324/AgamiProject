
import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');
    useEffect(()=>{
      const auth=localStorage.getItem('user');
      if(auth){
        navigate('/');
      }
    })
    const handleclick = () => {
        navigate('/adminlogin')
    }
    const handleclick1 = () => {
        navigate('/login')
    }
    const dataCallect = async () => {
        console.log(email, password)
        let result = await fetch('http://localhost:5000/adminlogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password }),
        })
        result = await result.json();
        if (result.name) {
          console.log(result);
          localStorage.setItem('user', JSON.stringify(result));
          navigate('/')
          setEmail('');
          setPassword('');
        }
      }


    return (
        <div>
            <div className='register'>
               <h1>Admin Login</h1>
                <span> <button onClick={handleclick} >Admin</button> <button onClick={handleclick1}>Enployee</button></span>
                <form className='form'>
                    <input className='item' type='email' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='item' type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </form>
                <button onClick={dataCallect}>Log In</button>
            </div>
        </div>
    )
}

export default Adminlogin;
