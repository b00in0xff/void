import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-slate-800 lg:px-8 px-4 py-0">
      <Head>
        <title>Void Next App</title>
        <meta name="description" content="Void Starter for Next App." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-1 flex-col justify-center items-center">
        <h1 className="m-0 text-3xl lg:text-6xl text-center text-slate-50">
          Welcome to <a href="http://localhost:3000/" className="text-indigo-400 no-underline hover:underline active:underline focus:underline">the Void!</a>
        </h1>

        <p className="text-slate-200 my-16 mx-0 leading-normal text-base lg:text-lg text-center">
          Get started by editing{" "}
          <code className="bg-zinc-100 text-slate-600 rounded p-1.5 text-sm lg:text-base font-mono">pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
