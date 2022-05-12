import styled from 'styled-components'; // Para estilização de componentes
import { string, func } from 'prop-types'; // Para validação de dados
import { Button } from '../../components';

export const Quotes = ({ quote, character, onUpdate }) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote> 
            <Character>- {character}</Character>
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
`;

const Character = styled(Quote)`
    margin-bottom: 50px;
    text-align: right;
`;