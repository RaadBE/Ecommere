import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "./ProductContext";

import "./proudct.css";

function Prodct() {
    const [data, setData] = useState([]);
    const { setSelectedProduct } = useContext(ProductContext);

    const makeCall = async () => {
        try {
            const response = await fetch('https://ashmademoiselle-8623d0938879.herokuapp.com/', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setData(data)
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        makeCall();
    }, []);
    return (
        <div>
            <div className="colc-text text-3xl font-bold underline">
                <h1>COLLECTION</h1>
            </div>
            <div className="Prodct-conatiner">
                {data.map((item, index) => (
                    <div className="testing" key={item.reference}>
                        <Link
                            to={`/product/${item.reference}`}
                            onClick={() => setSelectedProduct(item)}
                        >
                            <img src={item.imageURL} />

                            <p>{item.name || "nothing for the moment"}</p>
                            <p>{item.price.$numberDecimal}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Prodct;