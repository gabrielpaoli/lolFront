import React from 'react';
import Slider from "react-slick";
import './skins.css';

//TODO: Slik generate some problems

const Skins = (props) => {
	
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div className="skins row">
		<h5>Skins</h5>
		<Slider {...settings}>
			{props.skins.map((item, i) => (
				<div className="skinCard" key={i}>            
					<img alt={item.name} width="100%" src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + props.id + "_"+item.num+".jpg"} />
					<div className="skinName">{item.name}</div>
				</div>
				))}
			</Slider>

		</div>
	);
};
	
export default Skins;