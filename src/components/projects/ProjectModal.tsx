import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { type ProjectCardDataType } from "~/types/types";
import { Fragment } from "react";
import MarkdownParser from "../MarkdownParser";
import { Dialog, Transition } from "@headlessui/react";

type Props = ProjectCardDataType & {
  onClose: () => void;
  isOpen: boolean;
};
const ProjectModal: React.FC<Props> = ({
  description,
  month,
  year,
  title,
  codeLink,
  image,
  websiteLink,
  onClose,
  isOpen,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={onClose}
        className="text-white focus-visible:outline-none"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        </Transition.Child>
        {/* Full-screen container to center the panel */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="scroller flex h-full flex-col overflow-y-auto border border-white/20 bg-black sm:container md:h-4/5">
              <div className="sticky top-0 flex w-full flex-row justify-between border-white/20 bg-black/90 px-8 py-4 backdrop-blur">
                <h2 className="heading2">{title}</h2>
                <XMarkIcon
                  onClick={onClose}
                  className="h-8 w-8 cursor-pointer text-white md:h-12 md:w-12"
                />
              </div>
              <div className="w-full space-y-4 p-4 md:px-24 md:py-8">
                <div className="flex w-full flex-col items-center justify-center">
                  {image ? (
                    <Image
                      src={image}
                      width={2151}
                      height={1227}
                      alt="megalan"
                      className="h-fit w-full object-cover md:w-3/4"
                    />
                  ) : (
                    <div className="hero-pattern h-48 w-full object-cover md:w-3/4"></div>
                  )}
                  <p className="subtitle w-full pt-2 text-left opacity-60 md:w-3/4">
                    {year ? month + " " + year.toString() : month}
                  </p>
                </div>
                <MarkdownParser markdownString={description} />
                <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                  {websiteLink && (
                    <Link
                      href={websiteLink}
                      target="_blank"
                      className="focus-visible:outline-none"
                    >
                      <div className="flex w-full flex-row items-center justify-center space-x-4 border border-white/20 bg-white/5 px-8 py-2 transition-colors duration-300 hover:border-white/40 hover:bg-white/10 md:w-fit">
                        <p>Website</p>
                        <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
                      </div>
                    </Link>
                  )}
                  {codeLink && (
                    <Link
                      href={codeLink}
                      target="_blank"
                      className="focus-visible:outline-none"
                    >
                      <div className="flex w-full flex-row items-center justify-center space-x-4 border border-white/20 bg-white/5 px-8 py-2 transition-colors duration-300 hover:border-white/40 hover:bg-white/10 md:w-fit">
                        <p>Code</p>
                        <CodeBracketIcon className="h-6 w-6 text-white" />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;
