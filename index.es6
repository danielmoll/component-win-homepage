import React from 'react';
import WinTeaser from '@economist/component-win-teaser';
import AdPanel from '@economist/component-ad-panel';

export function WinHomepageAdPanel(props) {
  return (
    <aside className="world-in-homepage__advert-panel">
      <AdPanel {...props}/>
    </aside>
  );
}
if (process.env.NODE_ENV !== 'production') {
  WinHomepageAdPanel.propTypes = AdPanel.propTypes;
}

/* eslint-disable react/no-multi-comp */
export default function WinHomePage({
  articles,
  advert = {
    'adTag': '/5605/theworldin',
    'sizes': [ [ 0, 0 ] ],
    'sizeMapping': [
        [ [ 1024, 1 ], [ [ 1024, 768 ], [ 970, 250 ] ] ],
        [ [ 768, 1 ], [ [ 728, 90 ] ] ],
        [ [ 320, 1 ], [ [ 300, 250 ], [ 1, 1 ] ] ],
    ],
    reserveHeight: 100,
  },
}) {
  const elements = articles.map((article, index) => (
    <WinTeaser {...article} key={article.teaserId} variantName={index === 0 ? 'hero' : 'default'}/>
  ));
  if (advert) {
    elements.push(<WinHomepageAdPanel {...advert} key="_ad"/>);
  }
  return (
    <main className="world-in-homepage">{elements}</main>
  );
}
if (process.env.NODE_ENV !== 'production') {
  WinHomePage.propTypes = {
    articles: React.PropTypes.arrayOf(
      React.PropTypes.shape(WinTeaser.propTypes)
    ).isRequired,
    advert: React.PropTypes.shape(WinHomepageAdPanel.propTypes),
  };
}
