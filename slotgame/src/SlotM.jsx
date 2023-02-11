import React from "react";


const SlotM = (props) => {
    // let a = '🍎';
    // let b = '🍎';
    // let c = '👶';
 

// let a= props.a;
// let b= props.b;
// let c= props.c;


let {a,b,c}=props

    if ((a===b)  && (b===c) ){
        return(
<>
<div className="slot_inner">
    <h1>
        {props.a} {props.b} {props.c}
    </h1>
    <h1>This is Perfect Matching</h1>
    <hr/>
</div>
</>
   );
}else{
    return(
        <>
        <div className="slot_inner">
            <h1>
                {a} {b} {c}
            </h1>
            <h1>This is not a Perfect Matching</h1>
            <hr/>
        </div>
        </>
           );
}};


export default SlotM;