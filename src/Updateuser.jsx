import React from 'react'
import {useState} from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './style.css';


function Updateuser(){

    const {id}=useParams();
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [address,setAddress]=useState();

    const navigate=useNavigate();

    const update=(e)=>{
        e.preventDefault();
        axios
            .put(`https://backend-3-kd3h.onrender.com/api/user/update/${id}`,{name,email,address})
            .then(result=>{
                console.log("User updated");
                navigate('/');
            })
            .catch(err=>{
                console.log(err)
            })
    }
  return (
    <div>
        <h1>Update User</h1>
        <form onSubmit={update}>
            <label>Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}></input><br/><br/>
            <label>Email</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}></input><br/><br/>
            <label>Address</label>
            <input type="text" onChange={(e)=>setAddress(e.target.value)}></input><br/><br/>
            <button type="Submit">UPDATE</button>
            
        </form>
    </div>

  )
}

export default Updateuser