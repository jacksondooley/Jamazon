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
                <Link to="/books">Books</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/electronics">Electronics</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/furniture">Furniture</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/clothes">Clothes</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/jams">Jams</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/groceries">Groceries</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/office">Office</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/toysandgames">Toys & Games</Link>
            </div>
            <div className="nav-main-item">
                <Link to="/petsupplies">Pet Supplies</Link>
            </div>
        </ul>
    </div>
)

export default NavMain