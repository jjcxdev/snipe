// index.tsx
import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [timeSince, setTimeSince] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2023-10-13T22:00:00"); // 10 PM, Oct 13, 2023

    const updateCounter = () => {
      const now = new Date();
      const timeDifference = now.getTime() - targetDate.getTime();

      const days = Math.floor(timeDifference / (1000 * 3600 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 3600 * 24)) / (1000 * 3600),
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 3600)) / (1000 * 60),
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeSince({ days, hours, minutes, seconds });
    };

    updateCounter(); // Run once immediately
    const intervalId = setInterval(updateCounter, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>Days since SSSniperwolf doxxed Jacksfilms</title>
        <meta
          name="description"
          content="and she still has a monetized YouTube channel"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="http://sssniperwolfdoxx.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Days since SSSniperwolf doxxed Jacksfilms"
        />
        <meta
          property="og:description"
          content="and she still has a monetized YouTube channel"
        />
        <meta
          property="og:image"
          content="https://i.pinimg.com/originals/b9/0d/02/b90d020e0f435bbffe15bf2c2f7f41bd.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sssniperwolfdoxx.com" />
        <meta property="twitter:url" content="http://sssniperwolfdoxx.com" />
        <meta
          name="twitter:title"
          content="Days since SSSniperwolf doxxed Jacksfilms"
        />
        <meta
          name="twitter:description"
          content="and she still has a monetized YouTube channel"
        />
        <meta
          name="twitter:image"
          content="https://i.pinimg.com/originals/b9/0d/02/b90d020e0f435bbffe15bf2c2f7f41bd.jpg"
        />
      </Head>
      <div
        className="custom-cursor my-10 flex h-screen flex-col items-center justify-center text-yellow-300 lg:gap-[45rem]"
        style={{
          backgroundImage: 'url("/F8XYMwCaEAAzRbb.jpeg")',
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex w-3/4 flex-col gap-[24rem]">
          <div className="flex flex-col items-center justify-center">
            <h1
              className="flex flex-wrap uppercase"
              style={{ fontSize: "calc(3vw + 1em)" }}
            >
              Days since SSSniperWolf doxxed Jacksfilms
            </h1>
            <h2
              className="hidden flex-row items-center uppercase md:flex"
              style={{ fontSize: "calc(2vw + 0.8em)" }}
            >
              and she still has a monetized
              <span>
                <img
                  alt="YouTube"
                  className="w-auto md:w-16"
                  src="/icons8-youtube-480.png"
                ></img>
              </span>
              channel
            </h2>
          </div>

          <div className="flex w-full flex-col items-center justify-center align-middle">
            <h3 className="grid h-full grid-cols-4 items-center gap-4 text-3xl uppercase lg:gap-8">
              <div className="flex w-full flex-col items-center space-y-20">
                <span
                  className="text-ellipsis"
                  style={{ fontSize: "calc(6vw + 0.8em)" }}
                >
                  {timeSince.days}
                </span>
                <div
                  className="text-lg text-red-600"
                  style={{ fontSize: "calc(1vw + 0.8em)" }}
                >
                  Days
                </div>
              </div>
              <div className="flex w-full flex-col items-center space-y-20">
                <span
                  className="text-ellipsis"
                  style={{ fontSize: "calc(6vw + 0.8em)" }}
                >
                  {timeSince.hours}
                </span>
                <div
                  className=" text-red-600"
                  style={{ fontSize: "calc(1vw + 0.8em)" }}
                >
                  Hours
                </div>
              </div>
              <div className="flex w-full flex-col items-center space-y-20">
                <span
                  className="text-ellipsis"
                  style={{ fontSize: "calc(6vw + 0.8em)" }}
                >
                  {timeSince.minutes}
                </span>
                <div
                  className=" text-red-600"
                  style={{ fontSize: "calc(1vw + 0.8em)" }}
                >
                  Minutes
                </div>
              </div>
              <div className="flex w-full flex-col items-center space-y-20">
                <span
                  className="text-ellipsis"
                  style={{ fontSize: "calc(6vw + 0.8em)" }}
                >
                  {timeSince.seconds}
                </span>
                <div
                  className=" text-red-600"
                  style={{ fontSize: "calc(1vw + 0.8em)" }}
                >
                  Seconds
                </div>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
