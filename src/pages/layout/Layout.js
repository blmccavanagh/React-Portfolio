import React from 'react';
import Navigation from './Navigation';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Layout(props) {
    return (
        <div>
            
            <Header></Header>

            <Navigation></Navigation>

                {props.children}

            <Footer></Footer>

        </div>
    )
}
