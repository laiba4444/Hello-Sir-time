import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';
import Sdata from './Sdata';
import Card from './Cards';

// console.log(Sdata[0].sname);
// function netflixcard(value){
//   console.log(value);
// }

const favseries ='amazon';
const FavS =()=>{




// if(favseries ==='netflix'){

//    return <Netflix/>

// }else{

    
//     return <Amazon/>
// }



};

const App= () => (
  <>

    <h1 className="heading_style">List of 7 netflix series </h1>
    <FavS/>

    {favseries==='netflix'? <Netflix/>:<Amazon/>}

{/*     
    {Sdata.map((value, index) => {
       console.log(index) ;
      return (
        <Card
          key={value.id}
          imgsrc={value.imgsrc}
          title={value.title}
          sname={value.sname}
          link={value.link}
        />
      );

    })} */}

</>

);





      //our porana function

      /* function myname(a,b){
         return a+b;
} */


      //our new updated .. fat arrow function
      /* const myname = (a,b) =>a+b; */ 



  export default App;

