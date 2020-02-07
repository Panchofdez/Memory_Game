import React,{Component} from 'react';
import './App.css';
import Card from './Card';
import Navbar from './Navbar';
const CardState = {
			HIDING:0,
			SHOWING:1,
			MATCHING:2
		};

class App extends Component {
	constructor(props){
		super(props);
		
		let cards =[
			{id:0,cardState: CardState.HIDING,backgroundColor:'red'},
			{id:1,cardState: CardState.HIDING,backgroundColor:'red'},
			{id:2,cardState: CardState.HIDING,backgroundColor:'navy'},
			{id:3,cardState: CardState.HIDING,backgroundColor:'navy'},
			{id:4,cardState: CardState.HIDING,backgroundColor:'green'},
			{id:5,cardState: CardState.HIDING,backgroundColor:'green'},
			{id:6,cardState: CardState.HIDING,backgroundColor:'yellow'},
			{id:7,cardState: CardState.HIDING,backgroundColor:'yellow'},
			{id:8,cardState: CardState.HIDING,backgroundColor:'black'},
			{id:9,cardState: CardState.HIDING,backgroundColor:'black'},
			{id:10,cardState: CardState.HIDING,backgroundColor:'purple'},
			{id:11,cardState: CardState.HIDING,backgroundColor:'purple'},
			{id:12,cardState: CardState.HIDING,backgroundColor:'pink'},
			{id:13,cardState: CardState.HIDING,backgroundColor:'pink'},
			{id:14,cardState: CardState.HIDING,backgroundColor:'lightskyblue'},
			{id:15,cardState: CardState.HIDING,backgroundColor:'lightskyblue'},
		];
		this.state = {cards:this.shuffle(cards)};
		this.shuffle=this.shuffle.bind(this);
		this.reset=this.reset.bind(this);
		this.showColor=this.showColor.bind(this);
		this.updateGame=this.updateGame.bind(this);
	}
	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}
	reset(){
		const cardsReset=this.state.cards.map((card)=>{
			card.cardState=0;
			return card
			
		})
		this.setState({cards:this.shuffle(cardsReset)});
	}
	showColor(id){
		const updated = this.state.cards.map((card)=>{
			if (card.id===id && card.cardState !== 2){
				card.cardState=CardState.SHOWING;
				
			}
			return card;
		})
		this.setState({cards:updated},()=>{
			this.updateGame(updated);
		})
	}
	updateGame(updated){
		const clicked = updated.filter(card => card.cardState===1);
		if(clicked.length===2){
			if(clicked[0].backgroundColor===clicked[1].backgroundColor){
				const updateWithMatch = updated.map(card=>{
					if (card.id === clicked[0].id || card.id === clicked[1].id){
						card.cardState = CardState.MATCHING;
					}
					return card;
				})
				setTimeout(()=>{
					this.setState({cards:updateWithMatch})
				},500);
				
			}else {
				const updateWithNoMatch = updated.map(card=>{
					if (card.id === clicked[0].id || card.id === clicked[1].id){
						card.cardState = CardState.HIDING;
					}
					return card;
				})
				setTimeout(()=>{
					this.setState({cards:updateWithNoMatch});
				},500);
				
			}
		}

	}
	
	
	render(){
		const cards = this.state.cards.map((card,index)=>(
			<Card key={index} {...card} showColor={this.showColor} />
		));
		return (
			<div className="App">
				<Navbar restartGame={this.reset}/>
				<div class="cardSquares">
					{cards}
				</div>
				
			</div>
  		);
	}
  
}

export default App;
