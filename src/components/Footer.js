import React from 'react';
import logo from '../images/Logo .svg'
const Footer = () => {
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>
          Little Lemon is a restaurant that offers a unique dining experience with delicious food and a warm atmosphere. Our menu features a variety of dishes that are sure to satisfy any palate. Come visit us and enjoy a memorable dining experience.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/'>About</a>
                        </li>
                        <li>
                            <a href='/'>Menu</a>
                        </li>
                        <li>
                            <a href='/'>Reservations</a>
                        </li>
                        <li>
                            <a href='/'>Order Online</a>
                        </li>
                        <li>
                            <a href='/'>Login</a>
                        </li>
                        
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 2-3-33 City, USA</li>
                        <li>Phone: <br/> ++ 2342 2342 2343</li>
                        <li>Email: <br/> littl@lemon.com</li>
                    </ul>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                        <li><a href='/'>LinkedIn</a></li>
      
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;