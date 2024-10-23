import CssBaseline from "@mui/material/CssBaseline";
import Headline from "./components/Headline/Headline";
import Download from "./components/Sections/Download/Download";
import Footer from "./components/Sections/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Headline />
      <Outlet />
      <Download />
      <Footer />
    </div>
  );
};

export default App;
