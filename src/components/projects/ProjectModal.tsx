import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import MarkdownParser from "../MarkdownParser";
import { type ProjectCardDataType } from "~/types/types";

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
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4">
              <Dialog.Panel className="relative flex w-full max-w-4xl flex-col overflow-hidden border border-white/20 bg-black text-white">
              <div className="relative h-64 w-full overflow-hidden border-b border-white/10 md:h-80">
                {image ? (
                  <Image
                    src={image}
                    width={2151}
                    height={1227}
                    alt={title}
                    className="h-full w-full object-cover"
                    priority
                  />
                ) : (
                  <div className="hero-pattern h-full w-full" />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/90" />
                <div className="absolute bottom-8 left-8 right-8 space-y-2">
                  <Dialog.Title className="heading1 text-white">
                    {title}
                  </Dialog.Title>
                  <p className="subtitle uppercase tracking-[0.3em] text-white/70">
                    {year ? `${month} ${year}` : month}
                  </p>
                </div>
                <button
                  aria-label="Close project details"
                  onClick={onClose}
                  className="absolute right-4 top-4 border border-white/30 bg-black/60 px-3 py-2 text-white transition hover:border-white/70 hover:bg-black"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="p-8 text-left">
                  <MarkdownParser
                    markdownString={description}
                    className="prose prose-invert max-w-none space-y-4 text-base leading-7 text-white/85 md:text-lg"
                  />
                </div>
                <div className="flex flex-wrap gap-4 border-t border-white/10 p-8">
                  {websiteLink && (
                    <Link
                      href={websiteLink}
                      target="_blank"
                      className="focus-visible:outline-none"
                    >
                      <span className="flex items-center gap-3 border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:border-white/80 hover:bg-white/10">
                        Visit Website
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      </span>
                    </Link>
                  )}
                  {codeLink && (
                    <Link
                      href={codeLink}
                      target="_blank"
                      className="focus-visible:outline-none"
                    >
                      <span className="flex items-center gap-3 border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:border-white/80 hover:bg-white/10">
                        View Code
                        <CodeBracketIcon className="h-4 w-4" />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;
