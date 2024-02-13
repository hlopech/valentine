import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FinalGame from "./routes/FinalGame";
import MainSrceen from "./routes/MainScreen";
import FirstGame from "./routes/FirstGame";
import SecondGame from "./routes/SecondGame";
import EndGameScreen from "./routes/EndGameScreen";
import Prize from "./routes/Prize";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainSrceen />,
  },
  {
    path: "/first",
    element: <FirstGame />,
  },
  {
    path: "/final",
    element: <FinalGame />,
  },
  {
    path: "/second",
    element: <SecondGame/>,
  },
  {
    path: "/end",
    element: <EndGameScreen/>,
  },
  {
    path: "/prize",
    element: <Prize/>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
