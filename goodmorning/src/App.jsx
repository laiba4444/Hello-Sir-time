import React from 'react';
import Heading from './Heading';
import Paragraph from './Para';
import List from './List';
import './index.css';




let curDate =new Date();
curDate = curDate.getHours();
let greeting = ' ';


const cssStyle ={
  
};

if(curDate >= 1 && curDate <12){
    greeting = ' Good Morning🌹';
    cssStyle.color ='green';
    
    }else if (curDate >=12 && curDate <19){
      greeting = 'Good Afternoon😰'
      cssStyle.color ='orange';
    }else {
      greeting = 'Good Night😴';
      cssStyle.color ='blue';
    }  


function App() {
    return (
        <>

            {/* <Heading />
            <Paragraph />
            <List />
            <Heading /> */}

            <div className='div2'>
          <h1 > Hello Sir, <span style={cssStyle}>{greeting}</span></h1>

         </div>
         <Paragraph/>

         <List/>,
        </>
    );
}
export default App;