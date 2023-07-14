function SnippetContainer({ children }) {
  return <div className="w-full p-5 border-solid border rounded-md border-white/50 hover:border-white/70 transition-all duration-200 flex flex-col justify-between basis-1/2 gap-6">{children}</div>;
}

function ProjectSnippets() {
  return (
    <div className="w-full flex flex-col justify-between gap-10">
      <SnippetContainer>
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Geo</h2>
          <h3 className="opacity-50">Mobile app</h3>
        </div>
        <p>A collaborative and modular maps app.</p>
        <div className="flex justify-between">
          <a href="https://geo.softer.systems" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            Site (in progress)
          </a>
          <a href="https://github.com/GIRLYDAO/layers-mobile" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            Repository
          </a>
        </div>
      </SnippetContainer>
      <SnippetContainer>
        <div className="flex justify-between items-center	">
          <h2 className="text-xl">Softer Systems</h2>
          <h3 className="opacity-50">Software label</h3>
        </div>
        <p>
          An umbrella brand for different software projects and experiments, as well as a meeting point for people who have similar interests and want to stay involved.
          <br />
          It's a way for me to test the waters for a potential future startup, as well as to expand my network.
        </p>
        <div className="flex flex-row justify-between">
          <a href="https://softer.systems/" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            Site (in progress)
          </a>
          <a href="https://github.com/softersystems/softer-site" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            Repository
          </a>
        </div>
      </SnippetContainer>
      <SnippetContainer>
        <div className="flex justify-between items-center	">
          <h2 className="text-xl">Bien Sûr</h2>
          <h3 className="opacity-50">Musician's site</h3>
        </div>
        <p>
          A contact point and promotional tool for a musician. Built with Next.js and Contentful.
          <br />
          I'm also helping the artist enter the world of Web3 music, with guidance on comunity building, music NFT, etc.
        </p>
        <div className="flex flex-row justify-between">
          <a href="https://audio-portfolio.vercel.app/" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            Site (in progress)
          </a>
          <a href="https://github.com/saniagarciadev/audio-portfolio" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            Repository
          </a>
        </div>
      </SnippetContainer>
    </div>
  );
}

export default function Homepage() {
  return (
    <section className="md:w-[50%] m-auto py-10 px-5 sm:px-10 flex flex-col justify-between items-center gap-10">
      <div className="w-full flex flex-row justify-between flex-wrap">
        <h1 className="text-xl font-light text-left tracking-tighter leading-tight md:pr-8">
          SANIA GARCÍA
          <br />
          <span className="opacity-50">Software developer</span>
        </h1>
        <div className="py-5 flex flex-row gap-10 flex-wrap">
          <a href="https://twitter.com/SaniaGarciaDev" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/sania-garcia/" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/saniagarciadev" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            Github
          </a>
          <a href="https://www.lensfrens.xyz/sania.lens" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            Lens
          </a>
          <a href="mailto:sania@softer.systems" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            E-mail
          </a>
        </div>
      </div>
      <ProjectSnippets />
      <div className="w-full p-5 flex flex-row justify-between">
        <div className="flex flex-col justify-between gap-7">
          <h1 className="opacity-50">About</h1>
          <p className="lg:columns-2 gap-10">
            After a few years in tech-adjacent jobs such as graphic design and social media management, in 2019 I decided that I would stop dreaming about building software myself and finally go for it. Then in 2020 I turned lemons (lockdown life)
            into lemonade by studying full-time until I was able to make the jump, and now I do this professionally and keep devouring as much information as I can about technology and the Internet.
          </p>
        </div>
      </div>
    </section>
  );
}
