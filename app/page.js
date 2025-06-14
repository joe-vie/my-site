import Image from "next/image";

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
      <p></p>
    </div>
  );
}
