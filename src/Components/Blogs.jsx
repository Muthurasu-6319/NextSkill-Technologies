import React from 'react';
import NewsImg from '../assets/news.png';
import './Blogs.css';

export default function Blogs() {
  const posts = [
    {
      id: 1,
      tag: "UI/UX Tools",
      title: "But also the leap into ui ux tools",
      author: "Admin",
      date: "August 25,2024",
      excerpt: "Let's dive into each UX/UI tool and discover how you craft beautiful projects."
    },
    {
      id: 2,
      tag: "UI/UX Tools",
      title: "But also the leap into ui ux tools",
      author: "Admin",
      date: "August 25,2024",
      excerpt: "Let's dive into each UX/UI tool and discover how you craft beautiful projects."
    },
    {
      id: 3,
      tag: "UI/UX Tools",
      title: "But also the leap into ui ux tools",
      author: "Admin",
      date: "August 25,2024",
      excerpt: "Let's dive into each UX/UI tool and discover how you craft beautiful projects."
    }
  ];

  return (
    <section className="blogsSection" id="blogs">
      <div className="blogsContent">
        <div className="blogsBadge">
          Blogs
        </div>

        <h2 className="blogsTitle">
          Our recent news & insights
        </h2>

        <div className="blogsGrid">
          {posts.map((post) => (
            <div className="blogCard" key={post.id}>
              <div className="blogImageWrapper">
                <img src={NewsImg} alt={post.title} className="blogImage" />
              </div>

              <div className="blogCardBody">
                <span className="blogTag">{post.tag}</span>
                <h3 className="blogCardTitle">{post.title}</h3>
                <div className="blogMeta">
                  <span className="blogAuthor">{post.author}</span>
                  <span className="blogDot">·</span>
                  <span className="blogDate">{post.date}</span>
                </div>
                <p className="blogExcerpt">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
