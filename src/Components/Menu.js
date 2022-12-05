import React, { useEffect } from 'react';
import Logo from '../img/logo.png';
import '../Styles/Menu.css';
import {
    FaChartLine,
    FaCog,
    FaDelicious,
    FaRegClock,
    FaShoppingCart,
    FaSignOutAlt,
    FaWallet,
} from 'react-icons/fa';

const Menu = () => {
    useEffect(() => {
        const mainMenuLi = document.getElementById('mainMenu').querySelectorAll('li');
        console.log(mainMenuLi);

        function changeActive() {
            mainMenuLi.forEach((n) => n.classList.remove('active'));
            this.classList.add('active');
        }

        mainMenuLi.forEach((n) => n.addEventListener('click', changeActive));
    }, []);

    return (
        <menu>
            <img src={Logo} alt="" />

            <ul id="mainMenu">
                <Icon icon={<FaDelicious />} />
                <Icon icon={<FaShoppingCart />} />
                <Icon icon={<FaWallet />} />
                <Icon icon={<FaChartLine />} />
                <Icon icon={<FaRegClock />} />
            </ul>

            <ul className="lastMenu">
                <Icon icon={<FaCog />} />
                <Icon icon={<FaSignOutAlt />} />
            </ul>
        </menu>
    );
};

const Icon = ({ icon }) => (
    <li>
        <a href="/#">{icon}</a>
    </li>
);

export default Menu;
