import React from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';

function Footer({ user }) {
  return (
    <div className="Footer">
      <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      {user && user.isLoggedIn && <a href="#">Contact us</a>}
    </div>
  );
}

export default Footer;