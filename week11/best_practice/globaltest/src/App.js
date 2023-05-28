import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import ListProvider from './store/3_context';
function App() {
  return (
    <>
      <ListProvider>
        <RouterProvider router={router} />
      </ListProvider>
    </>
  );
}

export default App;
