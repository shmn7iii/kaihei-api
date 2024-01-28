import { Spinner } from "flowbite-react";

export const Loading = () => {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Server is{" "}
      </h1>
      <div className="pt-2">
        <Spinner color="gray" size="xl" aria-label="Loading" />
      </div>
    </div>
  );
};
