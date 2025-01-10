import React from 'react';
import { Link } from 'react-router-dom';
import Excerpt from './Excerpt';
import '../css/BlogGrid.css';

function BlogGrid({ featuredPosts, recentPosts }) {
  return (
    <div className="section">
      <div className="container">
        <div className="blog-grid">
          {/* Featured Posts */}
          <div className="grid-column">
            <h2 className="heading small">Featured</h2>
            <div className="posts-wrapper featured">
              <div className="posts-grid featured">
                {featuredPosts.map((post, index) => (
                  <div className="post-item" key={index}>
                    <Link to={post.link} className="post-link">
                      <div className="post-item-content">
                        <div className="post-item-image-wrapper">
                          <img
                            src={post.image}
                            alt={post.altText}
                            className="post-item-image"
                          />
                        </div>
                        <div className="bottom">
                          <h2 className="heading large">{post.title}</h2>
                          <Excerpt excerpt={post.excerpt} limit={20} />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="grid-column">
            <h2 className="heading small">Recent</h2>
            <div className="posts-wrapper">
              <div className="posts-grid recent">
                {recentPosts.map((post, index) => (
                  <div className="post-item" key={index}>
                    <Link to={post.link} className="post-link">
                      <div className="post-item-content">
                        <div className="post-item-image-wrapper">
                          <img
                            src={post.image}
                            alt={post.altText}
                            className="post-item-image"
                          />
                        </div>
                        <div className="bottom">
                          <h2 className="heading regular">{post.title}</h2>
                          <Excerpt excerpt={post.excerpt} limit={15} />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogGrid;
