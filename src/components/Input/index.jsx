import { Container, InputText }  from './styles'
import { useTheme } from 'styled-components';

const Input = ({ name, placeholder, value, handleChange }) => {

    const theme = useTheme();

    return ( 
        <Container>
            <InputText name={name} placeholder={placeholder} value={value} color={theme.colors.gray} onChange={handleChange} />
        </Container>
    );
};

export default Input;
