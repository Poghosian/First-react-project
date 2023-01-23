import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let posts = [
    { id: 1, message: 'Hi, How are yor?', likesCount: 12 },
    { id: 2, message: 'Its my firty post', likesCount: 1 },
]

let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' }
]

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you ?' },
    { id: 3, message: 'Im fine thanks' },
    { id: 4, message: 'and how are you?' },
    { id: 5, message: 'Im fine' }
]
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts={posts} dialogs={dialogs} messages={messages} />
        </BrowserRouter>


    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
