import {data} from "./constant";
import {useState} from "react";

function Hero(){
 
  const[count,setCount]= useState(0);
  const[text,setText]= useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    let amount=parseInt(count);
    if(amount<=0)
      alert(" Ayyo ! you know that you wrote negative input 😵");
    else if(amount>8){
      alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀");
      amount=8;
    }
    setText(data.slice(0,amount));
    console.log(text);
    return;

  }

  return (
    <div className="hero">
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <form className="orem-form" onSubmit={handleSubmit}>
        <label>Paragraphs :</label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}></input>
        <button className="btn">Generate</button>
      </form>

      <article className="art">
        {
        text.map((hulla,index) =>(
          <p className="p-text" key={index}>{hulla} <hr></hr><br></br></p>
        ))
       }
      </article>
    </div>
  )
}

export default Hero