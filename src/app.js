import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Home from './pages/Home';


const AppLayOut = ()=>{
    return (
        <React.Fragment >
            <Header/>
            <Home/>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut/>)