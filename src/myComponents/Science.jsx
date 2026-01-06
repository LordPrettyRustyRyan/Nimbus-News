import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Science() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch science news from the backend API
    axios
      .get('http://localhost:5000/api/news/science')
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching news:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading Science News...</h2>;

  return (
    <div>
      <section id="science" className="full-hight px-lg-5">
        <div className="container gy-4">
          <div className="row p-4">
            <div className="col-md-8" data-aos="fade-up">
              <h2>SCIENCE</h2>
            </div>
            <div className="row gy-4">
              {articles.map((article, index) => (
                <div className="col-md-4" data-aos="fade-up" data-aos-delay={`${index * 300}`} key={index}>
                  <div className="card rounded-4 bg-base shadow-effect gy-4">
                    <div className="img rounded-4">
                      <img
                        src={article.urlToImage || 'blog.PNG'}
                        alt={article.title}
                        className="rounded-4"
                      />
                    </div>
                    <div className="card-content p-3">
                      <p className="text-brand mb-2">{new Date(article.publishedAt).toLocaleDateString()}</p>
                      <h4 className="mb-4">{article.title}</h4>
                      <a href={article.url} className="custom-link" target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
