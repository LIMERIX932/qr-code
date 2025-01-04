import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from "react";
import s from './QrCodeScanner.module.css'
import {SCAN_DATA} from '../../constant.js'

export const QrCodeScanner = () => {

const [scanResult, setScanResult] = useState(null);

const ScanHandler = (event) =>{
    setScanResult(result[0].rawValue);
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]))
}


    return (
        <div className={s.container}>
            <Scanner 
            onScan={(ScanHandler)}
            components={{
                audio: false,
                finder: true,
            }}
            styles={{
                container: {width: 200},
            }}
            />
            <p className={s.result}>{scanResult}</p>
        </div>
    )
}