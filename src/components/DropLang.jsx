import { Menu } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export default function DropLang() {
  const navigate = useNavigate();

  return (
    <div className="top-16 my-auto w-auto text-left">
      <Menu as="div" className="relative inline-block text-right">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 transition-colors duration-200 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 active:bg-black/15">
            <img src="/svg/world-svgrepo-com.svg" className="h-6 w-6" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-1 w-14 rounded-md bg-black/20  shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div>
              <Menu.Item>
                <button
                  className="group flex w-full items-center rounded-md py-2 text-sm transition-colors duration-200 hover:bg-black/20 active:bg-black/15"
                  onClick={() => navigate("/")}
                >
                  <img src="/united-kingdom.png" className="mx-auto h-6 w-6" />
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className="group flex w-full items-center rounded-md py-2 text-sm transition-colors duration-200 hover:bg-black/20 active:bg-black/15"
                  onClick={() => navigate("/fr")}
                >
                  <img src="/france.png" className="mx-auto h-6 w-6" />
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
