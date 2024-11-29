import React, { useEffect } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom';

function home() {
  
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>console.log(res))
        .catch(err=>console.log(err));

    },[])
    return(
        <div>
            <thead>
                <tbody>
                    <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ACTION</th>
                    </tr>
                    
                </tbody>
            </thead>
            <tbody>
                {data.map((student, index)=>{
                    return<tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.Name}</td>
                        <td>{student.Email}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </div>
    )
  
}

export default home
