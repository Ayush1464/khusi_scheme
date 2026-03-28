import { createBrowserRouter } from "react-router";
import PresentationLayout from "./components/PresentationLayout";
import HeroSlide from "./components/slides/HeroSlide";
import ProjectOverview from "./components/slides/ProjectOverview";
import ProblemStatement from "./components/slides/ProblemStatement";
import SolutionOverview from "./components/slides/SolutionOverview";
import CoreModules from "./components/slides/CoreModules";
import WebPlatformPreview from "./components/slides/WebPlatformPreview";
import TechnologyStack from "./components/slides/TechnologyStack";
import Roadmap from "./components/slides/Roadmap";
import ImpactOutcomes from "./components/slides/ImpactOutcomes";
import FinalCTA from "./components/slides/FinalCTA";
import SchoolAdminPanel from "./components/SchoolAdminPanel";
import GovernmentAdminPanel from "./components/GovernmentAdminPanel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PresentationLayout,
    children: [
      { index: true, Component: HeroSlide },
      { path: "overview", Component: ProjectOverview },
      { path: "problem", Component: ProblemStatement },
      { path: "solution", Component: SolutionOverview },
      { path: "modules", Component: CoreModules },
      { path: "platform", Component: WebPlatformPreview },
      { path: "technology", Component: TechnologyStack },
      { path: "roadmap", Component: Roadmap },
      { path: "impact", Component: ImpactOutcomes },
      { path: "cta", Component: FinalCTA },
    ],
  },
  {
    path: "/admin/school",
    Component: SchoolAdminPanel,
  },
  {
    path: "/admin/government",
    Component: GovernmentAdminPanel,
  },
]);