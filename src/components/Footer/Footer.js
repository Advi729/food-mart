import { useContext } from 'react';
import userContext from '../context';

const Footer = () => {
  const user = useContext(userContext);
  console.log(user);
  return <h4>Footer</h4>;
};

export default Footer;
