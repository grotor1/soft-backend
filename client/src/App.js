import './App.css';
import {useRoutes} from "./routes";
import {AuthContext} from "./context/AuthContext"
import {BrowserRouter as Router} from "react-router-dom"
import {useAuth} from "./hooks/auth.hook";

function App() {
    const {token, login, logout} = useAuth()
    const isAuthAdmin = !!token
    const routes = useRoutes(isAuthAdmin);
    return (
        <AuthContext.Provider value={{
            token, login, logout, isAuthAdmin
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
