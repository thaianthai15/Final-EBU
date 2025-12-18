import Categories from "./components/Categories";
import Footer from "../../components/layout/user/Footer";
import Header from "../../components/layout/user/Header";
import Hero from "./components/Hero";
import HomePageFeatures from "./components/HomePageFeatures";

export default function Home() {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Categories />
        <HomePageFeatures />
      </main>
      <Footer />
    </div>
  );
}