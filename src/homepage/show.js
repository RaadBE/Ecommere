import {useState, useEffect, useContext} from "react";
import "./show.css";
import jacket1 from '../img/jacket1.webp'
import jacket2 from '../img/jacket2.webp'
import jacket3 from '../img/jacket3.webp'
import jacket4 from '../img/jacket4.jpg'
import jacket5 from '../img/32.jpeg'
import ProductContext from "../proudctpage/ProductContext";
function Show() {
    // const [imageURL, setImageURL] = useState([]);
    const { selectedProduct } = useContext(ProductContext);

  return (
    <div className="imgs-conta">
      <div className="big-img">
        <img src={selectedProduct.imageURL} alt="Description" />
      </div>
      <div className="small-img">
        <img src={jacket2} alt="Description" />
        <img src={jacket3} alt="Description" />
      </div>
      <div className="mid-img">
        <img className="smaller" src={jacket4} alt="Description" />
        <img className="bigger" src={jacket5} alt="Description" />
      </div>
    </div>
  );
}

export default Show;
