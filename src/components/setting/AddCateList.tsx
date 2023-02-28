import React from 'react';
import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

interface AddCateListProps {
    children: React.ReactNode;
    addCclist?: () => Promise<void>;
    addCdclist?: () => Promise<void>;
    name: string;
}

const AddCateList = ({
    children,
    addCclist,
    addCdclist,
    name,
}: AddCateListProps) => {
    return (
        <Box onClick={addCclist ? addCclist : addCdclist}>
            <Plus>+</Plus>
            <Catelist>
                <ItemName>{children}</ItemName>
            </Catelist>
        </Box>
    );
};

const Box = styled.li`
    display: flex;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0 10px;
    padding: 0px 16px;
`;

const Plus = styled.button`
    width: 16px;
    height: 16px;
    background: #72c54a;
    border-radius: 50%;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Catelist = styled.div`
    width: 100%;
    max-width: 330px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.gray200};
    padding: 10px 0px;
    button {
        border: none;
        background: transparent;
        outline: none;
    }
`;

const ItemName = styled.span`
    color: ${colors.gray900};
    font: ${fonts.score15Regular};
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default AddCateList;
