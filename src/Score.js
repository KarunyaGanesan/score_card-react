
//Score_card Component

import { useState } from "react"

function Score(){

const[uname,setunmae]= useState('')
const[tam,settam]=useState('')
const[eng,seteng]=useState('')
const[math,setmath]=useState('')
const[sci,setsci]=useState('')
const[hist,sethist]=useState('')





function handlename(event){
    setunmae(event.target.value)

}
function handlentam(event){
    settam(event.target.value)

}
function handleeng(event){
    seteng(event.target.value)

}
function handlemath(event){
    setmath(event.target.value)

}
function handlesci(event){
    setsci(event.target.value)

}
function handlehist(event){
    sethist(event.target.value)

}

function handletotal(){
    var sum = Number(tam)+Number(eng)+Number(math)+Number(sci)+Number(hist) 
{
    if(sum>400){
        alert("Outstanding"+" "+(uname)+"! You're a star!"+" Your score is:"+" "+(sum)+"/500")
    }
    else if(sum>300 && sum<=400)
    {
        alert("Fantastic"+" "+(uname)+"! Keep shining!"+" Your score is:"+" "+(sum)+"/500")
    }
    else if(sum>200 && sum<=300)
    {
         alert("Well done"+" "+(uname)+"! Great job!"+" Your score is:"+" "+(sum)+"/500")
    }
    else if(sum==0){
        alert("Please enter your marks"+" "+(uname))
        
    }
    else{
          
        alert("Congrats"+" "+(uname)+"! Keep it up!"+" Your score is:"+" "+(sum)+"/500")
    }    
}
    
    settam('')
    seteng('')
    setmath('')
    setsci('')
    sethist('')
    setunmae('')
 


    
}




    return(

        <div className="container">
            <div>
            <h1> 👩🏼‍🎓SCORE CARD👨🏼‍🎓</h1>
            </div>
            <div className='block_1'>
                <label>NAME:</label>&nbsp; <input className ="daata" type="text" value={uname} onChange={handlename} ></input><br></br><br></br>
                <label>Tamil:</label>&nbsp;&nbsp;&nbsp;&nbsp;<input className ="data"type='number'value={tam} onChange={handlentam}  ></input><br></br><br></br>
                <label>English:</label> <input className ="data"type='number'value={eng} onChange={handleeng} ></input><br></br><br></br>
                <label>Maths:</label>&nbsp;&nbsp;&nbsp;<input className ="data" type='number'value={math} onChange={handlemath} ></input><br></br><br></br>
                <label>Science:</label> <input className ="data" type='number'value={sci} onChange={handlesci} ></input><br></br><br></br>
                <label> History:</label>&nbsp;<input className ="data" type='number' value={hist} onChange={handlehist} ></input><br></br><br></br>
                <button onClick={handletotal} >Total</button>
                <br></br>
            

                
            </div>

         

        </div>
    )

}
export default Score