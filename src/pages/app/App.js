import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';
import jutsuSound from '../../sounds/jutso.mp3';

const audio = new Audio(jutsuSound);

export function App() {
  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({ quote: 'loading quote...', character: 'loading character...' });

  const onUpdate = async () => {
    const quote = await getQuote();
    
    // Se o componente está montado...
    if (isMounted.current) {
      audio.play();
      setQuoteState(quote);
    }
  };

  useEffect(() => {
    onUpdate();
    
    return () => {
      isMounted.current = false;
    }
  }, []);

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