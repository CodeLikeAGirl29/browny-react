import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { pageLinks } from '../data';
import '../styles/navbar.css';
import SocialLink from './SocialLink';


export default class Header extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div>
        <header className="top-area">
        <div className="header-area">
          <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="index.html">browny</a>
              </div>
              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                  {pageLinks.map((link) => {
                    return <SocialLink {...link} key={link.id} itemclassName='nav-icon' />
                  })}
                  <li className="smooth-menu active"></li>
                  <li className="smooth-menu">
                    <Link to="#education" spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>education</Link>
                  </li>
                  <li className="smooth-menu">
                    <Link to="#skills" spy={true} smooth={true}
                      offset={-70}
                      duration={500}>skills</Link>
                  </li>
                  <li className="smooth-menu">
                    <Link to="#experience" spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>experience</Link>
                  </li>
                  <li className="smooth-menu">
                    <Link to="#profiles" spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>profile</Link>
                  </li>
                  <li className="smooth-menu">
                    <Link to="#portfolio" spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>portfolio</Link>
                  </li>
                  <li className="smooth-menu">
                    <Link to="#contact" spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="clearfix"></div>
      </header>
      </div>
    )
  }
}