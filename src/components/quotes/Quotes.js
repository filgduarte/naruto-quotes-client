import styled from 'styled-components'; // Para estilização de componentes
import { string, func } from 'prop-types'; // Para validação de dados
import { Button } from '../../components';

export const Quotes = ({ quote, character, onUpdate, myStyle }) => {
    return (
        <Wrapper>
            <Quote style={myStyle}>{quote}</Quote> 
            <Character style={myStyle}>- {character}</Character>
            <Button onClick={onUpdate}>Quote no Jutsu</Button>
        </Wrapper>
    );
};

Quotes.propTypes = {
    quote: string,
    character: string,
    onUpdate: func,
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Quote = styled.p`
    font-size: 2rem;
    margin: 0;
    transition: opacity .3s ease-in-out;
`;

const Character = styled(Quote)`
    margin-bottom: 50px;
    width: 100%;
    text-align: right;
    transition: opacity .3s ease-in-out;
`;