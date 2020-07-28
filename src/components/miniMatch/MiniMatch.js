
import React from 'react';
import './minimatch.css';

const MiniMatch = (props) => {
	
	//TODO: MOVE TO BACK;
	const itemUrl = 'http://ddragon.leagueoflegends.com/cdn/10.12.1/img/item/';

	function winOrLose(win){
		if(win){
			return <div className="victory">Victory</div>;
		}else{
			return <div className="defeat">Defeat</div>;
		}
	}

	function getMatchDate(matchDate){
		var date = new Date(matchDate).toISOString();
		return date;
	}

	return (
		<div className="containerMiniMatch">
			{props.matchList.map((item, i) => (
				<div className={`miniMatchContainerInn row match-${i}`} key={i}>
					
					<div className="row matchTime right-align">
						<div className="col s12">{getMatchDate(item.generalData.gameCreation)}</div>
					</div>
					
					<div className="miniMatchData valign-wrapper">
						<div className="col s4 m2 l2">
							<img className="summonerChampionImage" alt={props.championsMap[item.summonerData.championId].imgSrc} src={props.championsMap[item.summonerData.championId].imgSrc} />
						</div>

						<div className="col s4 m2 l2">
							{winOrLose(item.summonerData.stats.win)}
							<div className="lane">{item.gameData.lane !== "NONE" &&  item.gameData.lane}</div>
							<div className="gameMode">{item.generalData.gameMode}</div>
						</div>

						<div className="col s4 m2 l2">
							<div className="kda">
								{item.summonerData.stats.kills}/
								{item.summonerData.stats.deaths}/
								{item.summonerData.stats.assists}
							</div>
						</div>
						
						<div className="col s6 m2 l2">

							<div className="containerItems">
								<span className="itemSlot">{item.summonerData.stats.item0 !== 0 && <img alt={item.summonerData.stats.item0} className="itemImage" src={`${itemUrl + item.summonerData.stats.item0}.png`} />}</span>
								<span className="itemSlot">{item.summonerData.stats.item1 !== 0 && <img alt={item.summonerData.stats.item1} className="itemImage" src={`${itemUrl + item.summonerData.stats.item1}.png`} />}</span>
								<span className="itemSlot">{item.summonerData.stats.item2 !== 0 && <img alt={item.summonerData.stats.item2} className="itemImage" src={`${itemUrl + item.summonerData.stats.item2}.png`} />}</span>
								<span className="itemSlot">{item.summonerData.stats.item3 !== 0 && <img alt={item.summonerData.stats.item3} className="itemImage" src={`${itemUrl + item.summonerData.stats.item3}.png`} />}</span>
								<span className="itemSlot">{item.summonerData.stats.item4 !== 0 && <img alt={item.summonerData.stats.item4} className="itemImage" src={`${itemUrl + item.summonerData.stats.item4}.png`} />}</span>
								<span className="itemSlot">{item.summonerData.stats.item5 !== 0 && <img alt={item.summonerData.stats.item5} className="itemImage" src={`${itemUrl + item.summonerData.stats.item5}.png`} />}</span>									
							</div>
				
						</div>

						<div className="col s6 m4 l4 right-align">

							<div className="containerMatch">
								{item.generalData.participantIdentities.map((itemPI, iPI) => (
									<span className="championSlot" key={iPI}>											
										<img className="matchChampionImage" alt={props.championsMap[item.generalData.participantIdentities[iPI].player.summonerName]} src={props.championsMap[item.generalData.participants[iPI].championId].imgSrc} title={itemPI.player.summonerName} />
									</span>
								))}
							</div>
						
						</div>

					</div>

				</div>
			))}
			
		</div>
			
	);
};
	
export default MiniMatch;