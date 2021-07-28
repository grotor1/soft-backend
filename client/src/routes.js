import React from 'react'
import {Switch, Route} from "react-router-dom"
import {AdminLoginPage} from "./pages/AdminLoginPage/AdminLoginPage";
import {AdminPage} from "./pages/AdminPage/AdminPage";
import MainPage from "./components/MainPage";
import TrainersPage from "./components/TrainersPage";
import SignUpPage from './components/SignUpPage';
import EnterPage from './components/EnterPage';
import UserProfile from './components/UserProfile';


export const useRoutes = (isAuth, isAuthAdmin) => {
    return (
        <Switch>
            {isAuthAdmin ? <Route path="/admin" component={AdminPage}/> :
                <Route path="/adminLogin" component={AdminLoginPage}/>}
            <Route exact path="/">
                <MainPage/>
            </Route>
            <Route path="/trainers">
                <TrainersPage/>
            </Route>
            <Route path="/signup">
                <SignUpPage/>
            </Route>
            <Route path="/enter">
                <EnterPage/>
            </Route>
            <Route path="/profile">
                <UserProfile/>
            </Route>
        </Switch>
    );
}