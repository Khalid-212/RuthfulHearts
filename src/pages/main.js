import Navigation from "../components/navigation";
import Header from "../components/header";
import AboutSection from "../components/aboutSection";
import Donations from "../components/donations";
import ContactUs from "../components/contactUs";
import ThankYou from "../components/thankYou";
import Footer from "../components/footer";
import FAQ from "../components/faq";
import Stats from "../components/stats";
import TeamMembers from "../components/team";
import Preloader from "../components/preloader";
import { useState } from "react";

function Main() {
  console.log(
    "Ruthful Hearts <3\n\nIf you are a Ruthful Developer, you can help improve this site by forking and making a PR request on Github. \n\nHere's the link to this project's source code: https://github.com/dagmawibabi/RuthfulHearts \n\nHave fun and protect that ruthful heart of yours! <3"
  );
  const [charged, setCharged] = useState(false);

  return (
    <div className="bg-[#151515] h-fit text-white w-fit overflow-hidden">
      {!charged ? (
        <Preloader setCharged={setCharged} />
      ) : (
        <>
          <Navigation />
          <Header />
          <Stats />
          <AboutSection />
          <Donations />
          <FAQ />
          <ContactUs />
          <TeamMembers charged={charged} setCharged={setCharged} />
          <ThankYou />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Main;
