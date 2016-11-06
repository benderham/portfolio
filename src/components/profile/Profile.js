import React, { Component } from 'react'
import profileImage from './img/ben-derham.jpg'

class Profile extends Component {
  render() {
    return (
      <section className="profile">
        <header className="profile__header">
          <h1>Ben Derham<span>?</span></h1>
        </header>
        <div className="profile__image">
          <img src={profileImage} alt="Ben Derham" />
        </div>
        <div className="profile__text">
          <p>A passionate, award-winning Front End Developer with over 8 years experience in creating effective digital projects for large scale corporations, non-for-profit companies and small businesses. An active member of the front end development community, he strives to mentor, share and advance his expertise. Focused on crafting user interface solutions for client-side web applications and web sites with modular, maintainable and scalable code.</p>
        </div>
        <div className="profile__links">
          <a href="https://github.com/benderham" target="_blank">GitHub</a>
          <a href="https://twitter.com/benderham88" target="_blank">Twitter</a>
          <a href="https://au.linkedin.com/in/benderham" target="_blank">LinkedIn</a>
          <a href="mailto:hello@benderham.com">Email</a>
        </div>
      </section>
    )
  }
}

export default Profile
