import { RootState } from './../store/store';
import { useSelector } from 'react-redux';

const GetMemberNumber = (): number => {
  const userInfo = useSelector((state: RootState) => state.user);
  const memberNumber = userInfo.memberSeq;
  return memberNumber;
};

export default GetMemberNumber;
