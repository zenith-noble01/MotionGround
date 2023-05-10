import "../styles/landingPage.scss";
import { Contact, Features, Header, Hero, GetStarted } from "../components";

function LandingPage() {
  let currentYear = new Date().getFullYear();

  console.log(currentYear);

  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <Features />
        <GetStarted />
        <Contact />
      </main>

      <footer>
        <p>&copy; MotionCanvas {currentYear}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
