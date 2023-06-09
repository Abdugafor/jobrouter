import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route, 
  RouterProvider, 
} from "react-router-dom";

// Pages

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { RootLayout } from "./layouts/RootLayout";
import { HelpLayout } from "./layouts/HelpLayout";
import Contact from "./pages/help/contact";
import Faq from "./pages/help/faq";
import { NotFound } from "./pages/NotFoung";
import { careersLoader } from "./pages/careers/careers";
import CareerLayout from "./layouts/CareerLayout";
import Careers from "./pages/careers/careers";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq/>}/>
        <Route path="Contact" element={<Contact />}/>
      </Route>

      <Route path="careers" element={<CareerLayout/>}>
        <Route 
          index
          element={<Careers />}
          loader={careersLoader}
        >
        </Route>

        <Route 
          path=":id"
          element={<CareerDetails/>}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route  path="*" element={<NotFound/>}/> 
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
