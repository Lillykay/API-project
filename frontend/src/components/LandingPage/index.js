import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./LandingPage.css";
import React from "react";

const LandingPage = () => {
  return (
    <div className="main-content">
      <section className="main-content-title">
        <h1>The people platform -- Where interests become friendships</h1>
        <p>
          Whatever your interest, from hiking and reading to networking and
          skill sharing, there are thousands of people who share it on Meetup.
          Events are happening every day—sign up to join the fun.
        </p>
      </section>
      <section className="main-content-image">
        <img
          src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080"
          className="main-content-image"
          alt="img"
        ></img>
      </section>
      <section className="main-content-meetup-works">
        <h2>How Meetup works</h2>
        <p>
          Meet new people who share your interests through online and in-person
          events. It’s free to create an account.
        </p>
      </section>
      <section className="main-content-cards">
        <div className="main-content-cards-container">
          <div>
            <img
              src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=384"
              alt="img"
            ></img>
            <NavLink to="/groups">See all groups</NavLink>
            <p>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </p>
          </div>
          <div>
            <img
              src="https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=384"
              alt="img"
            ></img>
            <NavLink to="/events">Find an event</NavLink>
            <p>
              Events are happening on just about any topic you can think of,
              from online gaming and photography to yoga and hiking.
            </p>
          </div>
          <div>
            <img
              src="https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=384"
              alt="img"
            ></img>
            <NavLink to="/groups/new">Start a new group</NavLink>
            <p>
              You don’t have to be an expert to gather people together and
              explore shared interests.
            </p>
          </div>
        </div>
      </section>
      <section className="main-content-join-meetup-section">
        <button className="main-content-join-meetup-btn">Join Meetup</button>
      </section>
    </div>
  );
};

export default LandingPage;
