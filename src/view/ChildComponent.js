import React  from 'react';
 
/*
   JXS   
   */
     
 
const ChildComponent = ({name, age,address, music, times}) =>{    
   let link = 'https://replit.com/@NDKOfficial/OldfashionedUntriedDecagon#index.js'
    return(
        <>
        <div> Chill and netFlix :{name}  {age} <br/> {address} <br/> {music} <br/>{times}</div>  
        <a href={link} target='blank'>  Visit in My test </a>

        </>
    )
}
export default ChildComponent; 