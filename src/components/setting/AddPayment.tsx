import React from 'react';
import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';
import axios from 'axios';
import { useSelector } from 'react-redux';

interface AddPaymentProps {
    children: React.ReactNode;
    name: string | undefined;
    fetchData: (name: string | undefined) => void;
}
const AddPayment = ({ children, name, fetchData }: AddPaymentProps) => {
    // const email = useSelector((state) => state.user.email);
    const typeName = (name: string | undefined) => {
        switch (name) {
            case '카드':
                return '1';
            case '은행':
                return '2';
            case '현금':
                return '3';
        }
    };

    const addP = async () => {
        let paymentname = prompt('추가할 결제수단을 입력하세요');
        let body = {
            type: typeName(name),
            payment: paymentname,
        };

        try {
            const res = await axios.post(
                `http://haeji.mawani.kro.kr:8585/api/payment/add/user1@email.com`,
                body
            );
            if (res.data.status) {
                alert('결제수단 추가 성공');
                fetchData(name);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box>
            <Plus
                onClick={() => {
                    addP();
                }}
            >
                +
            </Plus>
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
export default AddPayment;
