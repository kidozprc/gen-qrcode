import '../App.css';
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import QRCode from "react-qr-code";
import qrcode from 'qrcode.react';

var firebaseConfig = {
  apiKey: "AIzaSyC5jORXlEZjlJQJw2WqroTYvUtYbdUtfyY",
  authDomain: "kidozprc2021.firebaseapp.com",
  databaseURL: "https://kidozprc2021-default-rtdb.firebaseio.com",
  projectId: "kidozprc2021",
  storageBucket: "kidozprc2021.appspot.com",
  messagingSenderId: "634637135157",
  appId: "1:634637135157:web:f6e173f1904d66d6d7b07c",
  measurementId: "G-CPZBC8HR2K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default function Form() {


  const [perid, setId] = useState('');

  const handleOnChange1 = (e) => {
    setId(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className="title">KIDOZ</h1>
          <div className="log-in-border">
            <a>Personal ID</a>
            <br></br>
            <input className="input" type="username" onChange={handleOnChange1} value={perid}></input>
            <p></p>
            <div className="qr-code">
              <QRCode value={perid} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}