import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './searchChampions.css';

const SearchChampions = (props) => {

  const [data, setData] = useState({"data": 'nothing'});
  const [query, setQuery] = useState({championName: '', tag: ''});
  const [buttonFilters, setbuttonFilters] = useState(
    {buttons:
      [{
        pos: 0,
        name: 'Mage',
        status: 1
      },{
        pos: 1,
        name: 'Fighter',
        status: 1
      },{
        pos: 2,
        name: 'Assassin',
        status: 1
      },{
        pos: 3,
        name: 'Tank',
        status: 1
      },{
        pos: 4,
        name: 'Support',
        status: 1
      },{
        pos: 5,
        name: 'Marksman',
        status: 1
      }]
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://lolstatics.test/lol_json_champions?champion=${query.championName}&tag=${query.tag}`,
      );
      setData(result.data);
    };
    fetchData();
  }, [query]);

  function tagFilterButton(event, i, buttonFilters){
    let buttonText = event.target.innerHTML;
    let copyB = buttonFilters;
    let initialStatus = copyB.buttons[i].status;
    let newStatus;

    copyB.buttons.forEach(function(item, index) {
      if(initialStatus === 2){
        copyB.buttons[index].status = 1;      
      }else{
        if (index !== i) {
          copyB.buttons[index].status = 0;
        }
      }
    });

    (initialStatus === 2) ? newStatus = 1 : newStatus = 2;
    copyB.buttons[i].status = newStatus;

    
    setbuttonFilters(copyB);

    if(query.tag === buttonText){
      buttonText = '';
    }
    setQuery({...query, tag: buttonText});
  }
 
  return (
    <div className="searchChampions container">

      <div className="row">
       <div className="col s12">
          <input
            type="text"
            value={query.championName}
            onChange={event => setQuery({...query, championName: event.target.value})}
            placeholder="Search"
          />
        </div>
       </div>

        <div className="containerFilterButtons row">
          <div className="col s12">
            {buttonFilters.buttons.map((item, i) => (
              <span className={"filterButton center-align filterButton-" + i} key={i}>
                <button disabled={item.status ? '' : 'disabled'} className="" onClick={event => tagFilterButton(event, i, buttonFilters)}>
                  {item.name}
                </button>
              </span>
            ))}
          </div>

        </div>

      <div className="row">
        { 
          Object.keys(data).map((item, i) => (
            <div className="champion-input col s4 m1 l1" key={i}>
              <a href={'champion/' + data[item]["id"]}><img style={{width:"100%"}} alt={data[item]["id"]} src={data[item]["imgSrc"]} /></a>
            </div>
          ))
        }  
      </div>

    </div>

  );


};



	
export default SearchChampions;