import Link from "next/link";

export default function About() {
  return (
    <main className="about-page">
      <h1>About Me</h1>
      <p>
        Hello My name is <span className="highlight-text">Saswat Mishra</span>,
        and I&apos;m currently studying to become a professional software
        engineer. I have a passion for programming, particularly in{" "}
        <span className="highlight-text">C++</span> and
        <span className="highlight-text">Python</span>, and I&apos;m actively
        expanding my skills in data structures, algorithms,{" "}
        <span className="highlight-text">machine learning</span>, SQL, and{" "}
        <span className="highlight-text">web development</span>.
      </p>
      <p>
        My journey in programming started with a fascination for how software
        can solve complex problems and make life easier. Since then, I&apos;ve
        dedicated myself to mastering various technologies and frameworks,
        including Next.js, which I&apos;ve used to build this blog. In my free
        time, I enjoy exploring new technologies, contributing to open-source
        projects, and listening music. I believe that continuous learning and
        collaboration are key to growth in the tech industry. Feel free to reach
        out if you have any questions or just want to{" "}
        <Link href={"/contact"} className="link">
          connect
        </Link>
        !
      </p>
    </main>
  );
}
