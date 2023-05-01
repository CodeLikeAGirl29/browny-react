import project1 from './images/portfolio/p1.jpg';
import project2 from './images/portfolio/p2.jpg';
import project3 from './images/portfolio/p3.jpg';
import project4 from './images/portfolio/p4.jpg';

export const pageLinks = [
  { id: 1, href: '#education', text: 'home' },
  { id: 2, href: '#skills', text: 'about' },
  { id: 3, href: '#experience', text: 'services' },
  { id: 4, href: '#portfolio', text: 'tours' },
  { id: 4, href: '#contact', text: 'contact' },
  { id: 4, href: '#edu', text: 'education' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fa-brands fa-github' },
  { id: 2, href: 'https://www.linkedin.com/in/lindsey-howard', icon: 'fa-brands fa-linkedin' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-dribbble' },
];

export const experience = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
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
    liveLink: 'china',
  },
  {
    id: 2,
    image: project2,
    date: 'october 1th, 2020',
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    liveLink: 'china',
  },
  {
    id: 3,
    image: project3,
    date: 'september 15th, 2020',
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    liveLink: 'china',
  },
  {
    id: 4,
    image: project4,
    date: 'december 5th, 2019',
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    liveLink: 'china',
  },
];
