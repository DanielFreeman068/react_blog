import React from 'react';
import { useParams } from 'react-router-dom';
import FooterTheme from './FooterTheme';
import Subscribe from './Subscribe';
import GlobalStyle from '../GlobalStyles';
import '../css/BlogPage.css'; 

function BlogPage({ posts }) {
  const { blogId } = useParams();
  const blogPost = posts.find((post) => post.link === `/blogs/${blogId}`);

  if (!blogPost) {
    return <div>Blog not found!</div>;
  }

  const subtitles = [
    { title: 'Subtitle 1', content: 'This is the first subtitle content.' },
    { title: 'Subtitle 2', content: 'This is the second subtitle content.' },
    { title: 'Subtitle 3', content: 'This is the third subtitle content.' },
    { title: 'Subtitle 4', content: 'This is the fourth subtitle content.' },
  ];

  const hashtags = ['#Mindfulness', '#Lifestyle', '#Focus'];

  const info = {
    webName: "Global",
    routes: {
      lifestyle: "#lifestyle",
      technology: "#technology",
    },
    socialLinks: {
      github: "https://github.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedIn: "https://linkedin.com/johndoe",
    },
  };

  return (
    <>
        <GlobalStyle />

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

<div className="blog-page">
    <div className="blog-metadata">
        <span className="blog-category">{blogPost.category}</span>
        <div className="blog-hashtags">
            {hashtags.map((hashtag, index) => (
                <span key={index}>{hashtag}</span>
            ))}
        </div>
        <span className="blog-date">{blogPost.date}</span>
    </div>

    <h1 className="blog-title">{blogPost.title}</h1>
    <p className="blog-author">By: {blogPost.author}</p>
    <p className="blog-excerpt">{blogPost.excerpt}</p>

    <div className="blog-image-wrapper">
        <img
            src={blogPost.image}
            alt={blogPost.altText}
            className="blog-image"
        />
    </div>

    {subtitles.map((subtitle, index) => (
        <div key={index} className="blog-subtitle">
            <h2 className="subtitle-title">{subtitle.title}</h2>
            <p className="subtitle-content">{subtitle.content}</p>
        </div>
    ))}
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

export default BlogPage;
