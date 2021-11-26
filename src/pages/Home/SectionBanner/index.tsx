import { TextExtraLarge, TextParagraph } from "../../../styles/tagGlobals/TagText";
import imgProductBanner from '../../../assets/img-banner.png';
import { ContainerBanner, ContainerInfo, ContainerFooter } from "./styles";
import { ContainerGlobal } from "../../../styles/tagGlobals/TagContainerGlobal";
import { Button } from "../../../components/Button";
import { MdArrowRightAlt } from 'react-icons/md';

import logoBrastemp from '../../../assets/logo-brastemp.svg';
import logoCompraCerta from '../../../assets/logo-compracerta.svg';
import logoConsul from '../../../assets/logo-consul.svg';
import logoTheBar from '../../../assets/logo-thebar.svg';
import { memo } from "react";

function SectionBannerComponent() {
  return (
    <>
      <ContainerBanner>
        <ContainerGlobal>
          <ContainerInfo>
            <div>
              <section>
                <TextExtraLarge>
                  Criamos lojas que vendem mais.
                </TextExtraLarge>
                <TextParagraph>
                  A Jüssi é especialista na criação
                  de lojas usando a plataforma VTEX.
                  Precisa criar sua loja ou
                  migrar de plataforma?
                </TextParagraph>
                <Button
                  buttonStyle={{
                    typeStyle: "outline-black"
                  }}
                >
                  Veja nossas soluções
                </Button>
              </section>
            </div>
            <div>
              <img src={imgProductBanner} alt="Imagem de Produtos" loading={"lazy"} />
            </div>
          </ContainerInfo>
        </ContainerGlobal>
      </ContainerBanner>
      <ContainerFooter>
        <ContainerGlobal>
          <TextParagraph>Nossas principais lojas VTEX</TextParagraph>
          <MdArrowRightAlt />
            <img src={logoBrastemp} alt="Brastemp" />
            <img src={logoCompraCerta} alt="Compra certa" />
            <img src={logoConsul} alt="Consul" />
            <img src={logoTheBar} alt="The bar" />
        </ContainerGlobal>
      </ContainerFooter>
    </>
  )
}

export const SectionBanner = memo(SectionBannerComponent, () => true);