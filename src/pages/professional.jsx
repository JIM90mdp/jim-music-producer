import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../public/images/projects/song-challenge.jpg";
import project2 from "../../public/images/projects/sound-design.jpg";
import project3 from "../../public/images/projects/groove-tickets.png";
import project4 from "../../public/images/projects/jim-countries.jpg";
import project5 from "../../public/images/projects/colonia-fasta-mda.jpg";
import project6 from "../../public/images/projects/upwork.jpg";
import { GithubIcon } from "@/components/Icon";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      {/* <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" /> */}
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <div className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </div>
        <div className="mt-2 flex items-center">
          {github === "/" ? (
            <></>
          ) : (
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light py-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            More info
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-cneter justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          {
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          }
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Professional Profile</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Professional Profile"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="col-span-12">
            <div className="col-span-12 mb-10">
              <FeaturedProject
                type="Improvisation - Composition - Performance - Arrangements"
                title="Musician "
                summary={
                  <ul>
                    <li className="lp-2">• Main Musical Instrument: Guitar.</li>
                    <li className="lp-2">• Musical Genre: Jazz</li>
                    <li className="lp-2">
                      • Secondary Musical Instruments: Piano, Bass, Drums, Sax,
                      Clarinet.
                    </li>
                    <li className="lp-2">• 1000+ live music sessions</li>
                    <li className="lp-2">
                      • 2 Albums edited with original music.
                    </li>
                    <li className="lp-2">
                      • Member of many musical ensembles: big band, small
                      groups.
                    </li>
                    <li className="lp-2">
                      • Other music genres: Classical music, Latin music, Dub
                      Techno music.
                    </li>
                    <li className="lp-2">
                      • Performed at multiple music concerts at various cities
                      in Argentina, Germany, England, France and Spain.
                    </li>
                  </ul>
                }
                img={project5}
                link="https://www.linkedin.com/in/juan-ignacio-mascarenhas-860157230/"
                github="/"
              />
            </div>

            <div className="col-span-12 mb-10">
              <FeaturedProject
                type="Ableton Live - Reaper - Adobe Audition - Sibelius"
                title="Sound Designer"
                summary="Sound designer with a focus on creating immersive auditory experiences, merging technology and art, and translating concepts into sonic landscapes."
                img={project2}
                link="https://www.linkedin.com/in/juan-ignacio-mascarenhas-31b83729a/"
                github="/"
              />
            </div>

            <div className="col-span-12 mb-10">
              <FeaturedProject
                type="UpWork"
                title="Music Production"
                summary="
                If you need someone to bring your ideas to life, compose various music genres, record your compositions, fix your recordings, handle mixing and mastering, and much more, feel free to consult with me."
                img={project6}
                link="https://www.upwork.com/freelancers/~01aa2402fd9ff463f6"
                github="/"
              />
            </div>

            <div className="col-span-12  mb-10">
              <FeaturedProject
                type="Composition - Arrangements - Recording"
                title="Album edited with original music."
                summary={
                  <ul>
                    <li className="lp-2">• Ignacio Mascarenhas: Guitar</li>
                    <li className="lp-2">• Federico Viceconte: Tenor Sax </li>
                    <li className="lp-2">• Leandro Camus: Double Bass</li>
                    <li className="lp-2">• Luciano Monte: Drums</li>
                  </ul>
                }
                img={project1}
                link="https://ignaciomascarenhascuarteto.bandcamp.com/album/proyecto-bubu"
                github="/"
              />
            </div>

            <div className="col-span-12 mb-10">
              <FeaturedProject
                type="Direction and coordination  "
                title="Festival Mar del Plata Jazz"
                summary={
                  <>
                    <p>
                      The Festival was born in 2010 as a result of the curiosity
                      and creativity of a community of musicians seeking new
                      spaces and bridges to export and import sounds, thoughts,
                      experiences, and languages.
                    </p>

                    <ul>
                      <li className="lp-2">
                        • Event completion for 12 consecutive years
                      </li>
                      <li className="lp-2">
                        • Call and selection of vendors and participants{" "}
                      </li>
                      <li className="lp-2">• Optimization of grant funds</li>
                      <li className="lp-2">• Coordination of sponsors</li>
                      <li className="lp-2">
                        • Selection, negotiation and management of venues
                      </li>
                      <li className="lp-2">
                        • Overall accounting for the event
                      </li>
                    </ul>
                  </>
                }
                img={project3}
                link="https://www.instagram.com/mdpjazz/"
                github="/"
              />
            </div>

            <div className="col-span-12 mb-10">
              <FeaturedProject
                type="Production and Recording"
                title="Record Label 'Discos ICM'"
                summary={
                  <>
                    <p>
                      ICM Records was born as another group initiative of
                      independent musicians based in Mar del Plata, Buenos
                      Aires. With the aim of introducing different styles,
                      languages, and various composers worldwide, the record
                      label has released more than 50 albums.
                    </p>
                  </>
                }
                img={project4}
                link="https://discosicm.bandcamp.com/"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
