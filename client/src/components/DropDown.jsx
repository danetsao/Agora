import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDown() {
  return (
    <DropdownButton className='dropdownn' id="dropdown-basic-button" title="≡">
      <Dropdown.Item className='lol' href="/">Home</Dropdown.Item>
      <Dropdown.Item className='lol' href="/all">Marketplace</Dropdown.Item>
      <Dropdown.Item className='lol' href="/add">Add a User</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropDown;