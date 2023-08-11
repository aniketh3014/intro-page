import React from 'react';
import SocialMediaButton from './SocialMediaButton';

const MainComponent = () => {
  return (
    <main style={{ paddingTop: '80px' }} className="circles">
      <SocialMediaButton link="https://github.com/aniketh3014" text="GitHub" />
      <SocialMediaButton link="https://twitter.com/aniketh3014" text="Twitter" />
      <SocialMediaButton link="https://www.linkedin.com/in/aniket-ghosh-8b0b53281/" text="Linkedin" />
      <SocialMediaButton link="https://hashnode.com/@aniketh3014" text="Hashnode" />
      <SocialMediaButton link="https://www.instagram.com/aniket_ghosh440/" text="Instagram" />
    </main>
  );
};

export default MainComponent;
