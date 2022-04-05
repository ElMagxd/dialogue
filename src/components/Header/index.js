import './styles.css';
import Theme from './Theme';
import UserInfo from './UserInfo';

const Header = () => (
  <div className='header'>
	  <UserInfo/>
    <Theme/>
  </div>
)

export default Header
