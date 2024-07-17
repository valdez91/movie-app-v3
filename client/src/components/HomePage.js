import React from 'react';
import './HomePage.css'; // Import your CSS file for styling

const HomePage = () => {
    // Fake contact information
    const contactInfo = {
        address: "123 Movie Review St, Film City",
        phone: "+254 (555) 123-4567",
        email: "bmaitho@gmail.com"
    };

    return (
        <div className="home-page">
           
            <div className="cards-container">
                <div className="card about-app">
                    <h2>About the Mtandao Movie Review App</h2>
                    <p>
                        Mtandao is your ultimate destination for movie reviews and recommendations. Discover new movies, read insightful reviews, and share your opinions with a vibrant community of film enthusiasts.
                    </p>
                </div>
                <div className="card fun-facts">
                    <h2>Fun Facts about Movies</h2>
                    <p>
                        First Film: The world's first feature-length film is often credited to "The Story of the Kelly Gang," an Australian production from 1906.<br />
                        Most Expensive Film: As of recent records, the most expensive film ever made is "Avengers: Endgame," with a production budget exceeding $350 million.<br />
                        Longest Film: The longest mainstream film is "Gone with the Wind" (1939), with a runtime of approximately 3 hours and 58 minutes.<br />
                        Most Oscars: The film with the most Academy Awards is "Ben-Hur" (1959), winning 11 Oscars including Best Picture and Best Director.
                    </p>
                </div>
                <div className="card contact-us">
                    <h2>Contact Us</h2>
                    <p>
                        Address: {contactInfo.address}<br />
                        Phone: {contactInfo.phone}<br />
                        Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
