import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://github.com/AzDarGee" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/AshDarji/" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/AshishRSCDarji" target='_blank'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/ashish.rsc.darji/" target="_blank">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/ashishdarji/" target="_blank">
          <FaFacebookF />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
