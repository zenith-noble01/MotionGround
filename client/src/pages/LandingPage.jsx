import "../styles/landingPage.scss";
import { Contact, Features, GetStarted, Header, Hero } from "../components";

function LandingPage() {
  const heroVariant = {
    hidden: { opacity: 0, y: "-100%" },
    show: { opacity: 1, y: "0%", trasnsition: "" },
  };
  const buttonVariant = { hover: { scale: 1.1 } };

  let currentYear = new Date().getFullYear();

  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero buttonVariant={buttonVariant} heroVariant={heroVariant} />
        <Features />
        <LandingPage />
        <GetStarted buttonVariant={buttonVariant} />
        <Contact buttonVariant={buttonVariant} />
      </main>

      <footer>
        <p>&copy; MotionCanvas {currentYear}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
