import { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../../App';
import './Toggle.css'

function Toggle() {
    const { theme , toggleTheme } = useContext(ThemeContext);
    return (
        <div className="toggle-container">
            <h5 className="toggle-text">{theme==="Light" ? "DARK" : "LIGHT"}</h5>
            {/* <input type="checkbox" id='toggle' onChange={toggleTheme} />
            <label htmlFor='toggle' ></label> */}
            <ReactSwitch onChange={toggleTheme} checked={theme==="Light"} />
        </div>
    )
}

export default Toggle;



