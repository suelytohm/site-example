import Image from "next/image";
import SiteMobile from "../assets/images/mobile.jpg";
import SitePC from "../assets/images/pc.jpg";

import "./style.css";

export default function Home() {
  return (
    <main>
      <Image src={SitePC} alt="site" />
    </main>
  );
}
