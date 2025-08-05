import { RouterProvider } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import router from "./routing/router";

// Replace this with your real publishable key from Stripe Dashboard
const stripePromise = loadStripe(
  "pk_test_51RsjUKQb6QIM5moUvWx2QtVfNA4icQGsBJH2eNMxSQkYBOVJr1NeVedVygFgxoOq0oPMNcbKdfQGWYFKkGU3uVGY00hSbJslUd",
);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <RouterProvider router={router} />
    </Elements>
  );
}

export default App;
