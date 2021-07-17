import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import {AdminLoginPage} from "./pages/AdminLoginPage/AdminLoginPage";
import {AdminPage} from "./pages/AdminPage/AdminPage";


export const useRoutes = (isAuthAdmin) => {
    return (
        <Switch>
            {isAuthAdmin ? <Route path="/admin" component={AdminPage}/> : <Route path="/adminLogin" component={AdminLoginPage}/>}
            <Route path="/main">
                {/*main page*/}
            </Route>
            {isAuthAdmin ? <Redirect to="/admin"/> : <Redirect to="/adminLogin"/>}
        </Switch>
    );
}