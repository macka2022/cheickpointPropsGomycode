import CardGroup from 'react-bootstrap/CardGroup';
import players from '../src/Players';
import  Player from "../src/Composent/Player"
const PlayerList = () => {
    return ( 
        <CardGroup>
        {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
        </CardGroup>
     );
}
 
export default PlayerList;