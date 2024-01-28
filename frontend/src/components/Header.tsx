import { Fugaz_One } from "next/font/google";

const FugazOneFont = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
});

export const Header = (): JSX.Element => {
  return (
    <div className="relative">
      <header className="absolute w-full">
        <a href="/">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            <span
              className={
                FugazOneFont.className +
                " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              }
            >
              kaihei
            </span>
            <small className="ms-8 font-sans text-2xl font-bold">
              Minecraft server status
            </small>
          </h1>
        </a>
      </header>
    </div>
  );
};
