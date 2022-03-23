import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
	return (
		<>
			<div className="container d-flex justify-content-center">
				<div className="numberContainer d-flex justify-content-center p-4 bg-dark text-light rounded w-100">
					<div className="iconContainer px-3 display-2">
						<FontAwesomeIcon icon={faClock} />
					</div>
					<div className="digit px-3 mx-3 display-2 border border-light rounded">
						{props.digitSix % 10}
					</div>
					<div className="digit px-3 mx-3 display-2 border border-light rounded">
						{props.digitFive % 10}
					</div>
					<div className="digit px-3 mx-3 display-2 border border-light rounded">
						{props.digitFour % 10}
					</div>
					<div className="digit px-3 mx-3 display-2 border border-light rounded">
						{props.digitThree % 10}
					</div>
					<div className="digit px-3 mx-3 display-2 border border-light rounded">
						{props.digitTwo % 10}
					</div>
					<div className="digit px-3 mx-3 display-2 border border-light rounded">
						{props.digitOne % 10}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
