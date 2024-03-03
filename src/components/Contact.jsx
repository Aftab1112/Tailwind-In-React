import React, { useState } from "react";
import Modal from "./Modal";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        Follow me on <a href="https://github.com/Aftab1112"></a>GitHub
      </div>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <Modal
        header={<p className="text-center font-bold">Let's Talk</p>}
        footer={
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-slate-400 px-6 py-3 rounded-md font-bold"
            >
              OK
            </button>
          </div>
        }
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam
        odit necessitatibus aliquid? A ipsam eveniet tempore fuga pariatur porro
        exercitationem aliquam deleniti, facilis voluptate tempora eum sunt
        molestiae assumenda?
      </Modal>
    </>
  );
}
