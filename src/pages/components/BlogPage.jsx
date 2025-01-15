import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FooterTheme from './FooterTheme';
import Subscribe from './Subscribe';
import GlobalStyle from '../GlobalStyles';
import '../css/BlogPage.css';

function BlogPage({ posts }) {
  const { blogId } = useParams();

  // Example comments state
  const [comments, setComments] = useState([
    { name: 'Alice', text: 'Great insights on this post!' },
    { name: 'Bob', text: 'I found this article really helpful. Thanks for sharing!' },
  ]);

  const blogPost = posts.find((post) => post.link === `/blogs/${blogId}`);

  if (!blogPost) {
    return <div>Blog not found!</div>;
  }

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

        {blogPost.subtitles.map((subtitle, index) => (
          <div key={index} className="blog-subtitle">
            <h2 className="subtitle-title">{subtitle.title}</h2>
            <p className="subtitle-content">{subtitle.content}</p>
          </div>
        ))}

        {/* Comments Section */}
        <div className="comments-section">
          <h3>Comments</h3>
          <div className="comments-list">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <p><strong>{comment.name}:</strong> {comment.text}</p>
              </div>
            ))}
          </div>
          <div className="comment-input">
            <input type="text" placeholder="Write a comment..." />
            <button>Post</button>
          </div>
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

export default BlogPage;
