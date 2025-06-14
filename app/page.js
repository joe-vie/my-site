import { useState } from "react";
import Image from "next/image";
("use client");

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Jovie's Official Site</h1>
      <p>
        Welcome to my personal site (currently in the works but I'm certainly
        aspiring to revise this as well as i can)
      </p>

      <h2>Why did you wish to join this workshop?</h2>
      <p>
        I chose to join this workshop because it would be a step in the right
        direction to allow for me to learn more about advanced web development.
        While I have given workshops about the basics of HTML and CSS, I have
        never really spent enough time to improve my proficiency in web dev and
        web design which has further given me motivation to want to pursue even
        more.
      </p>
      <h2>What are some aspects of me I would like for you to know?</h2>
      <h3>My Love for Acting!</h3>
      <p>
        My love for acting started ever since freshman year. Doing production
        after production, I have enjoyed getting to work with my classmates and
        work as an ensemble. Here are some photos from our most recent play
      </p>
      <Image
        src="/acting/dotm1.jpg"
        alt="perspective photo of Dark of the Moon"
        width={600}
        height={400}
      ></Image>
      <Image
        src="/acting/dotm2.jpg"
        alt="perspective photo of Dark of the Moon"
        width={600}
        height={400}
      ></Image>
      <Image
        src="/acting/dotm3.jpg"
        alt="perspective photo of Dark of the Moon"
        width={600}
        height={400}
      ></Image>
    </div>
  );
}
