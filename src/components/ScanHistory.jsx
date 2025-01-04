import { SCAN_DATA } from "../constant"
import { QRCodeSVG } from 'qrcode.react';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return(
        <div>
            {data.map((text) => (
                <p key={text}>
                {text}
                <QRCodeSVG value={text} size={100}/> 
                </p>
            ))}
        </div>
    )
} 