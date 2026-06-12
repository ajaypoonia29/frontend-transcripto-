import { createBrowserRouter } from "react-router";
import { Root } from "./layout/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { WeightLoss } from "./pages/WeightLoss";
import { MuscleGain } from "./pages/MuscleGain";
import { PCOS } from "./pages/PCOS";
import { DietPlans } from "./pages/DietPlans";
import { SuccessStories } from "./pages/SuccessStories";
import { CoachesPage as Coaches } from "./pages/CoachesPage";
import { Pricing } from "./pages/Pricing";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "programs/weight-loss", Component: WeightLoss },
      { path: "programs/muscle-gain", Component: MuscleGain },
      { path: "programs/pcos", Component: PCOS },
      { path: "diet-plans", Component: DietPlans },
      { path: "success-stories", Component: SuccessStories },
      { path: "coaches", Component: Coaches },
      { path: "pricing", Component: Pricing },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
    ],
  },
]);
