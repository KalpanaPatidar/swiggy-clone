
import RestHeader from "./RestHeader"
import { Outlet } from "react-router"
import React from "react";

export default function SecondaryHome(){

    return(
        <>
        <RestHeader></RestHeader>
        <Outlet></Outlet>
        </>
    )
}