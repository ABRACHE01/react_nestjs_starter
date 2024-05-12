import { Route, Routes } from "react-router";
import LandingPage from "../shared/pages/LandingPage"; 
const GlobalRoutes = () => {
  return (
    <Routes>
            <Route  index element={<LandingPage />}/>
    </Routes>
  );
};

export default GlobalRoutes;
