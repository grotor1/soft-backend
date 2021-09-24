import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import {AdminLoginPage} from "./pages/AdminLoginPage/AdminLoginPage";
import {AdminPage} from "./pages/AdminPage/AdminPage";
import MainPage from "./components/MainPage";
import TrainersPage from "./components/TrainersPage";
import SignUpPage from './components/SignUpPage';
import EnterPage from './components/EnterPage';
import UserProfile from './components/UserProfile';
import ChatPage from './components/ChatPage';
import EnterError from "./components/EnterError";
import LegacyPage from './components/LegacyPage';
import TrainerPage from "./components/TrainersPage/TrainerPage";
import AboutPage from './components/AboutPage';


export const useRoutes = (isAuth, isAuthAdmin) => {
    return (
        <Switch>
            {isAuthAdmin ?
                <Route path="/adminLogin">
                    <Redirect to="/admin"/>
                </Route> :
                <Route path="/adminLogin" component={AdminLoginPage}/>
            }
            {isAuthAdmin && <Route path="/admin" component={AdminPage}/>}
            <Route exact path="/">
                <MainPage/>
            </Route>
            <Route exact path="/trainers">
                <TrainersPage/>
            </Route>
            <Route path="/trainers/:_id_trainer">
                <TrainerPage/>
            </Route>
            <Route path="/signup">
                <SignUpPage/>
            </Route>
            <Route path="/enter">
                <EnterPage/>
            </Route>
            <Route path="/profile">
                {isAuth ? <UserProfile/> : <EnterError/>}
            </Route>
            <Route path="/chat">
                {isAuth ? <ChatPage/> : <EnterError/>}
            </Route>
            <Route path="/pk">
                <LegacyPage/>
            </Route>
            <Route path="/about">
                <AboutPage/>
            </Route>
        </Switch>
    );
}