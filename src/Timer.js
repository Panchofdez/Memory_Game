import React, {Component} from 'react';

var gameTimer= null;

class Timer extends Component {
	constructor(props){
		super(props);
		this.state={time:0, bestTime:null};
		this.handleGameTimer=this.handleGameTimer.bind(this);
		this.restartGame=this.restartGame.bind(this);
		
	}
	handleGameTimer(s){
		if(s=== 'start'){
			gameTimer = setInterval(()=>this.setState({time:this.state.time + 1}),1000);
			this.props.startGame(true);
		}else if (s==='end'){
			clearInterval(gameTimer);	
		}
		
	}
	restartGame(){
		this.props.resetGame();
		if (this.state.time<this.state.bestTime || this.state.bestTime === null){
			this.setState({time:0,bestTime:this.state.time});
		}else{
			this.setState({time:0});
		}
		
	}
	render(){
		const {correctPairs, gameStart} = this.props;
		const {time, bestTime} = this.state;
		if(correctPairs===8 || gameStart === false){
			this.handleGameTimer('end');
			
		}
		return (
			<div>
				{gameStart===false && correctPairs !==8 && (<button onClick={()=>this.handleGameTimer('start')}>Start Game</button>)}
				<button onClick={()=>this.restartGame()}>New Game</button>
				<h1>Time: {time} seconds </h1>
				{correctPairs===8 && <h2>Congratulations you did it!!</h2>}
				{bestTime && <h1>Best Time: {bestTime} seconds</h1>}
			</div>

		);
	}
}


export default Timer;