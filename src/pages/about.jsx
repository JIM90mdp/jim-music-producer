import AnimatedTextTwo from "@/components/AnimatedTextTwo";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.png";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>JIM-Dev | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout>
          <AnimatedTextTwo
            text="1% each day"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="w-full grid grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 relative h-max d border-dark bg-light p-8 dark:bg-dark  xl:col-span-4 xl:items-center md:order-1 md:col-span-8">
              <Image
                src={profilePic}
                alt="jim-dev"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-3 flex flex-col items-center justify-center text-center xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                Born in Mar del Plata, Buenos Aires, Argentina, I've always been
                passionate about artistic development in various disciplines.
                I've consistently pursued sports as a hobby, particularly those
                involving activities in the sea.
              </p>
              <p className="my-4 font-medium">
                From a young age, I discovered my love and passion for music,
                and since then, I haven't stopped learning and creating
                situations that showcase the progress I've made.
              </p>
              <p className="font-medium">
                I was raised in a home with both parents as professionals and
                educators, instilling in me a commitment to continuous learning
                and a calling to share knowledge with others.
              </p>
              <p className="font-medium">
                I'm always ready to collaborate with anyone seeking my
                assistance. This willingness reflects my dedication to personal
                growth and a desire to contribute to the well-being of those
                around me.
              </p>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1000} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Live music sessions
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={500} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Happy Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1000} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Goal Accomplished
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={21} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Expertise
                </h2>
              </div>
            </div>
          </div>

          <Education />
          <Skills />
          {/* <Experience /> */}
        </Layout>
      </main>
    </>
  );
};

export default about;
