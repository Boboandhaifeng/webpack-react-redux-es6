import asyncComponent from 'AsyncComponent';
const Home = asyncComponent(() => import('./home'));
const About = asyncComponent(() => import('./about'));
const Topics = asyncComponent(() => import('./topics'));
export {Home}
export {About} 
export {Topics}
