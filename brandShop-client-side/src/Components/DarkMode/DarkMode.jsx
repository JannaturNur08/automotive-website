
import SunSvg from './Sun.svg';
import MoonSvg from './Moon.svg';
import "./DarkMode.css";

const DarkMode = () => {

    const setDarkTheme = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
    }
    const setLightTheme = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
    }

    const toggleTheme = e => {
        if(e.target.checked) {
            setDarkTheme();
        }
        else {
            setLightTheme();
        }
    }
	

	return (
		<div className="dark_mode">
			<input
				className="dark_mode_input"
				type="checkbox"
				id="darkmode-toggle"
                onChange={toggleTheme}
			/>
			
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <img src={SunSvg} alt=""  width={20} className=''/>
				<img src={MoonSvg} alt="" width={20} className=''/>
			</label>
            
		</div>
	);
};

export default DarkMode;
