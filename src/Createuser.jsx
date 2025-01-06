import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';


function Createuser(){
    
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [address,setAddress]=useState();
    
    const navigate=useNavigate();

    const submit=(e)=>{
        e.preventDefault();        // to stop rerendering whole component
        axios
        .post('https://backend-3-kd3h.onrender.com/api/user/create',{name,email,address})
        .then(result=>{
            console.log(result.data);
            navigate('/');
        })
        .catch(err=>{console.log(err)});
    }
    
  return (
    <div>
        <h1>Create User</h1>
        <form onSubmit={submit}>
            <label>Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
            <label>Email</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
            <label>Address</label>
            <input type="text" onChange={(e)=>setAddress(e.target.value)}></input><br></br><br></br>
            <button type="submit">Create</button>
        </form>
        
    </div>

    
  )
}

export default Createuser