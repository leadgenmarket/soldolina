//import "./css/style.css";
import { BlocksContext } from "./context/blocksContext"
import { FlatsContext } from "./context/flatsContext"
import { useBlocks } from "./hooks/blocks.hook"


import { Loader } from './components/loader';
import { useFlats } from './hooks/flats.hook';

function App() {
  const { blocks, setBlocks, popup, setPopup, menuClick, setMenuClick } = useBlocks()
  const { flats, setFlats, activeFlat, setActiveFlat } = useFlats()
  return (
    <div className="App container_main">
      <BlocksContext.Provider value={{ blocks, setBlocks, popup, setPopup, menuClick, setMenuClick }}>
        <FlatsContext.Provider value={{ flats, setFlats, activeFlat, setActiveFlat }}>
          <Loader />
        </ FlatsContext.Provider>
      </BlocksContext.Provider>
    </div>
  );
}

export default App;
