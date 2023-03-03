import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

interface WriteFormNumberProps {
    title: string;
    value: string;
    setValue: (value: string) => void;
}

const WriteFormNumber = ({ title, value, setValue }: WriteFormNumberProps) => {
    const changeEnteredNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const removeString = value.replace(/[^0-9]/g, '');
        setValue(Number(removeString).toLocaleString());
    };
    return (
        <Box>
            <FormTitle>{title}</FormTitle>
            <FormInput
                type='text'
                placeholder='입력하세요.'
                value={value}
                onChange={changeEnteredNumber}
            ></FormInput>
        </Box>
    );
};

const Box = styled.div`
    position: relative;
    display: flex;
    gap: 5%;
    width: 100%;
    height: 58px;
    padding: 20px 0;
    border-bottom: 1px solid ${colors.gray200};
`;

const FormTitle = styled.p`
    width: 25%;
    height: 100%;
    color: ${colors.gray700};
    font: ${fonts.score15Regular};
`;

const FormInput = styled.input`
    width: 70%;
    height: 100%;
    border: none;
    border-radius: 0;
    color: ${colors.gray700};
    font: ${fonts.score15Regular};
    &::placeholder {
        color: ${colors.placeholder};
    }
    &:focus {
        outline: none;
    }
`;

export default WriteFormNumber;
