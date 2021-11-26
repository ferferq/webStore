import { memo } from "react";
import { TextParagraph } from "../../styles/tagGlobals/TagText";
import { Button } from "../Button";
import { ContainerProductSolutions } from "./styles";

interface FeatureProps {
  information: string;
}

interface ProductProps {
  id: number;
  image?: string;
  name: string;
  description: string;
  featureList: FeatureProps[];
}

interface ProductSolutionsProps {
  product: ProductProps;
}

function ProductSolutionsComponent({
  product: {
    id,
    image,
    name,
    description,
    featureList
  }
} : ProductSolutionsProps) {
  return (
    <ContainerProductSolutions>
      <div>
        {
          image ? 
          <img src={image} alt={`Imagem da solução ${name}`} loading="lazy" />
          :
          <p>
            P{id + 1}
          </p>
        }
      </div>
      <section>
        <TextParagraph>
          {name}
        </TextParagraph>
        <strong>
          {description}
        </strong>
        <ul>
          {
            featureList.map(feature => {
              return <li key={feature.information}>{feature.information}</li>
            })
          }
        </ul>
        <Button 
          buttonStyle={{
            typeStyle: "green"
          }}
        >
          Ver solução
        </Button>
      </section>
    </ContainerProductSolutions>
  )
}

export const ProductSolutions = memo(ProductSolutionsComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
})