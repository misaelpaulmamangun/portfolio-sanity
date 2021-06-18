import React, { lazy, Suspense } from "react";
const Typewriter = lazy(() => import("typewriter-effect"));
const renderLoader = () => <p>Loading</p>;
export default function Home() {
  return (
    <div className="homepage">
      <div className="banner-image">
        <div className="container inner-content">
          <h2>Misael Paul Mamangun</h2>
          <h3>
            <Suspense fallback={renderLoader()}>
              <Typewriter
                options={{
                  strings: [
                    "I'm a Front End Developer.",
                    "I love Javascript.",
                    "I love playing violin.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </Suspense>
          </h3>
        </div>
      </div>
    </div>
  );
}
