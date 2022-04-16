import Theme from './Theme'
import UserInfo from './UserInfo'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
  padding: 20px;
`;

const Header: React.FC = () => (
  <HeaderWrapper className='header'>
	  <UserInfo/>
    <Theme/>
  </HeaderWrapper>
)

export default Header
