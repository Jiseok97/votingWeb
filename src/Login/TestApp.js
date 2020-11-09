import React, { useState } from "react";
import AppRouter from "./Router";
import myBase from "./myBase";
import { authService } from "myBase";

function TestApp() {
    authService. 
    const [inLoggedIn, setIsLoggedIn] = uesState(false)
    return (
        <>
        <AppRouter isLoggedIn={isLoggedIn} />

        </>
    )
}

export default TestApp;