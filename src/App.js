import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import './App.css';

function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-cy="shoe-app">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
