import { FormEvent, memo, useCallback, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { TextLarge } from "../../../styles/tagGlobals/TagText";
import { ContainerNewletter } from "./styles";

function SectionNewletterComponent() {
  const [inputEmail, setInputEmail] = useState('');

  const handledSendEmail = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputEmail('');
  }, []);

  return(
    <ContainerNewletter>
      <TextLarge>
        receba novidades da nossa área de produtos digitais.
      </TextLarge>
      <form onSubmit={(e) => handledSendEmail(e)}>
        <Input 
          placeholder="Digite seu e-mail"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.currentTarget.value)}
          inputStyle={{
            typeStyle: 'transparent'
          }}
        />
        <Button
          type="submit"
          buttonStyle={{
            typeStyle: "submit"
          }}
        >
          CADASTRAR
        </Button>
      </form>
    </ContainerNewletter>
  );
}

export const SectionNewletter = memo(SectionNewletterComponent, () => true);