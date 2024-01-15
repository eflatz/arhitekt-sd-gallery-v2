import { Transition } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import Work from "../models/Work";

export default function Modal({
  show,
  setModal,
  work,
  basePath,
}: {
  show: boolean;
  setModal: any;
  work: Work;
  basePath: string;
}) {
  const [isShown, setIsHown] = useState(show);

  return (
    <Transition
      show={isShown}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {(ref) => (
        <div
          ref={ref}
          className="fixed z-10 inset-0 overflow-y-auto"
          onClick={() => setModal(false)}
        >
          <div className="flex items-end justify-center min-h-screen sm:block sm:p-0">
            {/* <!--
                        Background overlay, show/hide based on modal state.
                        Entering: "ease-out duration-300"
                            From: "opacity-0"
                            To: "opacity-100"
                        Leaving: "ease-in duration-200"
                            From: "opacity-100"
                            To: "opacity-0"
                        --> */}
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            {/* <!--
                        Modal panel, show/hide based on modal state.

                        Entering: "ease-out duration-300"
                            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            To: "opacity-100 translate-y-0 sm:scale-100"
                        Leaving: "ease-in duration-200"
                            From: "opacity-100 translate-y-0 sm:scale-100"
                            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        --> */}
            <div
              className="absolute top-0 left-0 w-full h-screen bg-white text-left overflow-hidden shadow-xl transform transition-all flex"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="px-10 py-9 w-1/3 my-8 ml-8">
                {console.log("images", work.images)}
                <h4
                  style={{
                    fontSize: "2.7rem",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  {work.students.join(", ")}
                </h4>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "1.7rem",
                    lineHeight: 1.2,
                    color: "#808080",
                  }}
                >
                  {work.title}
                </p>
                <p className="mb-4" style={{ fontSize: "1.2rem" }}>
                  {work.year} / {work.study} / {work.semester} / {work.course}
                </p>
              </div>
              <div className="flex w-2/3 relative my-8 mr-8">
                <Image
                  src={`${basePath}${work.imageOne[0].uri.substr(9)}`}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="right top"
                  alt="Studij dizajna / radovi"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
