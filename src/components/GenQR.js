import '../App.css';
import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

export default function GenQR(){
    return(
        <div className="qr-code">
            <QRCode value="41419" />
        </div>
        )
}