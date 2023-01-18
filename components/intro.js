import { CMS_NAME, CMS_URL } from "../lib/constants";
import PostPreview from "./post-preview";

export default function Intro() {
  return (
    <section className="min-h-[100vh] py-10 px-10  flex flex-col justify-between items-center">
      <div className="w-full flex flex-row justify-between">
        <h1 className="text-xl font-light text-left tracking-tighter leading-tight md:pr-8">
          SANIA GARCÍA
          <br />
          <span className="opacity-50">Software developer</span>
        </h1>
        <div className="py-5 flex flex-row gap-10">
          <a
            href="https://twitter.com/thickassdj"
            className="underline opacity-50 hover:opacity-70 duration-200 transition-colors"
          >
            Twitter
          </a>

          <a
            href="https://www.instagram.com/lex_klein_/"
            className="underline opacity-50 hover:opacity-70 duration-200 transition-colors"
          >
            Github
          </a>

          <a
            href="https://soundcloud.com/biensurr"
            className="underline opacity-50 hover:opacity-70 duration-200 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/lex_klein_/"
            className="underline opacity-50 hover:opacity-70 duration-200 transition-colors"
          >
            Lens
          </a>
          <a
            href="https://twitter.com/thickassdj"
            className="underline opacity-50 hover:opacity-70 duration-200 transition-colors"
          >
            Read.CV
          </a>
          <a
            href="https://www.instagram.com/lex_klein_/"
            className="underline opacity-50 hover:opacity-70 duration-200 transition-colors"
          >
            E-mail
          </a>
        </div>
      </div>
      <div className="min-h-[50vh] w-full p-5 border-solid border rounded-md border-white/50 hover:border-white/70 transition-all duration-200 flex flex-row justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="opacity-50">Mobile app</h1>
          <h2 className="text-xl">The Art Layer</h2>
          <p>
            A discovery tool and marketplace for NFT art in the physical world.
            <br />
            Built with React Native and powered by Web3 technologies.
          </p>
          <div className="flex flex-row justify-between">
            <a
              href="https://www.instagram.com/lex_klein_/"
              className="underline opacity-50 hover:opacity-70 duration-200 transition-colors"
            >
              Site (in progress)
            </a>
            <a
              href="https://www.instagram.com/lex_klein_/"
              className="underline opacity-50 hover:opacity-70 duration-200 transition-colors"
            >
              Site mockup
            </a>
            <a
              href="https://www.instagram.com/lex_klein_/"
              className="underline opacity-50 hover:opacity-70 duration-200 transition-colors"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
      <div className="w-full p-5 flex flex-row justify-between">
        <div className="flex flex-col justify-between gap-7">
          <h1 className="opacity-50">About</h1>
          <p>
            After a few years in tech-adjacent jobs such as graphic design and
            social media management, in 2019 I decided that I would stop
            dreaming about building software myself and finally go for it. Then
            in 2020 I turned lemons (lockdown life) into lemonade by studying
            full-time until I was able to make the jump, and now I do this
            professionally and keep devouring as much information as I can about
            technology and the Internet.
          </p>
        </div>
      </div>
    </section>
  );
}
