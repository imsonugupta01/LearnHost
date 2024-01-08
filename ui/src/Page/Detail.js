import React, { useEffect, useState } from "react";
function Detail()
{   let[details,setDetails]=useState("")
     useEffect(
        ()=>{
           const fetchData = async()=>{
              try {
                 const response=await fetch(`${process.env.REACT_APP_API_ROOT_URL}/test/print`)
                 if (!response.ok ) {
                    throw new Error('Network response was not ok');
                  }
                console.log(response);
                 const data=await response.text();
                 console.log(data);
                 setDetails(data);

              } catch (error) {
                console.error('Error fetching data: ', error.message);
              }
           }
fetchData();

        },[]
     )
    return(
         <div> <h1>Details : </h1>
         <h2>{details}</h2></div>
    );
}
export default Detail