import React, { useState } from 'react'

const html = () => {
    let[item,setitem]=useState([])
    function additem(){
        let inputvalue=document.querySelector("#text").value
        if(inputvalue.trim()!=="")
        setitem(i=>([...i,inputvalue]))
        document.querySelector("#text").value=""
    }
    function remove(index){
        setitem(item.filter((ele,i)=>i!==index))
    }
  return (
    <>


   
  <h1>Enter item name</h1>
    <input type="text" id="text"/>
    <button onClick={additem}>Send</button>

    <ul>
        {item.map((it,index)=>
        <li key={index}>{it}
        <button onClick={()=>remove(index)}>delete</button>
        </li>
        
        )}
    </ul>
   
    </>
  )
}

export default html