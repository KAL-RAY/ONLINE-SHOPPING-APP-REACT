import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';




function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Card
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

            <Card
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
             <Card
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
             <Card
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
            <hr/>
            <ContactUs/>
           


        </div>
    );
}


export default App;
