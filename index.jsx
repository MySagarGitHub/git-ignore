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
        <div className="container">
            <header>
            </main>
            <footer>
                <p>&copy; E-Commerce Site. All rights reserved.</p>
            </footer>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));
