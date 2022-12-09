import React from 'react';
import { BsLinkedin, BsInstagram, BsBehance } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsBehance />
      </div>
      <div>
        <FaGithub />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
}

export default SocialMedia;