import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './champion.css';
import { useParams } from "react-router-dom";
import Spells from '../spells/Spells';
import Skins from '../skins/Skins';
import Stats from '../stats/Stats';

const Champion = (props) => {
  let { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [champion, setChampion] = useState(
    {
      'id': '',
      'key': '',
      'name': '',
      'title': '',
      'skins': [{
        'id': 0,
        'name': '',
      }],
      'tags': []
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://lolstatics.test/lol_json_champion/${id}`,
      );
      setChampion(result.data);
      setIsLoaded(true);
      console.log(result.data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="searchChampions container">

        {                
          !isLoaded && 
          <div className="center">Loading....</div>
        }

        {                
          isLoaded &&  
            <div>
              
              <div className="row">
                <h1 className="heroTitle">
                  <span className="heroIconImage"><img alt="hero icon" src={"http://ddragon.leagueoflegends.com/cdn/"+champion.version+"/img/champion/"+champion.id+".png"} /></span>
                  {champion.name}
                </h1>

                {champion.tags.map((item, i) => (
                  <span className={"tags "+ item.toLowerCase()} key={i}>            
                    {item}
                  </span>
                ))}

                <h5 className="subtitle">
                  {champion.title}      
                </h5>
                
                <p>{champion.lore}</p>
              </div>

              <div className="stats row">
                <h5>Stats</h5>
                <Stats 
                  champion={champion}
                />
              </div>
              
              <div className="row">
                <Spells 
                  passive={champion.passive}
                  spells={champion.spells}
                />
              </div>

              <Skins 
                skins={champion.skins}
                id={champion.id}
                />
          
            </div>
        } 

      </div>
    </div>
  );

};
	
export default Champion;