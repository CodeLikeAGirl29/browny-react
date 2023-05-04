import React from 'react'
import ScrollButton from './ScrollButton';
import { Content } from './Styles';

export default function Footer() {
  return (
    <div> <footer id="footer-copyright" className="footer-copyright">
      <div className="container">
        <div className="hm-footer-copyright text-center">
          <p> &copy; 2023 <i className="fa-solid fa-code"></i> with <i className="fa-solid fa-heart"></i> by <a href="https://www.lindseyk.dev/">lindsey</a>
          </p>
        </div>
      </div>
      <div id="scroll-Top">
      <Content />
      <ScrollButton />
      </div>
    </footer></div>
  )
}
