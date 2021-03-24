import './App.css';
import {useState} from 'react';
import After from './pages/After';
import Before from './pages/Before';
import {Route} from "react-router-dom";

function App() {

    const [loggedIn, setLoggedIn] = useState(
        localStorage.getItem('jwt') !== null
    )

    return (
        <>
            <Route exact path="/">
                {loggedIn
                ?   <After setLoggedIn={setLoggedIn}/>
                :   <Before setLoggedIn={setLoggedIn}/>
                }
            </Route>
        </>
    );
}

export default App;
