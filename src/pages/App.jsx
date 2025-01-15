import FooterTheme from './components/FooterTheme';
import React, { useState } from 'react';
import BlogGrid from './components/BlogGrid';
import Line from './components/Line';
import Subscribe from './components/Subscribe';
import SearchBar from './components/SearchBar';


function App({ lifestylePosts, technologyPosts, info }) {

  const allPosts = [
    ...lifestylePosts.featured,
    ...lifestylePosts.recent,
    ...technologyPosts.featured,
    ...technologyPosts.recent,
  ];

  const [filteredPosts, setFilteredPosts] = useState(allPosts);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="brand-name">Global</a>
          <ul className="nav-links">
            <li><a href="#lifestyle">Lifestyle</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="#subscribe" className="subscribe-btn">Subscribe</a>
        </div>
      </nav>

      <h1 className="topText">
        Welcome to Scribe, we write about technology, people, and culture
      </h1>
      <SearchBar posts={allPosts} setFilteredPosts={setFilteredPosts} />

      {/* LIFESTYLE SECTION */}
      <Line />
      <h1 className="subText">Lifestyle</h1>
      <div id="lifestyle">
        <BlogGrid
          featuredPosts={filteredPosts.filter((post) =>
            lifestylePosts.featured.includes(post)
          )}
          recentPosts={filteredPosts.filter((post) =>
            lifestylePosts.recent.includes(post)
          )}
        />
      </div>

      {/* TECHNOLOGY SECTION */}
      <Line />
      <h1 className="subText">Technology</h1>
      <div id="technology">
        <BlogGrid
          featuredPosts={filteredPosts.filter((post) =>
            technologyPosts.featured.includes(post)
          )}
          recentPosts={filteredPosts.filter((post) =>
            technologyPosts.recent.includes(post)
          )}
        />
      </div>

      <div id="about" className="about-section">
  {/* About Us Section */}
  <div className="about-container">
    <h2>About Us</h2>
    <p>
      Welcome to our blog, your go-to source for the latest insights and trends in
      technology and lifestyle. Our mission is to keep you informed, inspired, and
      ahead of the curve with fresh, engaging content. From cutting-edge tech
      innovations to tips for a balanced and fulfilling life, we've got you covered!
    </p>
    <p>
      Whether you're a tech enthusiast, a lifestyle seeker, or just someone looking
      to explore the best of both worlds, our blog is designed with you in mind.
      Stay connected with our regular updates, and discover a wealth of knowledge
      to enhance your everyday life.
    </p>
    <p>
      Join us on this exciting journey, and let's explore the future of technology
      and the art of living well together!
    </p>
  </div>
</div>

<div id="contact" className="contact-section">
  {/* Contact Us Section */}
  <div className="contact-container">
    <h2>Contact Us</h2>
    <p>
      We'd love to hear from you! Whether you have questions, feedback, or simply
      want to connect, feel free to reach out to us using the details below:
    </p>
    <ul>
      <li>twitter: <a href="https://twitter.com/yourblog">@yourblog</a></li>
      <li>Instagram: <a href="https://instagram.com/yourblog">@yourblog</a></li>
      <li>Facebook: <a href="https://facebook.com/yourblog">facebook.com/yourblog</a></li>
    </ul>
    <p>
      Stay connected and follow us on social media for the latest updates and exclusive content!
    </p>
  </div>
</div>


      <Subscribe />

      <FooterTheme
        logoImage={info.logoImage}
        routes={info.routes}
        socialLinks={info.socialLinks}
        webName={info.webName}
        address={info.address}
      />
    </>
  );
}

export default App;
