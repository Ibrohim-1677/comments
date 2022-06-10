import FeedbackStyle from "../../components/feedbeck/fedback";
import Header from "../header/header";
import Main from "./main";
import  "./mainhero.scss"


const MainHeader = () => {
    return (
       
        <div className="container">
        <div className="main__main">
        <Main  className="main__flex"/>
        <div className="main__box">
        <Header />
        <FeedbackStyle />
        </div>
        </div>
        </div>
    );
}
export default MainHeader