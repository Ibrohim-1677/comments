import Feature from "../feature/feature";
import Path from "./Path.svg";
import Path2 from "./Path2.svg";
import "./feedbeck.scss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FeedbackStyle = () => {
  const [ post, setPost ] = useState(null);
  const [ posts, setFeedbeck ] = useState([]);


  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(dataJson => setPost(dataJson))
  }, []);
    return (
        <>  
        <ul className="list">

        {post && post.productRequests.map(post => (
          <li key={post.id}>
        <div className="feedbeck">
          <div className="feedbeck__box">
            <img className="feebeck__img" src={Path2} alt="" />
            <button className="feedbeck__like">{post.upvotes}</button>
          </div>

            <div className="text feedbeck__text">
               <h2 className="text__item"><Link href=""to={`/feedback/${post.id}`} className="text__item">{post.title}</Link></h2>
                 <div className="mine text__mine">
                   <p className="mine__text">{post.description}</p>
                 </div>
               <Feature>{post.category}</Feature>
            </div>
            <span className="mini__koments"><img className="mine__img" src={Path} alt=""/>{post.comments ? post.comments.length : 0}</span>
        </div>
        </li>
        ))}
        </ul>
        </>
    );
}
export default FeedbackStyle;