
import React, { useState } from 'react';
import axios from 'axios';
import './searchsummoner.css';
import { Redirect } from 'react-router';

const SearchSummoner = (props) => {
	const [summoner, setSummoner] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
  const [queryS, setQueryS] = useState({region: 'LA2', name: ''});

	
	function searchSummoner(){
    const getSummonerData = async () => {
			const result = await axios(
				`http://lolstatics.test/lol_json_summoner_per_name/${queryS.region}/${queryS.name}`,
			);
			if(typeof result.data.status !== 'undefined'){
				alert('summoner not found');
			}else{
				setSummoner(result.data);
				setIsLoaded(true);
			}
			
		};
		getSummonerData();
	}

	return (
		<div className="searchSummoner">
			
			{isLoaded && <Redirect to={"/summoner/"+ summoner.region + "/" + summoner.accountId} />}


			<div className="searchSummonerInn">
				<select className="selectRegionSummoner"
					value={queryS.region}
					onChange={event => setQueryS({...queryS, region: event.target.value})}
				>
					<option value="BR1">BR1</option>
					<option value="EUN1">EUN1</option>
					<option value="EUW1">EUW1</option>
					<option value="JP1">JP1</option>
					<option value="KR">KR</option>
					<option value="LA1">LA1</option>
					<option value="LA2">LA2</option>
					<option value="NA1">NA1</option>
					<option value="OC1">OC1</option>
					<option value="RU">RU</option>
					<option value="TR1">TR1</option>
				</select>

				<input className="inputSummoner"
					type="text"
					value={queryS.name}
					onChange={event => setQueryS({...queryS, name: event.target.value})}
					placeholder="Player name"
				/>
				<i onClick={ searchSummoner } className="tyni material-icons">search</i>
			</div>
				

		</div>
	);
};
	
export default SearchSummoner;