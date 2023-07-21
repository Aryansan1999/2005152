//import { Container } from "@mui/material"
import React, { useEffect, useState } from "react"
import Typography from '@mui/material/Typography';
const App = () => {
    const [users, setUsers] = useState([])


    const fetchUserData = () => {
        fetch("http://20.244.56.144:80/train/trains")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (

        <Typography variant="body2" gutterBottom>
            <div>
<h1> John Doe Railway Server</h1>
{
    users.map((user)=>
    <div style={{ border: '3px solid skyblue', padding: 20, borderRadius: 30, margin: 10 ,boxShadow:16}}>  
   

    {/* <ul>
        {user.notes.map((sub)=>
        <li>
            {sub.content}
        </li>
        )}
    </ul> */}
    </div>
    )
}
            </div>
        </Typography>

    );
}

export default App;