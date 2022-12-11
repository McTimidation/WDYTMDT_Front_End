import Header from "./header"
import React from "react";
import { useState } from "react";

function Layout(props) {

    return (
        <>
            <Header
            page={props.page}
            setPage={props.setPage}
            />
            {props.children}
        </>
    )
}
export default Layout