import { FeaturedProductView, HomeView, ProductView, TrustIndicators } from "@/packages/dashboard/presentation/view";
import React from "react";

const DashboardPage = () => {
  return (
    <React.Fragment>
      <HomeView />
      <ProductView />
      <FeaturedProductView />
      <TrustIndicators />
    </React.Fragment>
  );
};

export default DashboardPage;