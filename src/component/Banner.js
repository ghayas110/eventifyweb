import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    altText: 'Slide 1',
    
    key: '1'
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
    Slide :'2',
    
    key: '2'
  },
  {
    src: 'https://images.unsplash.com/photo-1585252102474-d9cf7c719720?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    altText: 'Slide 3',
    
    key: '3'
  }
];

const Banner = () => <UncontrolledCarousel items={items} />;

export default Banner;