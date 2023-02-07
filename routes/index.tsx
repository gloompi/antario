import { useRef } from "react";
import { Head } from "aleph/react";
import { isServer } from "~/utils/isServer.ts";
import Scene from "~/components/canvas/Scene.tsx";
import Home from "~/components/canvas/home/index.tsx";

function Index() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center"
      ref={ref}
      style={{
        height: "calc(100vh - 2 * 80px)",
      }}
    >
      <Head>
        <title>Aleph.js</title>
        <meta name="description" content="The Fullstack Framework in Deno." />
      </Head>
      {!isServer() && (
        <Scene
          className="pointer-events-none"
          eventSource={ref as any}
          eventPrefix="client"
        >
          <Home />
        </Scene>
      )}
    </div>
  );
}

export default Index;
