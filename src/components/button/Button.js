import styled from 'styled-components';

export const Button = styled.button`
    background-color: #DC872C;
    color: #FFF;
    border: none;
    border-radius: 3px;
    font-size: 1.5rem;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: 3px 3px #333;
    transition: background-color .3s ease;

    &:hover {
        background-color: #a40000;
    }
`;