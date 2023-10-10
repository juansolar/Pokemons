import './App.css';
import Ruta from './Ruta';
import PokemonProvider from './context/pokemon/Provider';


function App() {
  return( 
    <PokemonProvider>
      <Ruta />
    </PokemonProvider>
  )
}

export default App;
