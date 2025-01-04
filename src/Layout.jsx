import { Routes, Route} from "react-router-dom";
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator.jsx";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { ScanHistory } from "./components/ScanHistory.jsx";
import { GenerateHistory } from "./components/GenerateHistory.jsx";

export const Layout = () => {
    return (
        <div>
            <Navigation/>

            <Routes>
        <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
        <Route path="/qr-code/scan" element={<QrCodeScanner />} />
        <Route path="/qr-code/generateHistory" element={<GenerateHistory />} />
        <Route path="/qr-code/scanHistory" element={<ScanHistory />} />
      </Routes>
    </div>
  );
}