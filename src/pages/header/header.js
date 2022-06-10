import "./header.scss"
import Logo from "./Group.svg" 
import Strelka from "./Path.svg"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
                <img  className="header__img" src={Logo} alt="site logotipe" />
                <p>Sort by : Most Upvotes<img src={Strelka}></img></p>
                <Link className="header__link" to={"/add"}>+ Add Feedback</Link>
        </div>
    );
}
export default Header;