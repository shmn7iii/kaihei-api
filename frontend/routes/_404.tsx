import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div className="">
        <h1 className="text-4xl font-bold">404 - Page not found</h1>
      </div>
    </>
  );
}
