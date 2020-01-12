import React,{Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
	render(){
		const {restartGame} = this.props;
		return(
			<nav>
				<h2>Memory Game</h2>
				<button onClick={()=>restartGame()}>New Game</button>
			</nav>
		)
	}
}


export default Navbar;