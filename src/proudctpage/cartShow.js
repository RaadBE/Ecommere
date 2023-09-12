import React, { useContext } from 'react';
import ProductContext from './ProductContext';
import Minin from './miniCart.js'
import Proudct from './product.js'

function CollectionPage() {
    return (
        <div>
            <Proudct />
            <Minin />
        </div>
    );
}
export default CollectionPage;
