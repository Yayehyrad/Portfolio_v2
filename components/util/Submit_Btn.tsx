import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <div className="w-full">
      <button
        // onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
        //   handleSend(event)
        // }
        type="submit"
        className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
        disabled={pending}
      >
        {pending ? "Sending ..." : "Send Message"}
      </button>
    </div>
  );
}
