import * as React from "react";
import { Link } from "react-router-dom";

import {Container, Section} from "../../../reusable";
import Icon from "../../../reusable/FontAwesomeIcon";

const Style = require("./Games.scss");


const Games = () => (
    <Section gray className={Style.games}>
        <Container>
            <h2 className="text-center">Games</h2>
            <div className={Style.gamesList}>
                <Link to="/games/dice" className={Style.gamesListEntry + ' ' + Style.gamesListEntry_enabled}>
                        <Icon className={Style.gamesListEntry__img} size="8x" icon="dice"/>
                        <h5>Classic Dice</h5>
                </Link>
                <div className={Style.gamesListEntry + ' ' + Style.gamesListEntry_disabled}>
                    <Icon className={Style.gamesListEntry__img} size="8x" icon="question"/>
                    <h5>More Coming Soon</h5>
                </div>
            </div>
        </Container>
    </Section>
);

export default Games;
