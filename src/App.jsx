import AppToyStore from "./components/AppToyStore";
import { ToyStoreProvider } from "./context/ToyStoreProvider";

function App() {
  return (
    <ToyStoreProvider>
      <AppToyStore />
    </ToyStoreProvider>
  );
}

export default App;
