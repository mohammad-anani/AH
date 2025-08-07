import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./routing/router";
import { cacheManager } from "./utils/cache/cacheManager";

function App() {
  useEffect(() => {
    // Initialize cache cleanup interval on app start
    const cleanupInterval = cacheManager.startCleanupInterval();

    // Cleanup on unmount
    return () => {
      clearInterval(cleanupInterval);
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
