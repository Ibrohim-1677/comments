import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
import {  useParams } from "react-router-dom";
import Feature from "../../components/feature/feature";
import Path2 from "./Path2.svg";
import "./feedback.scss";


const Feedback = () => {
    const [ posts, setPost ] = useState(null);
    const { id } = useParams();

    let post = posts?.productRequests.find(post => post.id === +id)
    useEffect(() => {
      fetch('/data.json')
        .then(response => response.json())
        .then(dataJson => setPost(dataJson))
    }, []);

    if (!post) {
        return null
    }
  
    console.log(post);
    return (
        <>
        <div className="cintainer">
        
        <Link to={"/"}>Go Back</Link>
        <div className="feedbeck">
          <div className="feedbeck__box">
            <img className="feebeck__img" src={Path2} alt="" />
            <button className="feedbeck__like">{post.upvotes}</button>
          </div>
       <div className="text feedbeck__text">
               <h2 className="text__item">{post.title}</h2>
                 <div className="mine text__mine">
                   <p className="mine__text">{post.description}</p>
                 </div>
               <Feature>{post.category}</Feature>
               </div>
               </div>
               <div>
                 <div className="person">
                 <h2>4 Comments</h2>      
               {post.comments && post.comments.map(comment => (
                 <div className="person__box" key={comment.id}>
                   <div className="div">
                     <img className="person__img" src={comment.user.image} alt="user image" />
                       <div>
                        <h3 className="person__title">{comment.user.name}</h3>
                        <a className="person__amail" href="mailto:">@{comment.user.username}</a>
                        <p className="person__text">{comment.content}</p>
                      </div>
                     </div>
                   </div>
                  ))}
                </div>
                  <div className="form">
                    <h2 className="form__title">Add Comment</h2>
                    <form className="form__from" action="">
                      <label className="form__leble">
                        <textarea className="form__input" name="text" id="" cols="30" rows="10" placeholder="Type your comment here"></textarea>
                      </label>
                    </form>
                    <span className="form__text">250 Characters left</span>
                    <button className="form__button">Post Comment</button>
                  </div>
              </div>
            </div>
       
       </>
    );
}
export default Feedback;