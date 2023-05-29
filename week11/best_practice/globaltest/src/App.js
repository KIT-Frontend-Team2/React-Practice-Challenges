import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import ListProvider from "./store/3_context";
import ModalProvider from "./store/2_context";
function App() {
  return (
    <>
      <ModalProvider>
        <ListProvider>
          <RouterProvider router={router} />
        </ListProvider>
      </ModalProvider>
    </>
  );
}

export default App;
