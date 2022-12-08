import React, { useState }  from 'react';
 import ChildComponent from "./ChildComponent.js"
/*
   JXS   
   */
     
 
const MyComponent = () =>{
   const [first , setFirst] = useState('')
   const [last, setLast]= useState('')
   const [job, setJob]= useState([
    {nameFim: ' Spider-Man-Amazing ', year: 2000 }
    , { nameFim: ' Venom ' , year:1999 }
  ])
   
    const nameMusic= { name: ' Sao cũng được' , time : 3}

   const evenJob = job.map((r)=>{
    
    return  r.nameFim +" - " + r.year +"  "

   });
    
  
   
    
    const eventChangeText =(e)=>{
    
      setFirst(e.target.value)
      // console.log('first:' , First  )
     
    }
    const handleSubmit = ()=> {

      console.log('first:' , first ,'last:', last)
    }
    const eventChangeText2 = (v)=>{
      setLast(v.target.value)
      // console.log('last:' , Last  )
    }
    
    return(
      <>
      {/* {console.log('Check Obj:' , nameMusic)} */}
        <form action="/action_page.php">
        <label>First name: </label><br/>
        <input onChange={(e) => eventChangeText(e)}
         type="text" value={first}
         />
         <br/>
         
        <label>Last name: </label><br/>
        <input 
        onChange={(v)=> eventChangeText2(v)}
        type="text"  value={last}
        /> 
        <br/>
        
        <br/>
        <button 
         onClick={(even)=> handleSubmit(even)}
        type="button">Submit</button>

</form>
<ChildComponent
       name={first}
       age={last}
       address ={evenJob}
       music = {nameMusic.name}  
       times ={nameMusic.time}
/>
</>
    )    
    }
   

export default MyComponent; 