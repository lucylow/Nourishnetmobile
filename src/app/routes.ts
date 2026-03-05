import { createBrowserRouter } from "react-router";
import { Onboarding } from "./screens/Onboarding";
import { PhoneAuth } from "./screens/PhoneAuth";
import { HomeFeed } from "./screens/HomeFeed";
import { MapView } from "./screens/MapView";
import { CreateListing } from "./screens/CreateListing";
import { ListingDetail } from "./screens/ListingDetail";
import { Messages } from "./screens/Messages";
import { ChatConversation } from "./screens/ChatConversation";
import { Supervisor } from "./screens/Supervisor";
import { Profile } from "./screens/Profile";
import { ImpactView } from "./screens/ImpactView";
import { AIAnalytics } from "./screens/AIAnalytics";
import { MCPAgents } from "./screens/MCPAgents";
import { NutritionHeatmap } from "./screens/NutritionHeatmap";
import { ProphetForecast } from "./screens/ProphetForecast";
import { NFTGallery } from "./screens/NFTGallery";
import { RLPricing } from "./screens/RLPricing";
import { AIDashboard } from "./screens/AIDashboard";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/auth",
    Component: PhoneAuth,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomeFeed },
      { path: "map", Component: MapView },
      { path: "create", Component: CreateListing },
      { path: "listing/:id", Component: ListingDetail },
      { path: "messages", Component: Messages },
      { path: "messages/:id", Component: ChatConversation },
      { path: "supervisor", Component: Supervisor },
      { path: "profile", Component: Profile },
      { path: "impact", Component: ImpactView },
      { path: "ai-dashboard", Component: AIDashboard },
      { path: "ai-analytics", Component: AIAnalytics },
      { path: "mcp-agents", Component: MCPAgents },
      { path: "nutrition-heatmap", Component: NutritionHeatmap },
      { path: "prophet-forecast", Component: ProphetForecast },
      { path: "nft-gallery", Component: NFTGallery },
      { path: "rl-pricing", Component: RLPricing },
    ],
  },
]);
