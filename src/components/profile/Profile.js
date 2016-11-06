import React, { Component } from 'react'
import ProfileLink from './ProfileLink'
import './css/profile.css'

class Profile extends Component {
  render() {
    return (
      <section className="profile">
        <div className="profile__image"></div>
        <header className="profile__header">
          <h1>
            <span>Hello,</span><br />
            I'm Ben Derham.
          </h1>
        </header>
        <div className="profile__text">
          <p>I'm a Front End Developer, Motorsport Enthusiast & Metalhead from Perth, Western Australia.</p>
          <p>I've been creating digital projects for large scale corporations, non-for-profit companies and small businesses for around 8 years now, winning some awards along the way.</p>
          <p>I love mentoring, sharing and advancing my expertise, which lead me to become an organiser of Perth's Front End Developer meetup group, <a href="http://fende.rs" target="_blank">Fenders</a>. </p>
          <p>I'm focused on crafting user interface solutions for client-side web applications and web sites with modular, maintainable and scalable code.</p>
        </div>
        <div className="profile__links">
          <h2>Say Hello!</h2>
          <ProfileLink url="https://github.com/benderham" text="GitHub" />
          <ProfileLink url="http://codepen.io/benderham/" text="Codepen" />
          <ProfileLink url="https://twitter.com/benderham88" text="Twitter" />
        </div>
      </section>
    )
  }
}

export default Profile
