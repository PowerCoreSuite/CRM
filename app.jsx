import React,{useEffect,useState} from "react"
import ReactDOM from "react-dom/client"
import axios from "axios"

function App(){

 const [stats,setStats]=useState({})

 useEffect(()=>{
  axios.get("/api/dashboard").then(res=>{
   setStats(res.data)
  })
 },[])

 return(
  <div>

   <h1>Energy CRM Dashboard</h1>

   <p>Customers: {stats.customers}</p>
   <p>Products: {stats.products}</p>

  </div>
 )
}

ReactDOM.createRoot(document.getElementById("app")).render(<App/>)
