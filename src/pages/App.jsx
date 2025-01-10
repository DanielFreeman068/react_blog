import FooterTheme from './components/FooterTheme';
import React from 'react';
import BlogGrid from './components/BlogGrid';
import Line from './components/Line';
import Subscribe from './components/Subscribe';

function App({ lifestylePosts, technologyPosts, info }) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="brand-name">Global</a>
          <ul className="nav-links">
            <li><a href="#lifestyle">Lifestyle</a></li>
            <li><a href="#technology">Technology</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="#subscribe" className="subscribe-btn">Subscribe</a>
        </div>
      </nav>

      <h1 className="topText">
        Welcome to Scribe, we write about technology, people, and culture
      </h1>

      {/* LIFESTYLE SECTION */}
      <Line />
      <h1 className="subText">Lifestyle</h1>
      <div id="lifestyle">
        <BlogGrid
          featuredPosts={lifestylePosts.featured}
          recentPosts={lifestylePosts.recent}
        />
      </div>

      {/* TECHNOLOGY SECTION */}
      <Line />
      <h1 className="subText">Technology</h1>
      <div id="technology">
        <BlogGrid
          featuredPosts={technologyPosts.featured}
          recentPosts={technologyPosts.recent}
        />
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
