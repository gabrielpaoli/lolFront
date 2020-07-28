
import React from 'react';
import './summonerProfileData.css';

const SummonerProfileData = (props) => {

	const profileIconUrl = 'http://ddragon.leagueoflegends.com/cdn/10.13.1/img/profileicon/';
	
	function getTierAndRank(summoner){
		if(typeof summoner.league[0] !== 'undefined'){
			return summoner.league[0].tier + ' ' + props.summoner.league[0].rank
		}
	}

	return (
		<div className="summonerProfileData">
			<img className="tier" src={`${profileIconUrl + props.summoner.generalInfo.profileIconId + '.png'}`} />
			<div>
				<div className="summonerName">
					{props.summoner.generalInfo.name}
				</div>
				<div>
					{
						getTierAndRank(props.summoner)
					}
				</div>
				<div>LVL: {props.summoner.generalInfo.summonerLevel}</div>
			</div>

		</div>
	);
};
	
export default SummonerProfileData;