import React from "react";
import SlotM from "./SlotM";

//****************************************1 method hard *******************************************


const App = () => {
    return(
    <>
    <h1 className="heading_style">🎰 Welcome to{" "}
    <span style={{fontWeight:'bold',textAlign:'center'}}> Slot Machine </span>🎰</h1>
    
    <div className="slotmachine">
    <SlotM   a = '🥼'  b = '🥼' c = '🥼'/>
    <hr/>
    
    <SlotM   a = '😠'  b = '🍼' c = '👶'/>
    <hr/>
    <SlotM   a = '💟'  b = '💟' c = '❤️'/>
    <hr/>
    <SlotM   a = '🥇'  b = '🥇' c = '🥇'/>
    <hr/>
    </div>
    </>
    );
    
    };
export default App;


