import './admin.css'
import adminLogo from  '../src/assets/myphoto/adminlogo.png'
import { useState } from 'react'
import {  useNavigate } from 'react-router';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError]= useState('')  
  const Navigate = useNavigate('')
  const adminEmail = "mrmahbuburrahman123@gmail.com";
  const adminPassword = "mr@#2003"
   
  const formSubmit =(e)=>{
    e.preventDefault();
    if(password === adminPassword && email === adminEmail){
    alert("Sign in succesfully")
    Navigate("/controlPanel")
    setEmail("");
    setPassword("");
    setError('')
  }
  else{
    alert('something error')
       setError('something is wrong')
  }
  }
  
  return (
    <div className='body' >
        
            <form onSubmit={formSubmit}>
                <img src={adminLogo} alt="" />
                <input onChange={(e)=>setEmail(e.target.value)}
                value={email}
                 type="email" name="email" id="email" placeholder='Enter email' required  />
                
                <input onChange={(e)=> setPassword(e.target.value)}
                value={password}
                 type="password" name="password" id="password"  placeholder='Enter Password' required/>
                <u>Forget password</u>
                <button type="submit">Login Now</button>
            </form>
    
    </div>
  )
}

export default Login