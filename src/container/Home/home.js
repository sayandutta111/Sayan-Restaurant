import React from "react";
import { FooterOverlay, Newsletter } from "../../components";

import { Chef, Footer, Gallery, Header, Intro } from "../../container";

export default function Home() {
  return (
    <div>
      <Header />
      <Chef />
      <Intro />
      <Gallery />
      <Newsletter />
      {/* <FooterOverlay /> */}
      <Footer />
    </div>
  );
}
