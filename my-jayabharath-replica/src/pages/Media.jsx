import React from 'react';
import './Media.css';
import headerBg from '../asset/MediaBG.jpeg'

const Media = () => {
  const mediaItems = [
    {
      id: 1,
      title: 'Press Release: New Project Launch',
      type: 'Press Release',
      date: 'January 20, 2024'
    },
    {
      id: 2,
      title: 'Happy Homes Featured in Real Estate Magazine',
      type: 'News Article',
      date: 'January 15, 2024'
    },
    {
      id: 3,
      title: 'Award: Best Builder in Madurai 2023',
      type: 'Award',
      date: 'December 30, 2023'
    },
    {
      id: 4,
      title: 'Video: Project Tour of Happy Elite City',
      type: 'Video',
      date: 'December 25, 2023'
    },
    {
      id: 5,
      title: 'Interview: Founder on Real Estate Trends',
      type: 'Interview',
      date: 'December 20, 2023'
    },
    {
      id: 6,
      title: 'Press Coverage: New Coimbatore Project',
      type: 'Press Release',
      date: 'December 15, 2023'
    }
  ];

  return (
    <div className="media-page">
          <div className="services-header" style={{ backgroundImage: `url(${headerBg})` }}>
               <div className="services-header-overlay"></div>
              <div className="services-header-left">
          <h1>Media</h1>
          <p>News, Press Releases, and Updates</p>
        </div>
        </div>

      <div className="container">
        <section className="media-content">
          <div className="media-intro">
            <h2>In the News</h2>
            <p>
              Stay updated with the latest news, press releases, awards, and media coverage 
              about Happy Homes.
            </p>
          </div>

          <div className="media-grid">
            {mediaItems.map(item => (
              <div key={item.id} className="media-card">
                <div className="media-type-badge">{item.type}</div>
                <h3>{item.title}</h3>
                <p className="media-date">{item.date}</p>
                <a href="/#" role="button" className="read-more">Read More →</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Media;


