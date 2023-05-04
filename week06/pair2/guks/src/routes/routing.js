import { createBrowserRouter } from "react-router-dom";
import State from "../Hooks/State";
import Main from "../main/main";
import Ref from "../Hooks/Ref";
import Callback from "../Hooks/Callback";
import Memo from "../Hooks/Memo";
import ReactMemo from "../Hooks/ReactMemo";
import Effect from "../Hooks/Effect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/state",
    element: <State />,
  },
  {
    path: "/ref",
    element: <Ref />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
  {
    path: "/memo",
    element: <Memo />,
  },
  {
    path: "/reactmemo",
    element: <ReactMemo />,
  },
  {
    path: "/effect",
    element: <Effect />,
  },
]);

export default router;
