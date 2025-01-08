import FooterTheme from './components/FooterTheme'
import React from 'react';
import BlogGrid from './components/BlogGrid';

function App() {
    // define variables
    let info = {
      webName: "Global",
      routes: {
          lifestyle: "#lifestyle",
          technology: "#technology",
      },
      socialLinks: {
          github: "https://github.com/johndoe",
          instagram: "https://instagram.com/johndoe",
          linkedIn: "https://linkedIn.com/johndoe",
      },
    }

    const featuredPosts = [
      {
        link: '/blogs/mindfulness-fast-paced-world',
        image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009778/samples/ecommerce/leather-bag-gray.jpg',
        altText: 'Mindfulness in a fast-paced world',
        category: 'Lifestyle',
        date: 'Jul 3',
        title: 'Mindfulness in a fast-paced world',
        excerpt: 'Discussing the importance of mindfulness practices...'
      },
      {
        link: '/blogs/ai-transforming-industries',
        image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009778/samples/ecommerce/leather-bag-gray.jpg',
        altText: 'AI: Transforming industries one byte at a time',
        category: 'Technology',
        date: 'Jul 3',
        title: 'AI: Transforming industries one byte at a time',
        excerpt: 'A look at how AI is revolutionizing various industries...'
      }
    ];
  
    const recentPosts = [
      {
        link: '/blogs/digital-art-modern-culture',
        image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009778/samples/ecommerce/leather-bag-gray.jpg',
        altText: 'The rise of digital art',
        category: 'Culture',
        date: 'Jul 3',
        title: 'The rise of digital art in modern culture',
        excerpt: 'Exploring how digital art is becoming a significant...'
      },
      {
        link: '/blogs/digital-art-modern-culture',
        image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009778/samples/ecommerce/leather-bag-gray.jpg',
        altText: 'The rise of digital art',
        category: 'Culture',
        date: 'Jul 3',
        title: 'The rise of digital art in modern culture',
        excerpt: 'Exploring how digital art is becoming a significant...'
      },
      {
        link: '/blogs/digital-art-modern-culture',
        image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009778/samples/ecommerce/leather-bag-gray.jpg',
        altText: 'The rise of digital art',
        category: 'Culture',
        date: 'Jul 3',
        title: 'The rise of digital art in modern culture',
        excerpt: 'Exploring how digital art is becoming a significant...'
      },
      {
        link: '/blogs/digital-art-modern-culture',
        image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009778/samples/ecommerce/leather-bag-gray.jpg',
        altText: 'The rise of digital art',
        category: 'Culture',
        date: 'Jul 3',
        title: 'The rise of digital art in modern culture',
        excerpt: 'Exploring how digital art is becoming a significant...'
      },
      {
        link: '/blogs/digital-art-modern-culture',
        image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009778/samples/ecommerce/leather-bag-gray.jpg',
        altText: 'The rise of digital art',
        category: 'Culture',
        date: 'Jul 3',
        title: 'The rise of digital art in modern culture',
        excerpt: 'Exploring how digital art is becoming a significant...'
      },
      {
        link: '/blogs/digital-art-modern-culture',
        image: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731009778/samples/ecommerce/leather-bag-gray.jpg',
        altText: 'The rise of digital art',
        category: 'Culture',
        date: 'Jul 3',
        title: 'The rise of digital art in modern culture',
        excerpt: 'Exploring how digital art is becoming a significant...'
      }
    ];

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
      <h1 className="topText">Welcome to Scribe, we write about technology, people and culture</h1>
      <div>
      <BlogGrid featuredPosts={featuredPosts} recentPosts={recentPosts} />
    </div>
      <FooterTheme logoImage = {info.logoImage} routes = {info.routes} socialLinks = {info.socialLinks} webName = {info.webName} address = {info.address}/>
    </>
  );
}

export default App;
