import FeatureRadio from "../../components/feature-radio/feature-radio";
import Placement from "../../components/placement/placement";
import "./mains.scss"

const Main = () => {
    return (
      <>
        <div className="cont">
          <div className="main">
             <div  className="main__bgc">
               <h1 className="main__item" >Frontend Mentor</h1>
               <p className="main__text">Feedback Board</p>
             </div>
             <div className="main__box">
                <div className="main__list">
                <FeatureRadio >All</FeatureRadio>
                <FeatureRadio >UI</FeatureRadio>
                <FeatureRadio >UX</FeatureRadio>
                <FeatureRadio >Enhancement</FeatureRadio>
                <FeatureRadio >Bug</FeatureRadio>
                <FeatureRadio >Feature</FeatureRadio>
                 </div>
             </div>
             <div className="main_placement placement">
               <div className="placement__bigbox">
                  <div className="placement__box">
                    <h2 className="placement__item">Roadmap</h2>
                    <a className="placement__href" href="">view</a>
                  </div>
                 <form action="">
                     <Placement> <span className="placement__color"></span>Planned</Placement><br />
                     <Placement> <span className="placement__color2"></span>In-Progress</Placement><br />
                     <Placement> <span className="placement__color3"></span>Live</Placement><br />
                 </form>
                 </div>
               </div>
             </div>
           </div>  
         <div>
       </div> 
     </>
    );
}

export default Main;