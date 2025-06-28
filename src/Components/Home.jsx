
import Header from "./Header"
import FoodOption from "./FoodOption"
import GroceryOption from "./GroceryOption"
import DineOption from "./DineOption"
import BannerImage from "./BannerImage"
// import NextPage from "./NextPage";
import React from "react";

import SwiggyCities from "./SwiggyCities";
import SwiggyFooter from "./SwiggyFooter";



export default function Home(){


    return (
        <>
         <Header></Header>
         <FoodOption></FoodOption>
         <GroceryOption></GroceryOption>
         <DineOption></DineOption>
         <BannerImage></BannerImage>
         {/* <NextPage></NextPage> */}
{/*        
      <GrocerySection /> */}

      <SwiggyCities/>
      <SwiggyFooter/>
   
      
        </>
    )
}