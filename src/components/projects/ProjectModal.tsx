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
        className="relative z-[100] text-white focus-visible:outline-none"
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
          <div className="fixed inset-0 overflow-hidden p-4 pt-20 md:pt-24">
            <div className="flex min-h-full items-start justify-center">
              <Dialog.Panel className="relative flex max-h-[calc(100svh-6rem)] w-full max-w-4xl flex-col overflow-y-auto overscroll-contain border border-white/20 bg-black text-white">
                <div className="relative h-48 w-full shrink-0 overflow-hidden border-b border-white/10 sm:h-64 md:h-80">
                  {image ? (
                    <Image
                      src={image}
                      width={1200}
                      height={675}
                      alt={title}
                      className="h-full w-full object-cover"
                      priority
                    />
                  ) : (
                    <div className="hero-pattern h-full w-full" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/90" />
                  <div className="absolute bottom-6 left-5 right-5 space-y-2 md:bottom-8 md:left-8 md:right-8">
                    <Dialog.Title className="font-heading text-3xl leading-tight text-white md:text-6xl">
                      {title}
                    </Dialog.Title>
                    <p className="subtitle uppercase tracking-[0.2em] text-white/70 md:tracking-[0.3em]">
                      {year ? `${month} ${year}` : month}
                    </p>
                  </div>
                  <button
                    aria-label="Close project details"
                    onClick={onClose}
                    className="absolute right-4 top-4 border border-white/30 bg-black/60 px-3 py-2 text-white transition hover:border-white/70 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="p-5 text-left md:p-8">
                    <MarkdownParser
                      markdownString={description}
                      className="prose prose-invert max-w-none break-words prose-h1:text-2xl prose-h1:leading-tight prose-h2:text-xl prose-h2:leading-snug md:prose-h1:text-4xl md:prose-h2:text-3xl"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 border-t border-white/10 p-5 md:p-8">
                    {websiteLink && (
                      <Link
                        href={websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:w-auto"
                      >
                        <span className="flex items-center justify-center gap-3 border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.16em] transition hover:border-white/80 hover:bg-white/10 md:tracking-[0.2em]">
                          Visit Website
                          <ArrowTopRightOnSquareIcon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    )}
                    {codeLink && (
                      <Link
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:w-auto"
                      >
                        <span className="flex items-center justify-center gap-3 border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.16em] transition hover:border-white/80 hover:bg-white/10 md:tracking-[0.2em]">
                          View Code
                          <CodeBracketIcon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
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
