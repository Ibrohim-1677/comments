import "./placement.scss"
const Placement = ({children, id}) => {
    return (
        <>
       <label className="placement-radio">
           <input className="visually-hidden placement-radio__input" id={id} type="radio"name="feature-radio"/>
           <span className="placemneet_text">{children}</span>
        </label>
      </>
    );
}
export default Placement;