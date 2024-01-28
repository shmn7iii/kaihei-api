import { BsGithub } from "react-icons/bs";

export const Footer = (): JSX.Element => {
  return (
    <div className="relative">
      <footer className="absolute bottom-0 w-full">
        <div className="py-2">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2024{" "}
              <a href="https://github.com/shmn7iii" className="hover:underline">
                shmn7iii
              </a>
              ,{" "}
              <a href="https://github.com/sttnbnb" className="hover:underline">
                sttnbnb
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://github.com/sttnbnb/kaihei">
                <BsGithub size={20} color={"gray"} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
