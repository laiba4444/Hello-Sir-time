// var React = require("react");
import React from 'react';
// var ReactDom = require('react-dom');
import ReactDOM from 'react-dom';

// import Heading from './Heading';
// import Paragraph from './Para';
// import List from './List';
import App from './App';



// **********in JSX************javascript extention


const fname ='Laiba';
const lname ='Sajid';
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const img1 ='https://picsum.photos/200/300';
const img2 ='https://picsum.photos/250/300';
const img3 ='https://picsum.photos/290/300';
const links ='https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=15';
// ********************************challenge no 3*********************
// let curDate =new Date(2023, 2, 11, 7);
// curDate = curDate.getHours();
// let greeting = ' ';

// ************************inline css starts for challenge 3
// const cssStyle ={

// };




// if(curDate >= 1 && curDate <12){
// greeting = ' Good Morning';
// cssStyle.color ='green';

// }else if (curDate >=12 && curDate <19){
//   greeting = 'Good Afternoon😰'
//   cssStyle.color ='orange';
// }else {
//   greeting = 'Good Night😴';
//   cssStyle.color ='blue';
// }


const heading ={
    fontWeight: 'bold',
    color: '#f97306',
    textAlign: 'center',
    textTransform:'capitalize',
     margin: '20px 5px' ,
    textShadow:'0 2px 4px rgba(56, 55, 55, 0)' ,
    fontFamily: '"Poppins", sans-serif',
    fontSize: '50px'
}


const imgdiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
   
    
  }
  
  const imge = {
    width: '250px',
    height: '300px',
  }

  const p = {
    color: '#d611cf',
  }

ReactDOM.render(
    [

        // <h1>My Name is {fname +" "+ lname}</h1>,

        //template litterles in react jsX👇
        // <h1  style={{fontWeight: 'bold',color: '#d6119f',textAlign: 'center',textTransform:'capitalize', margin: '20px 5px' ,
        // textShadow:'0 2px 4px rgba(56, 55, 55, 0)' }} className=" heading" contentEditable ='true'>My Name is {fname + " "+lname}</h1>,

<div className='div0'>
<h1   className=" heading" contentEditable ='true' style={heading} >My Name is {fname + " "+lname}</h1>
</div>,


<div className='div1'>
        <p>{`Current Date is - ${currentDate}`}</p>
        <p>{`Current Time is - ${currentTime}`}</p>
</div>,


        <div className='img-div' style={imgdiv}>
        <img src={img1} alt='random pic'/>
        <img src={img2} alt='random pic'/>
        <a href={links} target="_blank">
        <img src={img3} alt='random pic'/>
        </a>
        </div>,

        // <ol>
        //     <li>Money Heist.</li>
        //     <li>Peaky Blinders.</li>
        //     <li>DAHMER.</li>
        //     <li>The Crown.</li>
        //     <li>The Queen of Flow.</li>
        // </ol>



        // ********************************challenge no 3*********************

        //  <div className='div2'>
        //   <h1 style={heading}> Hello Sir, <span style={cssStyle}>{greeting}</span></h1>

        //  </div>,



<div className='div3'>

<App/>

</div>

    ],

    document.getElementById('root'));

/*....we can also use  array of an element [ , , ] instead of div */ 




// **********IN BEBEL*****
// ReactDOM.render(React.createElement("h1",null,"Laiba Choudhary"),
// document.getElementById("root"));



// **********in pure javascript********

// var h1 =document.createElement("h1");
// h1.innerHTML = "cocoBe";
// document.getElementById("root").appendChild(h1);