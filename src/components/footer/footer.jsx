import React from 'react'
import './style.scss'
import{
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContantWrapper from '../contentWrapper/ContantWrapper';

const Footer = () => {
  return (
    <footer className="footer">
        <ContantWrapper>
          <ul className="menuItems">
            <li className="menuItem">Terms Of Use</li>
            <li className="menuItem">Privacey-Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">FAQ</li>
          </ul>
          <div className="infoText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptas temporibus, qui repellat vero delectus voluptatum quasi expedita inventore quae, assumenda sequi quaerat itaque consectetur ex obcaecati tempora cum odit dolorem sapiente neque necessitatibus labore praesentium. Nostrum amet aspernatur temporibus quibusdam doloribus dignissimos debitis neque deleniti, blanditiis vero, sit dicta!
          </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
        </ContantWrapper>
    </footer>
  )
}

export default Footer