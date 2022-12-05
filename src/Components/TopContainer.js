import React, { useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FaBell, FaChevronDown } from 'react-icons/fa';
import Woman from '../img/women.jpg';

const TopContainer = () => {
    useEffect(() => {
        const menuTarget = document.getElementById('menuChevron');
        const menuContainer = document.getElementById('menuContainer');

        menuTarget.addEventListener('mouseenter', () => {
            menuTarget.style.transform = 'rotate(180deg)';
            menuContainer.style.transform = 'translateX(0)';
        });

        menuContainer.addEventListener('mouseleave', () => {
            menuTarget.style.transform = 'rotate(0)';
            menuContainer.style.transform = 'translateX(300px)';
        });
    }, []);

    return (
        <div className="topContainer">
            <div className="inputBox">
                <input type="text" placeholder="Search item, collections" />
                <i>
                    <BiSearchAlt />
                </i>
            </div>

            <div className="profileContainer">
                <i className="profileIcon">
                    <FaBell />
                </i>

                <div className="profileImage">
                    <img src={Woman} alt="" />
                </div>

                <p className="profileName">Olivia Christine</p>
                <i className="menuChevron" id="menuChevron">
                    <FaChevronDown />
                </i>

                <div className="menuContainer" id="menuContainer">
                    <ul>
                        <li>Web design</li>
                        <li>UI / UX</li>
                        <li>Form design</li>
                        <li>UI design</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopContainer;
