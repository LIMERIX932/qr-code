import { Link } from "react-router-dom";
import s from './Navigation.module.css'
export const Navigation = () =>{
    return(
        <nav className={`another_class ${s.container} ${s.line}`} >
            <Link  to="/generate">Генерировать QR код</Link>
            <Link  to="/scan">Сканировать QR код</Link>
            <Link  to="/">История генерирования</Link>
            <Link  to="/">История сканирования</Link>          
        </nav>
    );
};