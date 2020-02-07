import React,{Component} from 'react';
import './Card.css';

class Card extends Component {
	render(){
		const {id,cardState,backgroundColor,showColor} = this.props;
		const bgColor= () =>{
			if(cardState===0){
				return 'grey';
			} else {
				return backgroundColor;
			}
		} 
		const cardStyle = {
			backgroundColor:bgColor(),
			height:'160px',
			width:'160px',
			display:'inline-block',
			margin:'10px',
			borderRadius:'20px'
		}
		
		return(
			<div style={cardStyle} onClick={()=>showColor(id)}></div>
		)
	
	}
}


export default Card;