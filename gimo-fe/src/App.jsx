import "./index.css";
import Home from "./pages/User/Home";
import CartPage from "./pages/User/Cartpage";
import GimoCarePage from "./pages/User/GimoCarePage";
import HelpCenterPage from "./pages/User/HelpCenterPage";
import SubscriptionsPage from "./pages/User/SubscriptionsPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CheckoutLayout from "./pages/Checkout/components/CheckoutLayout";
import MyRentals from "./pages/Checkout/MyRentals";
// Import Pages
import PhoneNumberPage from "./pages/Checkout/PhoneNumberPage";
import PhoneVerificationPage from "./pages/Checkout/PhoneVerificationPage";
import IdentityVerificationPage from "./pages/Checkout/IdentityVerificationPage";
import ShippingAddressPage from "./pages/Checkout/ShippingAddressPage";
import PaymentMethodPage from "./pages/Checkout/PaymentMethodPage";
import OrderReviewPage from "./pages/Checkout/OrderReviewPage";
import NotificationsPage from "./pages/User/NotificationsPage";
import BlogPage from "./pages/User/BlogPage";
import OrderTrackingPage from "./pages/User/OrderTrackingPage";
import ReviewsPage from "./pages/User/ReviewsPage";
import TopProductsPage from "./pages/User/TopProductsPage";
import DealsPage from "./pages/User/DealsPage";
import AdminLayout from "./pages/Admin/components/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import RentalReport from "./pages/Admin/RentalReport";
import OrdersPage from "./pages/Admin/OrdersPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/gimo-care" element={<GimoCarePage />} />
          <Route path="/sub-page" element={<SubscriptionsPage />} />
          <Route path="/blog" element={<BlogPage />} />{" "}
          <Route path="/reviews" element={<ReviewsPage />} />{" "}

          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/top-products" element={<TopProductsPage />} />
          <Route path="/deals" element={<DealsPage />} /> 
          <Route path="/cart-page" element={<CartPage />} />


          <Route path="/track-order" element={<OrderTrackingPage />} />

          {/* Routes cho luồng checkout, tất cả đều dùng CheckoutLayout */}
          <Route path="/checkout" element={<CheckoutLayout />}>
            {/* Điều hướng mặc định của /checkout đến bước đầu tiên */}
            <Route index element={<Navigate to="phone-number" replace />} />
            <Route path="phone-number" element={<PhoneNumberPage />} />
            <Route path="verify-phone" element={<PhoneVerificationPage />} />
            <Route
              path="identity-verification"
              element={<IdentityVerificationPage />}
            />
            <Route path="shipping-address" element={<ShippingAddressPage />} />
            <Route path="my-rentals" element={<MyRentals />} />
            <Route path="payment" element={<PaymentMethodPage />} />
            <Route path="review" element={<OrderReviewPage />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} /> 
            <Route path="reports" element={<RentalReport />} />
            <Route path="orders" element={<OrdersPage />} />
          </Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
