import React, { useContext } from 'react';
import ProductContext from './ProductContext';
import './mini.css';

function Minin() {
    const { cart, removeFromCart } = useContext(ProductContext);

    return (
        <div className='list-conta'>
            <div className="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
                <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
                    <span className="sr-only">Close cart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="mt-4 space-y-6">
                    <ul className="space-y-4">
                        {cart.map((product, index) => (
                            <li className="flex items-center gap-4" key={index}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-16 w-16 rounded object-cover"
                                />

                                <div>
                                    <h3 className="text-sm text-gray-900">{product.name}</h3>

                                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                        <div>
                                            <dt className="inline">Size:</dt>
                                            <dd className="inline">{product.size}</dd>
                                        </div>

                                        <div>
                                            <dt className="inline">Color:</dt>
                                            <dd className="inline">{product.color}</dd>
                                        </div>
                                    </dl>
                                    <dd>
                                        <button onClick={() => removeFromCart(product)}>
                                            Remove from cart
                                        </button>
                                    </dd>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="space-y-4 text-center">
                        <a href="#" className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400">
                            View my cart ({cart.length})
                        </a>

                        <a href="#" className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                            Checkout
                        </a>

                        <a href="#" className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600">
                            Continue shopping
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Minin;
