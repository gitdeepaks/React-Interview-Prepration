import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import HeaDer from "../components/HeaDer";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div>
      <HeaDer />
      {isLoading && <div>Loading...</div>}
      <Outlet />
    </div>
  );
}

export default AppLayout;
