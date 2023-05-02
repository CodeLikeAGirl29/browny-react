import { FaGithub, FaDribbble, FaLinkedin, FaTwitter, FaWallet, FaTree, FaSocks } from 'react-icons/fa';

import project1 from './images/portfolio/p1.jpg';
import project2 from './images/portfolio/p2.jpg';
import project3 from './images/portfolio/p3.jpg';
import project4 from './images/portfolio/p4.jpg';

export const links = [
  { id: 1, url: '#education', text: 'home' },
  { id: 2, url: '#skills', text: 'about' },
  { id: 3, url: '#experience', text: 'services' },
  { id: 4, url: '#portfolio', text: 'tours' },
  { id: 5, url: '#contact', text: 'contact' },
  { id: 6, url: '#education', text: 'education' },
];

export const social = [
  { id: 1, url: 'https://www.github.com/codelikeagirl29', icon: <FaGithub /> },
  { id: 2, url: 'https://www.linkedin.com/in/lindsey-howard', icon: <FaLinkedin /> },
  { id: 3, url: 'https://www.dribbble.com/codelikeagirl91', icon: <FaDribbble /> },
  { id: 4, url: 'https://www.twitter.com/dev_lindseyk', icon: <FaTwitter /> },
];

export const experience = [
  {
    id: 1,
    icon: <FaWallet />,
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 2,
    icon: <FaTree />,
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: <FaSocks />,
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
];

export const projects = [
  {
    id: 1,
    image: project1,
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    liveLink: 'https://github.com',
  },
  {
    id: 2,
    image: project2,
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    liveLink: 'https://github.com',
  },
  {
    id: 3,
    image: project3,
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    liveLink: 'https://github.com',
  },
  {
    id: 4,
    image: project4,
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    liveLink: 'https://github.com',
  },
];
