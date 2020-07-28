
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './summoner.css';
import MiniMatch from '../miniMatch/MiniMatch';
import RankedStats from '../rankedStats/RankedStats';
import SummonerProfileData from '../summonerProfileData/SummonerProfileData';
import ChampionPoints from '../championPoints/ChampionPoints';

const Summoner = (props) => {
	let { accountId, region } = useParams();
  const [matchList, setMatchList] = useState(false);
	const [championsMap, setChampionsMap] = useState(false);
	const [summoner, setSummoner] = useState(false);
	const [championPoints, setChampionPoints] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
    const fetchData = async () => {
			
			const championsPerId = await axios(
				`http://lolstatics.test/lol_json_champions_per_id`,
			);
			setChampionsMap(championsPerId.data);

			const summonerGeneralInfo = await axios(
				`http://lolstatics.test/lol_json_summoner_per_id/${region}/${accountId}/`,
			);
			setSummoner(summonerGeneralInfo.data);

			const championPoints = await axios(
				`http://lolstatics.test/lol_json_champion_mastery/${region}/${accountId}/`,
			);
			setChampionPoints(championPoints.data);

			const matchList = await axios(
				`http://lolstatics.test/lol_json_matchlists/${accountId}`,
			);
			setMatchList(matchList.data);


			setIsLoaded(true);
    };
    fetchData();
	}, [accountId]);
	
	return (
		<div className="summoner container">
			{                
				!isLoaded && 
				<div className="center">Loading....</div>
			}
			{                
				isLoaded &&  
					<div className="row">

						<div className="containerSummonerProfile">
							<SummonerProfileData 
								summoner={summoner}
							/>
						</div>

						<div className="containerSummonerData">
							<div className="containerRankedStats">
								<RankedStats 
									summoner={summoner}
								/>
							</div>
							<div className="containerMiniMatch">
								<MiniMatch 
									matchList={matchList}
									championsMap={championsMap}
								/>
							</div>
							<div className="containerOtherInfo">
								<ChampionPoints 
									championPoints={championPoints}
									championsMap={championsMap}
								/>
							</div>
						</div>	

					</div>
			}
		</div>
	);
};
	
export default Summoner;