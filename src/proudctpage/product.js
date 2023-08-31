// Prodct.js
import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import ProductContext from './ProductContext';

import './proudct.css';

function Prodct() {
    const [data, setData] = useState([]);
    const { setSelectedProduct } = useContext(ProductContext); 

    useEffect(() => {
            fetch(`/products`)
            .then((response) => response.json())
            .then((actualData) => {
                console.log('testttt',actualData);
                setData(actualData);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div>
            <div className='colc-text'>
                <h1>COLLECTION</h1>
            </div>
            <div className='Prodct-conatiner'>
                {data.map((item, index) => (
                    <div className='testing' key={index}>
                        <Link 
                            to={`/product/${item.reference}`}
                            onClick={() => setSelectedProduct(item)}
                        >
                            <img src={item.image.name} />
                        </Link>
                        <p>{item.name || 'nothing for the moment'}</p>
                        <p>{item.price.$numberDecimal}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Prodct;