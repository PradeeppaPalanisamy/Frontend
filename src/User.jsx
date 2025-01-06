import React, {useState, useEffect}  from 'react'
import axios from 'axios';

import {Link} from "react-router-dom";

function User(){
    // const [user,setUser]=useState([
    //     {name:"Pradeeppa", email:"pradeeppa@gmail.com", address:"Namakkal"}      -- default details we giving
    // ]);
    const [user,setUser]=useState([]);          
                                         
    useEffect(() => {
        axios.get('https://backend-3-kd3h.onrender.com/api/user/fetch')
            .then(result => {
                console.log(result.data); // Log the API response  - for our covenience to check the data, not neceessary
                setUser(result.data); // this will fetch from connections folder, contriller.js file, GET method
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const deleteuser=(id)=>{
            axios
               .delete(`https://backend-3-kd3h.onrender.com/api/user/delete/${id}`)
               .then(result=>{
                console.log("User deleted");
               })
               .catch(err=>{console.log(err)})
    }
    
  return (
    <div>
        <h1>User</h1>
        <Link to="/create">Create user</Link>
        <table> 
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
            </tr>
            </thead>
            
            <tbody>
            {
                user.map((users)=>(           
                    <tr>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.address}</td>
                        <td>
                           <Link to={`/update/${users._id}`}>update</Link>
                           <button onClick={(e)=>deleteuser(users._id)}>Delete</button>   
                        </td>
                    </tr>
                ))
}    
</tbody>
        </table>
    </div>
  )
}
export default User;