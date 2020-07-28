import React from 'react';
import './spells.css';

const Spells = (props) => {

	return (
		<div>
			<h5>Spells</h5>
			
			<div className={"col s4 m2 l2 spell-00"}>
				<img className="skillImage" alt={props.passive.image.full} src={"http://ddragon.leagueoflegends.com/cdn/10.12.1/img/passive/"+ props.passive.image.full} />         
				<span className={"spellPopup spell-00"}>
					<h5>{props.passive.name}</h5>
					<div>{props.passive.description}</div>
				</span>
			</div>

			{props.spells.map((item, i) => (
				<div key={i}>
					<div className={"col s4 m2 l2 spell-"+item.id}>
						<img className="skillImage" alt={item.image.full} src={"http://ddragon.leagueoflegends.com/cdn/10.12.1/img/spell/"+ item.image.full} />         
						<span className={"spellPopup spell-"+i}>
							<h5>{item.name}</h5>
							<div>{item.description}</div>
							<div><b>Cooldown:</b> {item.cooldownBurn}</div>
							<div><b>Mana cost:</b> {item.costBurn}</div>
							<div><b>Range:</b> {item.rangeBurn}</div>
						</span>
					</div>
				</div>
			))}


		</div>
	);
};
	
export default Spells;