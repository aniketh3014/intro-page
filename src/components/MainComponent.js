import React from 'react';
import GitHubButton from './GitHubButton';
import TwitterButton from './TwitterButton';
import LinkedinButton from './LinkedinButton';
import HashnodeButton from './HashnodeButton';
import InstagramButton from './InstagramButton';
import MailButton from './Mail';
const MainComponent = () => {
  return (
    <main style={{ paddingTop: '80px' }} className="circles">
      <SocialMediaButton link="https://github.com/aniketh3014" text="GitHub" />
      <SocialMediaButton link="https://twitter.com/aniketh3014" text="Twitter" />
      
    </main>
  );
};

export default MainComponent;
