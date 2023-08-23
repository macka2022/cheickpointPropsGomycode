import CardGroup from 'react-bootstrap/CardGroup';
import players from '../src/Players';
import  Player from "../src/Composent/Player"
const PlayerList = () => {
    const title="nnfnnfnfnnfnfnfnfnfn"
    return ( 
        <CardGroup>
        {players.map((player, index) => (
        <Player key={index} {...player} title={title}/>
      ))}
        </CardGroup>
     );
}
 
export default PlayerList;