import { Button } from "../../../components/Button";
import { TextLarge, TextParagraph } from "../../../styles/tagGlobals/TagText";
import imgJussi from '../../../assets/image-jussi.png';
import { ContainerAbout } from "./styles";
import { memo } from "react";

function SectionAboutComponent() {
  return (
    <ContainerAbout>
      <div>
        <div>
          <TextLarge>
            Olá, somos a Jüssi
          </TextLarge>
          <TextParagraph>
            A Jüssi é uma agência integrante do grupo
            global WPP que vem há 10 anos consolidando
            o pensamento voltado para produtos e
            resolução de prob                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 lemas. Nosso área dedicada
            exclusivamente para Produtos Digitais é
            organizada em 6 especialidades: Product
            Managamenet, User Experience Design, SEO,
            Tecnologia, Agile e User Behavior Analytics.
          </TextParagraph>
          <Button
            buttonStyle={{
              typeStyle: "outline-black"
            }}
          >
            Conheça a Jüssi
          </Button>
        </div>
        <div>
          <img src={imgJussi} alt="Escritório Jussi" />
        </div>
      </div>
    </ContainerAbout>
  )

}

export const SectionAbout = memo(SectionAboutComponent, () => true);