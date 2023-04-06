import './App.css';
import ReactDOM from 'react-dom/client';
import Aside from './components/Aside';
import React from 'react';
import Input from './components/Input';
import Button from './components/Button/Button';

function App() {
    return(
        <>
            <Aside title='abc.com' description='abc.com is the best place to find remote talent. We`ve been super impress by the quality of applicants.' info='Madhushan sasanka' text='CEO, abc.com'/>
            <Input title='Create an account' paragraph='Let`s get started with your 30 days free trial'/>
            <Button signUpText='Sign up with Google' preLink='Already have an acount?' linkText='Sign in'/>
        </>
    )
}
 const domContainer = document.querySelector('#root');
 const root = ReactDOM.createRoot(domContainer);
 root.render(<App />);

export default App;
