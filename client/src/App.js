import './App.css';
import {useRoutes} from "./routes";
import {AuthContext} from "./context/AuthContext"
import {BrowserRouter as Router} from "react-router-dom"
import {useAuth} from "./hooks/auth.hook";

function App() {
    const {token, login, logout, tokenAdmin, logoutAdmin, loginAdmin, userId} = useAuth()
    const isAuth = !!token
    const isAuthAdmin = !!tokenAdmin
    const routes = useRoutes(isAuth, isAuthAdmin);
    return (
        <AuthContext.Provider value={{
            token, login, logout, isAuth, _id_user: userId, tokenAdmin, loginAdmin, logoutAdmin, isAuthAdmin
        }}>
            <Router>
                <div className="App">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
