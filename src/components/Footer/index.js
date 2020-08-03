import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/ajuteixeira">
        <img src="https://fontmeme.com/permalink/200802/889615fe2890aa4b6f3ecf78cb1f5813.png" alt="Logo Catflix" />
      </a>
      <p>
        Made with ♥ by
        {' '}
        <a href="https://github.com/ajuteixeira">
          Juliana Teixeira
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
