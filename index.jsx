import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Add a CSS file for styling

const App = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];

    return (
        <div>
            <header>
                <h1>E-Commerce Site</h1>
                <nav>
                    <a href="#home">Home</a> | <a href="#products">Products</a> | <a href="#cart">Cart</a>
                </nav>
            </header>
            <main>
                <h2>Our Products</h2>
                <div className="product-list">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <button>Add to Cart</button>
                        </div>

                    ))}
                </div>
                <div className="cart">
                    <h2>Your Cart</h2>
                    <p>No items in cart</p>
                </div>
                <div className="checkout">
                    <h2>Checkout</h2>
                    <button>Proceed to Checkout</button>
                </div>
            </main>
            <footer>
                <p>&copy; 2025 E-Commerce Site. All rights reserved.</p>
            </footer>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));
