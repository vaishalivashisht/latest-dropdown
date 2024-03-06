
import React, { useState } from 'react'; 
import './dropdown.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function App() { 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [value, setValue] = useState(''); 
  
  const list = ['React', 'Js', 'Java', 'Html'];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }; 

  const handleClick = (e) => { 
    setValue(e.target.textContent);
    setDropdownOpen(false); // Optionally close the dropdown after a selection 
  };

  const closeDropdown = (event) => {
    if (!event.target.matches('.dropbtn')) {
      setDropdownOpen(false);  
    }  
  };  

  return ( 
    <div className="App" onClick={closeDropdown}>
      <h2> THE DROPDOWN </h2> 
      <h3>{value}</h3> {/* Update this line to show the selected value */}
  
      <div className="dropdown">
        <button onMouseOver={toggleDropdown} className="dropbtn"> Dropdown </button>
        <span className='icon-arrow'><FontAwesomeIcon icon={faChevronDown} /></span>
        <div id="myDropdown" className={dropdownOpen ? "dropdown-content show" : "dropdown-content"}>
          {list.map((item, index) => {
            // Add the onClick handler to each dropdown item
            return (
              <a href="#!" key={index} onClick={handleClick}>
                {item} 
              </a>
            );
          })}
        </div> 
      </div>
    </div>
  );
} 

export default App;
