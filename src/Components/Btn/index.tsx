import { memo, ReactNode, MouseEvent } from 'react';
import styled from 'styled-components';

interface BtnProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset'; // Ajuste aqui
}

const StyledButton = styled.button`
    background-color: var(--laranja-padrao);
    color: var(--branco);
    font-family: var(--fonte-principal);
    border: none;
    width: 100%;
    height: 45px;
    font-size: 20px;
    border-radius: 10px;
    transition: 0.5s ease;

    &:hover {
        transform: scale(1.005);
        cursor: pointer;
        background-color: #02075d;
    }

`;

const Btn = memo((props: BtnProps) => {
    return (
        <StyledButton onClick={props.onClick}>
            {props.children}
        </StyledButton>
    );
});

export default Btn;
