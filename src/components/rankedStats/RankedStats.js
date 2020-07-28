
import React from 'react';
import './rankedStats.css';

const RankedStats = (props) => {
	
	return (
		<div className="rankedStats">
			{props.summoner.league.map((item, i) => (
				<div className="" key={i}>
					<div>{item.queueType}</div>
					<div className="rankedStatsInn" key={i}>
						<div className="imageRankedStats">
							<img src={`${props.summoner.baseUrl + '/tier-icons/tier-icons/' + item.tier.toLowerCase() + '_' + item.rank.toLowerCase()}.png`} />
						</div>
						<div className="infoRankedStats">
							<h6>{item.tier} {item.rank}</h6>
							<div>{item.leaguePoints} LP</div>

							<div>Win: {item.wins}</div>
							<div>Losses: {item.losses}</div>
						</div>
					</div>

				</div>
			))}
			
		</div>
	);
};
	
export default RankedStats;