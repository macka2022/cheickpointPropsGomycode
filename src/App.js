import 'bootstrap/dist/css/bootstrap.min.css';

import PlayerList from './PlayerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{backgroundColor:'black',color:'white'}}><marquee behavior="" direction="left"><h2>Liste des Joueurs</h2></marquee></h1>
      <PlayerList />
      </header>
    </div>
  );
}

export default App;
