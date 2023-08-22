
import Card from 'react-bootstrap/Card';


function GroupExample({ nom, equipe, nationality, jerysNumber , age, image }) {
  return (
    
    <Card>
        <Card.Img  style={{height:'300px'}}variant="top" src={image} />
        <Card.Body>
          <Card.Title>{nom}</Card.Title>
          <Card.Text>
           Equipe: {equipe}
          </Card.Text>
          <Card.Text>
            Nationalité :{nationality}
          </Card.Text>
          <Card.Text>
            Numero de maillot : {jerysNumber}
          </Card.Text>
          <Card.Text>
            Age : {age}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          
        </Card.Footer> */}
      </Card>
      
  );
}

export default GroupExample;