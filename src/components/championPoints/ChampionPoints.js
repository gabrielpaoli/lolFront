
import React from 'react';
import './championPoints.css';

const ChampionPoints = (props) => {
	
	return (
		<div className="championPoints">
			{console.log(props.championPoints)}
			{props.championPoints.map((item, i) => (
				<div className="championPointsSlot" key={i}>											
					<img className="championPointsSlotImage" src={props.championsMap[item.championId].imgSrc} />

					<div>
						<div>{props.championsMap[item.championId].name}</div>
						<div>Level {item.championLevel}</div>
					</div>
				
					<div>
						<div>{item.championPoints}</div>
						<div>POINTS</div>
					</div>
				
				</div>

			))}


		</div>
	);
};
	
export default ChampionPoints;