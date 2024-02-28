"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  // Please update the Access Key in the .env
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "b9068238-355e-45ff-aeea-8506fd26af57";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Mind Technica",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
      router.push('./success');
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mb-10">
        <input
          {...register("botcheck")}
          type="checkbox"
          className="hidden"
          style={{ display: "none" }}></input>
        <input
          type="hidden"
          {...register("redirect")}
          value="./success" />

        <div className="mb-3">
          <input
            {...register("name", { required: true })}
            className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4 w-full"
            placeholder="Name*"
            type="text"
            id="yourname" />
        </div>

        <div className="mb-3">
          <input
            {...register("email", { required: true })}
            className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4 w-full"
            placeholder="Email*"
            type="email"
            id="youremail" />
        </div>

        <div className="mb-3">
          <input
            {...register("whatservice", { required: true })}
            className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4 w-full"
            placeholder="Mobile Number*"
            typeof="tel"
            id="whatservice"></input>
        </div>

        <div className="mb-3">
          <input
            {...register("message", { required: true })}
            className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4 w-full"
            placeholder="Type your message here*"
            id="yourmessage"></input>
        </div>

        <button className="w-[200px] h-12 px-6 py-3 hover:bg-emerald-600 rounded-[5px] border-gold border-2 hover:border-0 text-gold hover:text-white justify-center items-center gap-2 inline-flex">
          <div className="text-base font-semibold leading-normal">Send</div>
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </>
  );
}
