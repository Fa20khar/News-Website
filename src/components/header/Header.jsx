import { useState } from "react";
import Nav from "./Nav";

export default function Header({ getKeywords }) {
//const onChangeHandler = (event) => {
    // console.log("I Was Changed")
    //const value = event.target.value === "" ? false : true;
    //setActive(value);
    //setKeywords(event.target.value);
    //getKeywords(event);
//} 

const [active, setActive] = useState(false);
const [keywords, setKeywords] = useState("");

  return (
    <>
    <header style={{ background: `${active ? "lightgray" : "darkgray"}` }}>
        <div className="logo">Awesome News</div>
        <input
        onChange={getKeywords}
        //onFocus={e => console.log("Focus")}
        //onBlur={e => console.log("Blur")}/> 
        />
       {/* <p> the keywords are:{keywords}</p>*/}

        <Nav />
    </header>
    </>
  )
}    