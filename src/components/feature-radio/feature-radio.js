import Feature from "../feature/feature";
import "./feature-radio.scss"

const FeatureRadio = ({children , id}) => {
    return (
        <>
       <label className="feature-radio">
           <input className="visually-hidden feature-radio__input" id={id} type="radio"name="feature-radio" />
           <Feature>{children}</Feature>
        </label>
      </>
    );
}
export default FeatureRadio;