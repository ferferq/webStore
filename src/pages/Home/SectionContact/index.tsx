import { memo } from "react";
import { TextLarge, TextParagraph } from "../../../styles/tagGlobals/TagText";
import { ContainerContact } from "./styles";

function SectionContactComponent() {
  return(
    <ContainerContact>
      <div>
        <TextLarge>
          Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.
        </TextLarge>

        <TextParagraph>
          Entre em contato
        </TextParagraph>

        <p>
          comercial@jussi.com.br
        </p>
      </div>
    </ContainerContact>
  );
}

export const SectionContact = memo(SectionContactComponent, () => true);