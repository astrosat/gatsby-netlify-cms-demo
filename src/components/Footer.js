import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer >
        <div style={
          {
            'background-color': 'red', 
            'display': 'flex', 
            'justify-content': 
            'space-between',
            'height': '45px',
            'background-color': '#f6be00'
          }}>
          <div className='Follow-us'>Follow us</div>
          <div className="social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>      
        </div>
          <div style={
            {
              'height': '450px',
              'background-color': '#333f48'
          }}>
            
            <div className='footer-logo'><h3>LOGO GOES HERE</h3></div>

            <div className="footer-columns">

              <div className='Astrosat-Copernicus'>
                <div>Astrosat</div>
                <div>Copernicus Kirk</div>
                <div>200 High Street</div>
                <div>Musselburgh</div>
                <div>EH21 7DX</div>
                <div> </div>
                <div>+44(0) 131 516 8864</div>
                <div>info@astrosat.space</div>
              </div>

              <div className='footer-links'>
                <div className='Explore'>Explore</div>
                <section className="Explore-menu">
                  <ul>
                    <li>
                      <Link className='OR3IS' to="/" >
                        OR3IS
                      </Link>
                    </li>
                    <li>
                      <Link className='OR3IS' to="/about">
                        Modules
                      </Link>
                    </li>
                    <li>
                      <Link className='OR3IS' to="/products">
                        Plans
                      </Link>
                    </li>
                    <li>
                      <Link className='OR3IS' to="/contact/examples">
                        Stories
                      </Link>
                    </li>
                    <li>
                      <Link className='OR3IS' to="/">
                        Astrosat
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>

        </div>
      </footer>
    )
  }
}

export default Footer
