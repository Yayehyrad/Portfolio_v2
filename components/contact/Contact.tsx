"use client";
import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../util/Submit_Btn";
import toast from "react-hot-toast";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);
  const action = async (formData: FormData) => {
    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
    }
    if (data) {
      toast.success("Email success");
    }
  };
  return (
    <section
      id="contact"
      ref={ref}
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              action={action}
            >
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    className={` contactInput`}
                    type="text"
                    name="senderName"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input className={` contactInput`} type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  className={`  contactInput`}
                  type="email"
                  name="senderEmail"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input className={`  contactInput`} type="text" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  className={` contactTextArea`}
                  cols={30}
                  rows={8}
                  name="message"
                ></textarea>
              </div>
              <SubmitBtn />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
