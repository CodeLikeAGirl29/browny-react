import { useState, useRef } from 'react';
import { links } from '../data';
import '../index.css';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className="top-area">
      <div className="header-area">
        <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div className="container">
      <div className='navbar-header'>
          <button className='navbar-toggle' data-toggle="collape" data-target="#navbar-menu" onClick={toggleLinks}>
          </button>
          <p className="navbar-brand">browny</p>
        </div>
        <div
          className='collapse navbar-collapse menu-ui-design'
          ref={linksContainerRef}
          id="navbar-menu"
        >
          <ul className='nav navbar-nav navbar-right' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li className="smooth-menu" key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </nav>
      </div>
      <div className="clearfix"></div>
    </header>
  );
};
export default Header;