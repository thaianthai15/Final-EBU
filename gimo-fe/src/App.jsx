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
import LoginPage from "./pages/User/Login";
import SignUp from "./pages/User/Signup";
import ProfilePage from "./pages/User/Profile";
import UpdatePhoneNumberPage from "./pages/User/UpdatePhoneNumberPage";
import AccountSecurity from "./pages/User/AccountSecurity";
import AccountPage from "./pages/User/AccountPage";
import AddPaymentMethod from "./pages/User/AddPaymentMethod";
import PaymentMethods from "./pages/User/PaymentMethod";
import CancelContractPage from "./pages/User/CancelContractPage";
import Category from "./pages/User/Category";
import Discount from "./pages/User/Discount";
import GimoBusinessPage from "./pages/User/GimoBusinessPage";
import HowItWorksPage from "./pages/User/HowItWorksPage";
import LegalPage from "./pages/User/LegalPage";
import ProductDetailPage from "./pages/User/ProductDetailPage";
import PaymentsPage from "./pages/Admin/Payment";
import ProductsPage from "./pages/Admin/Products";
import Users from "./pages/Admin/Users";
import RentNowPage from "./pages/User/RentNowPage";
import PhonesTabletsPage from "./pages/User/PhonesTabletsPage";
import GamingVRPage from "./pages/User/GamingVRPage";
import CamerasPage from "./pages/User/CamerasPage";
import AudioMusicPage from "./pages/User/AudioMusicPage";
import ApplePage from "./pages/User/ApplePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/brand/apple" element={<ApplePage />} />

          <Route path="/rent-now" element={<RentNowPage />} /> 
          <Route path="/phones-tablets" element={<PhonesTabletsPage />} />
          <Route path="/gaming-vr" element={<GamingVRPage />} />
          <Route path="/cameras" element={<CamerasPage />} />
          <Route path="/audio-music" element={<AudioMusicPage />} />

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account-security" element={<AccountSecurity />} />

          <Route path="/payment-method" element={<PaymentMethods />} />
          <Route path="/add-payment-method" element={<AddPaymentMethod />} />
          <Route path="/update-phone" element={<UpdatePhoneNumberPage />} />
          <Route path="/cancel-contract" element={<CancelContractPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/gimo-business" element={<GimoBusinessPage />} />
          <Route path="/how-it-work" element={<HowItWorksPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/product-detail" element={<ProductDetailPage />} />
          
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
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="users" element={<Users />} />
          </Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
