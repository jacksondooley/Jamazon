import React from "react";
import { Link } from "react-router-dom";

const categories = ["all", "books", "electronics", "clothes", "jam", "groceries", "office"]

const NavMain = () => (

    <div className="nav-main">
        <ul className="nav-main-list">
            <div className="nav-main-item">
                <Link to="/products">All</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/products/books">Books</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/products/electronics">Electronics</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/products/furniture">Furniture</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/products/clothes">Clothes</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/products/jam">Jam</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/products/groceries">Groceries</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/products/office">Office</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/products/toysandgames">Toys & Games</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/products/petsupplies">Pet Supplies</Link>
            </div>
        </ul>
    </div>
)

export default NavMain