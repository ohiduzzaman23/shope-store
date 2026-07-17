import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./router/routers";
import { WishlistProvider } from "./context/WishlistContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistProvider>
      <RouterProvider
        router={routes}
        fallbackElement={
          <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      />
    </WishlistProvider>
  </StrictMode>,
);
