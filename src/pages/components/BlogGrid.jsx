import React from 'react';
import Excerpt from './Excerpt'; // path to your Excerpt.jsx
import '../css/BlogGrid.css';

function BlogGrid({ featuredPosts, recentPosts }) {
  return (
    <div className="section">
      <div className="container">
        <div className="blog-grid">
          {/* Left column (Featured) */}
          <div className="grid-column">
            <div className="section-title-wrapper">
              <h2 className="heading small">Featured</h2>
              <div className="spacer _16"></div>
            </div>
            <div className="posts-wrapper featured">
              <div className="posts-grid featured">
                {featuredPosts.map((post, index) => (
                  <div className="post-item" key={index}>
                    {/* The entire post is still a link, so the user goes
                        to the blog post when they click anywhere */}
                    <a href={post.link} className="post-link">
                      <div className="post-item-content">
                        <div className="post-item-image-wrapper">
                          <img
                            src={post.image}
                            alt={post.altText}
                            className="post-item-image"
                          />
                        </div>
                        <div className="top">
                          <div className="divider-line primary-colour"></div>
                          <div className="post-top-details-wrapper">
                            <div className="post-detail-tag">{post.category}</div>
                            <div className="post-detail-tag">{post.date}</div>
                          </div>
                        </div>
                        <div className="bottom">
                          <h2 className="heading large">{post.title}</h2>
                          <div className="text-color-4">
                            {/* Just shows truncated excerpt + "Read more" text */}
                            <Excerpt excerpt={post.excerpt} limit={25} />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column (Recent) */}
          <div className="grid-column">
            <div className="section-title-wrapper">
              <h2 className="heading small">Recent</h2>
              <div className="spacer _16"></div>
            </div>
            <div className="posts-wrapper">
              <div className="posts-grid recent">
                {recentPosts.map((post, index) => (
                  <div className="post-item" key={index}>
                    <a href={post.link} className="post-link">
                      <div className="post-item-content">
                        <div className="post-item-image-wrapper">
                          <img
                            src={post.image}
                            alt={post.altText}
                            className="post-item-image"
                          />
                        </div>
                        <div className="top">
                          <div className="divider-line primary-colour"></div>
                          <div className="post-top-details-wrapper">
                            <div className="post-detail-tag">{post.category}</div>
                            <div className="post-detail-tag">{post.date}</div>
                          </div>
                        </div>
                        <div className="bottom">
                          <h2 className="heading regular">{post.title}</h2>
                          <div className="text-color-4">
                            {/* Same usage, smaller limit if you prefer */}
                            <Excerpt excerpt={post.excerpt} limit={9} />
                          </div>
                        </div>
                      </div>
                    </a>
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