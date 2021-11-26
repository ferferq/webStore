import { ContainerFooter } from "./styles";

import ImgWppCompany from '../../assets/wppcompany.png';
import ImgFacebook from '../../assets/facebook.png';
import ImgInstagram from '../../assets/instagram.png';
import ImgLinkedin from '../../assets/linkedin.png';
import { memo } from "react";

function FooterComponent() {
  return (
    <ContainerFooter>
      <div>
          <img src={ImgWppCompany} alt="Wpp Company" />
          <div>
            <img src={ImgFacebook} alt="Facebook" />
            <img src={ImgInstagram} alt="Instagram" />
            <img src={ImgLinkedin} alt="Linkedin" />
          </div>
      </div>
    </ContainerFooter>
  )
}

export const Footer = memo(FooterComponent, () => true);