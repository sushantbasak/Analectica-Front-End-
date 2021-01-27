import React from 'react';
import classes from './Dashboard.module.css';

export default function UserPage() {
  return (
    <div className={classes.container}>
      <header className={classes.pageHeader}>
        <div>Icon</div>
        <div>Sushant</div>
      </header>
      <article className={classes.mainArticle}>Article</article>
      <nav className={classes.mainNav}>
        <div>Analectica</div>
        <div className={classes.sidebar}>
          <div className={classes.Dash}>Dashboard</div>
          <div>Profile</div>
          <div>Todo</div>
          <div>Website</div>
        </div>
      </nav>
      <ads className={classes.siteAds}>Ads</ads>
      <footer className={classes.pageFooter}>Footer</footer>
    </div>
  );
}
