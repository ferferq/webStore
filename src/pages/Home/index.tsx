import { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Root } from "./styles";
import { SectionBanner } from "./SectionBanner";
import { SectionSolutions } from "./SectionSolutions";
import { SectionAbout } from "./SectionAbout";
import { SectionContact } from "./SectionContact";
import { SectionNewletter } from "./SectionNewletter";

interface parmsProps {
  element: string;
}

export function Home() {
  const refSolutions = useRef<HTMLElement>(null);
  const refAbout = useRef<HTMLElement>(null);
  const parms = useParams() as parmsProps;

  const scrollToRef = useCallback((offSetTop: number) => 
   window.scrollTo(0, offSetTop)
  , []); 

  useEffect(() => {
    if (parms) {
      const url = window.location.href;
      const hasElement = url.includes(':element=');
      if (refSolutions)
       {
         console.log(refSolutions)
       }
      if (hasElement) {
        const [urlWithoutElement, element] = url.split(':element=');
        window.history.pushState({}, '', urlWithoutElement);
        switch (element) {
          case refSolutions.current?.title: {
            if (refSolutions && refSolutions.current) {
              scrollToRef(refSolutions.current.offsetTop);
            }
            break;
          }
          case refAbout.current?.title: {
            if (refAbout && refAbout.current)
            scrollToRef(refAbout.current.offsetTop);
            break;
          }
          default:
            break;
        }
      } else {
        scrollToRef(0);
      }
    }
  }, [parms, scrollToRef]);

  return (
    <Root>
      <SectionBanner />
      <section ref={refSolutions} title="solutions">
        <SectionSolutions />
      </section>
      <section ref={refAbout} title="about">
        <SectionAbout />
      </section>
      <SectionContact />
      <SectionNewletter />
    </Root>
  )
}