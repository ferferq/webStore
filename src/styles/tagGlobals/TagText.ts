import { memo } from "react";
import styled from "styled-components";

const TextLargeComponent = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  text-transform: uppercase;
`

 export const TextLarge = memo(TextLargeComponent, () => true);

export const TextExtraLargeComponent = styled.h1`
  font-size: 64px;
  line-height: 77px;
  font-weight: 500;

  text-transform: uppercase;
`

export const TextExtraLarge = memo(TextExtraLargeComponent, () => true);

export const TextParagraphComponent = styled.p`
  font-size: 16px;
  line-height: 24px;
`

export const TextParagraph = memo(TextParagraphComponent, () => true);
