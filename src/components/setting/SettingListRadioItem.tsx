import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

interface SettingListRadioItemProps {
    title: string;
    value: string;
    radioValue: string;
    checkRadio: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SettingRadioItem = ({
    title,
    value,
    radioValue,
    checkRadio,
}: SettingListRadioItemProps) => {
    return (
        <label htmlFor={value}>
            <Box>
                <ItemName>{title}</ItemName>
                <input
                    type='radio'
                    name='listtype'
                    id={value}
                    checked={value === radioValue}
                    onChange={checkRadio}
                />
            </Box>
        </label>
    );
};

const Box = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 58px;
    border-bottom: 1px solid ${colors.gray200};
    cursor: pointer;
    [type='radio'] {
        vertical-align: middle;
        appearance: none;
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }
    [type='radio']:checked {
        border: 6px solid ${colors.primary};
    }
`;
const ItemName = styled.span`
    color: ${colors.gray900};
    font: ${fonts.score15Regular};
`;

export default SettingRadioItem;
