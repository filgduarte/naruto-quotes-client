import { useState } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';

export function App() {
  const [quoteState, setQuoteState] = useState({ quote: 'ok', character: 'speaker' });

  const onUpdate = async () => {
    const quote = await getQuote();

    setQuoteState(quote);
  };

  /* {...quoteState} é igual a quote={quoteState.quote} character={quoteState.character} */
  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />
      <NarutoImg src={narutoImg} alt="Naruto piscando um olho e sorrindo estende a mão esquerda em sua direção segurando uma kunai. Ele está vestindo um casaco laranja e preto." />
    </Content>
  )
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  width: 50vw;
  align-self: flex-end;
`;