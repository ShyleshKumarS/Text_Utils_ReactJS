import React,{useState} from 'react' //{} hook


export default function Forms(props) {

  const handlerChange=(event)=>{
    setText(event.target.value);  
    updateCount(event.target.value);
  }

  const handleUpper=()=>{
    let newText=txt.toUpperCase();
    setText(newText);
  }
  

  const handleLower=()=>{
    let newText=txt.toLowerCase();
    setText(newText);
  }

  const handleTitle=()=>{
    let newText =""
    let lst=[]
    let temp=""
    for (let i=0;i<txt.length;i++){
      if(txt[i]===" "){
        lst.push(temp)
        temp=""
        continue
      }
      temp+=txt[i]
    }
    lst.push(temp)
    for(let j=0;j<lst.length;j++ ){
      newText+=lst[j].charAt(0).toUpperCase( )+lst[j].slice(1)+" ";
    }
    setText(newText);
  }

  const handleFirstCap=()=>{
    let newText=""
    newText+=txt.charAt(0).toUpperCase()+txt.slice(1);
    setText(newText);
  }
  
  const handleReset=()=>{
    let newText="";
    setText(newText);
  }

  const handleCopy=() => {
    let name=document.getElementById("myText").value;
    navigator.clipboard.writeText(name);
    props.showAlert("Copied to clipboard!","success");
  }

  const handleSpaces=()=>{
    let name=document.getElementById("myText").value;
    let namex=name.replace(/ [ ]/g,"");
    setText(namex);
  }
  
  const [count,setCount]=useState({ wordCount: 0, letterCount: 0 });
  const updateCount = (txt) => {
    
    const words = txt.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const letterCount = txt.replace(/\s+/g, '').length;

    setCount({ wordCount, letterCount });
  }

  const [txt,setText]=useState("")//State defining
  return (
    <>
    <div>
        <h3>TextUtil</h3>
        <div className="mb-3"><br/>
        <label htmlFor="myText" className="form-label">{props.text}</label>
        <textarea className="form-control" id="myText" rows="10" value={txt} onChange={handlerChange} style={{backgroundColor:props.mode==='light'?'#363d43':'white',color:props.mode==='light'? 'white' : 'black'}}></textarea>
        <button className="btn btn-primary my-4" onClick={handleUpper} >UpperCase</button>
        <button className='btn btn-primary my-4 mx-3' onClick={handleLower}>LowerCase</button>
        <button className='btn btn-primary my-4 mx-1' onClick={handleTitle}>TitleCase</button>
        <button className='btn btn-primary my-4 mx-3' onClick={handleFirstCap}>CapitalCase</button>
        <button className='btn btn-primary my-4 mx-3' onClick={handleReset}>Reset</button>
        <button className='btn btn-primary my-4 mx-3' onClick={handleCopy}>Copy</button>
        <button className='btn btn-primary my-4 mx-3' onClick={handleSpaces}>Extra Spaces</button>
        </div>
    </div>

    <div className="container">
      <h3>Text Summary</h3>
      
      <p>{count.letterCount} of Character and {count.wordCount} of Words.</p>
    </div>
    </>
  )
}

Forms.defaultProps={
    text:"Give the name bruh"
}