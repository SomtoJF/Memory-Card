import Logo from "../Images/logo.png";
import "../Styles/Nav.sass";

const Nav = ({ score, highScore }) => {
	return (
		<nav id="navbar">
			<img src={Logo} alt="Logo" id="logo" />
			<ul>
				<li>{`Score: ${score}`} </li>
				<li>{`High Score: ${highScore}`} </li>
			</ul>
		</nav>
	);
};

export default Nav;
