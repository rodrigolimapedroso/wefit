import styled from 'styled-components';

export const ContainerBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const Container = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`;

export const ListData = styled.div`
    display: flex; 
    width: 352px;
    height: 32px;
    margin: 8px 16px;
    background: ${props => props.theme.colors.lightGray};
    border-radius: 2px;
    align-items: center;
`;


export const ListDataDesc = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.theme.colors.lightBlack};
    margin: 0 16px;
    width: 90%;
`;

export const ListDataFunc = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.theme.colors.lightBlack};
    width: 10%;
`;

export const ListNotData = styled.div`
    width:100%;
    height: 300px;
    align-items: center;
    justify-content: center;

`;

export const ContainerBox = styled.div`
    flex-direction: column;
    flex: 1;
    height: 50px;
`;

export const ContainerBox1 = styled.div`
    display: flex;
    margin: 24px;
    justify-content: center;
    align-items: center;
`;

export const ContainerBox1Input = styled.div``;

export const ContainerBox1Button = styled.div`
    padding-left: 16px;
`;

export const ContainerBox2 = styled.div`
    flex-direction: column;
    flex: 1;
    margin-top: 24px;
`;

export const ListNotDataContent = styled.div`
    display: flex;
    height: 280px;
    margin: 24px;
    background: #F2F2F2;
    border: 1px dashed ${props => props.theme.colors.lightGray};
    boxsizing: border-box;
    justify-content: center;
    align-items: center;
`;