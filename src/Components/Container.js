import React from 'react';
import '../Styles/Container.css';
import MainContainer from './MainContainer';
import TopContainer from './TopContainer';

const Container = () => {
    return (
        <div className="container">
            <TopContainer />
            <MainContainer />
        </div>
    );
};

export default Container;
