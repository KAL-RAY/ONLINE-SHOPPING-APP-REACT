import React from 'react';

import Header from './components/landingpage/Header';
import CategorySection from './components/landingpage/CategorySection';
import ProductsDisplay from './components/landingpage/ProductsDisplay';
import Footer from './components/landingpage/Footer';
import './App.css';


function App() {
    return (
        <div className="App">
            <Header/>
            <CategorySection/>
            <ProductsDisplay
                className='section'
                img='./Capture1.PNG'
                title='Iphone'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.'
            />

            <ProductsDisplay
                className='section bg-grey'
                img='./Capture3.PNG'
                title='Samsung'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.'
            />
             <ProductsDisplay
                className='section bg-grey'
                img='./Capture3.PNG'
                title='Infinix'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.'
            />
             <ProductsDisplay
                className='section bg-grey'
                img='./Capture3.PNG'
                title='Tecno'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.'
            />
            <Footer/>
        </div>
    );
}


export default App;

