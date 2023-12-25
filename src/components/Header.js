import React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg'


const Header = () => {
  return (
    <header className="header">
      <section>
        {/*banner texts*/}
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>New York</h3>
          <p>
          Little Lemon is a restaurant that offers a unique dining experience with delicious food and a warm atmosphere. Our menu features a variety of dishes that are sure to satisfy any palate. Come visit us and enjoy a memorable dining experience.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>

        {/*banner image */}
        <div className='banner-img'>
            <img src={bannerImg} alt=""/>
        </div>
      </section>
    </header>
  );
};

export default Header;