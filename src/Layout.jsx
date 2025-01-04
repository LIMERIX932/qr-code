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
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/" element={<GenerateHistory />} />
        <Route path="/" element={<ScanHistory />} />
      </Routes>
    </div>
  );
}