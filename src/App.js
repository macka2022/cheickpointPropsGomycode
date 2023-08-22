import 'bootstrap/dist/css/bootstrap.min.css';

import PlayerList from './PlayerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <marquee behavior="" direction="left"><h1>Liste des Joueurs</h1></marquee>
      <PlayerList />
      </header>
    </div>
  );
}

export default App;
