import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
function App() {
  return(
    <div>
      {/*NavBar*/}
      <NavBar/> 
      
      {/*ItemListContainer*/}
      <ItemListContainer greeting = "Proximamente Tienda de Vinos del Mundo" />
    </div>
  )
}

export default App
