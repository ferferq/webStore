import { memo } from "react";
import { ProductSolutions } from "../../../components/ProductSolution";
import { TextLarge } from "../../../styles/tagGlobals/TagText";
import { ContainerSolutions } from "./styles";

const productList = [
  {
    id: 0,
    name: "Nome do Produto #1",
    description: "Descrição do produto #1",
    featureList: [
      {
        information: "Feature 1"
      },
      {
        information: "Feature 2"
      },
      {
        information: "Feature 3"
      },
    ]
  },
  {
    id: 1,
    name: "Nome do Produto #2",
    description: "Descrição do produto #2",
    featureList: [
      {
        information: "Feature 1"
      },
      {
        information: "Feature 2"
      },
      {
        information: "Feature 3"
      },
    ]
  },
  {
    id: 2,
    name: "Nome do Produto #3",
    description: "Descrição do produto #3",
    featureList: [
      {
        information: "Feature 1"
      },
      {
        information: "Feature 2"
      },
      {
        information: "Feature 3"
      },
    ]
  },
  {
    id: 3,
    name: "Nome do Produto #4",
    description: "Descrição do produto #4",
    featureList: [
      {
        information: "Feature 1"
      },
      {
        information: "Feature 2"
      },
      {
        information: "Feature 3"
      },
    ]
  },


]

function SectionSolutionsComponents() {
  return (
    <ContainerSolutions>
      <div>
        <div>
          <TextLarge>
            {`//`}
          </TextLarge>
          <TextLarge>
            Nossas soluções
          </TextLarge>
        </div>
        <section>
          {
            productList.map(product =>
              <ProductSolutions key={product.id} product={product} />
            )
          }
        </section>
      </div>
    </ContainerSolutions>
  )
}

export const SectionSolutions = memo(SectionSolutionsComponents, () => true);