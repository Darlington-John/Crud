import React from 'react';
import './Footer.css';
import BigCrudImg from './../../Assets/Images/BigCrud.png';
import DotImg from './../../Assets/Images/Dot.png';
import VectorImg from './../../Assets/Images/Vector.png';
import twitterIcon from './../../Assets/Icons/twitter.png';
import DiscordIcon from './../../Assets/Icons/Discord.png';
import GitHubIcon from './../../Assets/Icons/GitHub.png';
import youtubeIcon from './../../Assets/Icons/youtube.png';
import { VisibleInput } from '../Inputs/Inputs';
import { DefaultBtn } from '../Buttons/Buttons';
export const Footer = (props) => {
  const FooterStyle = {
    background: ` radial-gradient(457.76% 457.76% at 46.08% -13.69%, rgba(42, 42, 42, 0.70) 0%, rgba(0, 0, 0, 0.00) 27.11%), #000 url("${VectorImg}")`,
  };
  return (
    <div className="Footer" style={FooterStyle}>
      <img src={BigCrudImg} />
      <div className="LaunchWallet">
        <span>Launch wallet</span>
        <img src={DotImg} />
        <span>See all features</span>
        <img src={DotImg} />
        <span>Blog</span>
      </div>
      <div className="Media">
        <img src={twitterIcon} />
        <img src={DiscordIcon} />
        <img src={youtubeIcon} /> <img src={GitHubIcon} />
      </div>
      <div className="Suscribe">
        <VisibleInput placeholder="Your email address" />
        <DefaultBtn text="Suscribe" />
      </div>
      <div className="Copyright">
        <span>Copyright 2023</span>
        <img src={DotImg} />
        <span>Crud wallet</span>
      </div>
    </div>
  );
};
