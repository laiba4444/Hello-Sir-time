import React, { useState } from "react";
import "./style.css";
import Menu from "./menueApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


const uniqueList = [
    ...new Set(
        Menu.map((curElm) => {

            return curElm.category;
        })
    ),
    "All",
];
console.log(uniqueList);





const Resturant = () => {
    const [menueData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if(category==="All"){
            setMenuData(Menu);
            return
        }

        const updatedList = Menu.filter((curElm) => {
            return curElm.category === category;
        });

        setMenuData(updatedList);
    };
    // console.log(menueData);
    return (
        <>
            <Navbar filterItem={filterItem} menuList ={menuList} />
            <MenuCard menueData={menueData } />

        </>

    );
};
export default Resturant;