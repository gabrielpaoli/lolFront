import React, { useState, useEffect } from 'react';
import './stats.css';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

const Stats = (props) => {
	
	const [dataChart, setDataChart] = useState(
    [
      {
        data: {
          attack: 0.0,
          defense: 0.0,
          difficulty: 0.0,
          magic: 0.0
        },
        meta: { color: 'blue' }
      }
    ]
  );
  
  const captions = {
    attack: 'Attack',
    defense: 'Defense',
    difficulty: 'Difficulty',
    magic: 'Magic'
	};

	function createDataChart(champion){
    let attack = champion.info.attack / 10;
    let defense = champion.info.defense / 10;
    let difficulty = champion.info.difficulty / 10;
    let magic = champion.info.magic / 10;

    setDataChart([
      {
        data: {
          attack: attack,
          defense: defense,
          difficulty: difficulty,
          magic: magic
        },
        meta: { color: 'blue' }
      }
    ])
	}

	useEffect(() => {
    createDataChart(props.champion);
  }, [props.champion]);

	return (
		<div>
			<div className="stats row">
				<div className="col s12 m4 l4">
					<RadarChart
						captions={captions}
						data={dataChart}
						size={200}
					/>
				</div>
				<div className="col s12 m4 l4">
					<div><b>Armor: </b> {props.champion.stats.armor}</div>
					<div><b>Armor /level: </b> {props.champion.stats.armorperlevel}</div>
					<div><b>Attack damage: </b> {props.champion.stats.attackdamage}</div>
					<div><b>Attack damage /lvl: </b> {props.champion.stats.attackdamageperlevel}</div>
					<div><b>Attack range: </b> {props.champion.stats.attackrange}</div>
					<div><b>Attack speed: </b> {props.champion.stats.attackspeed}</div>
					<div><b>Attack speed /lvl: </b> {props.champion.stats.attackspeedperlevel}</div>
					<div><b>Critical: </b> {props.champion.stats.crit}</div>
					<div><b>Critical /lvl: </b> {props.champion.stats.critperlevel}</div>
					<div><b>Hp: </b> {props.champion.stats.hp}</div>
				</div>
				<div className="col s12 m4 l4">
					<div><b>Hp /lvl: </b> {props.champion.stats.hpperlevel}</div>
					<div><b>Hp regen: </b> {props.champion.stats.hpregen}</div>
					<div><b>Hp regen /lvl: </b> {props.champion.stats.hpregenperlevel}</div>
					<div><b>Move speed: </b> {props.champion.stats.movespeed}</div>
					<div><b>Mp: </b> {props.champion.stats.mp}</div>
					<div><b>Mp /lvl: </b> {props.champion.stats.mpperlevel}</div>
					<div><b>Mp regen: </b> {props.champion.stats.mpregen}</div>
					<div><b>Mp regen /lvl: </b> {props.champion.stats.mpregenperlevel}</div>
					<div><b>Spell block: </b> {props.champion.stats.spellblock}</div>
					<div><b>Spell block /lvl: </b> {props.champion.stats.spellblockperlevel}</div>
				</div>

			</div>
		</div>
	);
};
	
export default Stats;