import styled from 'styled-components';

export const Container = styled.div`
    width: 288px;
    height: 48px;
    left: 74px;
    top: 74px;
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    
`;

export const InputText = styled.input`
    padding: 5px;
    width: 280px;
    height: 40px;
    border: 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.theme.colors.black};
    align-items: center;
    justify-content: center;
`;