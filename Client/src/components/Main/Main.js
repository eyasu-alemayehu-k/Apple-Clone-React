import React from "react";

import MainSecton from "./mainSection/mainSecton";
import YoutubeComponent from "../Youtube/useYoutube";

function Main() {
  return (
    <main role="main" className="main-wrapper">
      <MainSecton
        productClassName="iphone-14-pro"
        titleHeadingClass = "title-heading"
        titleHeading="iPhone 14 Pro"
        titleSubHeading="Pro Beyond."
        linkLearnMore="/iphone-14-pro_learn_more"
        linkBuy = "/iphone-14-pro_buy"
      />
      <MainSecton
        productClassName="iphone-14"
        titleDark = "title-dark"
        titleHeadingClass = "title-heading"
        titleHeading="iPhone 14"
        titleSubHeading="Big and bigger."
        linkLearnMore="/iphone-14_learn_more"
        catLinkDarkFirst= "cta-link-dark"
        linkBuy = "/iphone-14_buy"
        catLinkDarkSecond= "cta-link-dark"
      />
      <MainSecton
        productClassName="HomePod"
        titleHeadingClass = "title-heading"
        titleHeading="HomePod"
        titleSubHeading="Profound sound."
        linkLearnMore="/HomePod_learn_more"
        linkBuy = "/HomePod_buy"
      />
      <MainSecton
        productClassName="watch"
        titleHeadingClass = "title-width"
        titleHeadingImage = "title-heading-watch"
        titleSubHeading="A healthy leap ahead."
        linkLearnMore="/watch_learn_more"
        linkBuy = "/watch_buy"
      />
      <section className="hero watch-Creativity">
        <div className="container">
          <div className="title">
            <h6 className="title-heading">
              Creativity and <br />
              community.
              <br /> Woven together.
            </h6>
            <h3 className="title-sub-heading">
              Explore the new Black Unity watch <br />
              band and matching face.
            </h3>
          </div>
          <div className="cta">
            <a href="/" className="cta-link">
              Learn More
            </a>
            <a href="/" className="cta-link">
              Buy
            </a>
          </div>
        </div>
      </section>
      <section className="hero TV">
        <div className="container">
          <div className="title">
            <figure className="title-width title-heading-tv"></figure>
            <h3 className="title-sub-heading">
              Almost all the biggest stars <br />
              in Hollywood.Almost.
            </h3>
          </div>
          <div className="cta">
            <a href="/" className="cta-link">
              Watch now
            </a>
            <a href="/" className="cta-link mb">
              Try Apple Tv+ free<sup>1</sup>
            </a>
          </div>
        </div>
      </section>
      <section className="hero Valentine-day">
        <div className="container">
          <div className="title title-dark">
            <h2 className="title-heading">Valentine's Day</h2>
            <h3 className="title-sub-heading">Sealed with gift.</h3>
          </div>
          <div className="cta">
            <a href="/" className="cta-link">
              Shop now
            </a>
          </div>
        </div>
      </section>
      <section className="hero Fitness">
        <div className="container">
          <div className="title title-dark">
            <figure className="title-width title-heading-Fitness"></figure>
            <h3 className="title-sub-heading">
              Welcome to the year of you.
              <br />
              Now all you need is iPhone.
            </h3>
          </div>
          <div className="cta">
            <a href="/" className="cta-link">
              Learn
            </a>
            <a href="/" className="cta-link">
              Try Apple Tv+ free<sup>2</sup>
            </a>
          </div>
        </div>
      </section>
      <section className="hero Card">
        <div className="container">
          <div className="title title-dark">
            <figure className="title-width  title-heading-card"></figure>
            <h3 className="title-sub-heading">
              Get up to 3% Daily Cash back <br />
              with every purchase.
            </h3>
          </div>
          <div className="cta">
            <a href="/" className="cta-link">
              Learn more
            </a>
            <a href="/" className="cta-link">
              Apply now
            </a>
          </div>
        </div>
      </section>
      <YoutubeComponent />
    </main>
  );
}

export default Main;
