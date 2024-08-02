"use client";
import { storeFeedback } from "@/utils/actions";
import { notification } from "antd";
import { ChangeEvent, useState } from "react";
// eslint-disable-next-line @next/next/no-async-client-component
export default async function Feedback() {
  const [api, contextHolder] = notification.useNotification();
  const [feedback, setFeedback] = useState({
    Name: "",
    email: "",
    mobile: "",
    rating: "",
    sfeedback: "",
    iwebsite: "",
  });

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };
  const clearForm = () => {
    setFeedback({
      Name: "",
      email: "",
      mobile: "",
      rating: "",
      sfeedback: "",
      iwebsite: "",
    });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await storeFeedback(feedback);
    if (data === "success") {
      api["success"]({
        message: "New Feedback Added",
        description: "Your Feedback upload successfully",
        showProgress: true,
        duration: 3,
        closeIcon: false,
      });
      clearForm();
    } else {
      api["error"]({
        message: "Feedback Upload Failed",
        description:
          "We encountered an issue uploading your feedback. Please try again.",
        showProgress: true, // Progress bar isn't usually needed for errors
        duration: 3, // 5 seconds
        closeIcon: false,
      });
    }
  };
  await new Promise((resolve) => setTimeout(resolve, 200));
  return (
    <>
      {contextHolder}
      <div className='flex pt-16 sm:pb-16 px-5 flex-col justify-center items-center min-h-screen py-6 bg-gray-100'>
        <h1 className='text-2xl sm:text-4xl font-extrabold text-gray-800 py-6'>
          FEEDBACK
        </h1>
        <div className='w-full md:w-[50vw] bg-white shadow-md rounded-md p-8'>
          <h2 className='text-center font-serif text-xl font-bold mb-6 text-gray-700'>
            Your Feedback is Important to Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col md:flex-row justify-between gap-5'>
                <input
                  type='text'
                  name='Name'
                  value={feedback.Name}
                  onChange={handleChange}
                  placeholder='Enter Name'
                  className='border-b-2 border-blue-500 w-full md:w-1/3 px-2 py-1 outline-none focus:border-blue-700'
                  required
                />
                <input
                  type='email'
                  name='email'
                  value={feedback.email}
                  onChange={handleChange}
                  placeholder='Enter Email'
                  className='border-b-2 border-blue-500 w-full md:w-1/3 px-2 py-1 outline-none focus:border-blue-700'
                  required
                />
                <input
                  type='text'
                  name='mobile'
                  value={feedback.mobile}
                  onChange={handleChange}
                  placeholder='Enter Mobile No'
                  className='border-b-2 border-blue-500 w-full md:w-1/3 px-2 py-1 outline-none focus:border-blue-700'
                  required
                />
              </div>
              <div className='mt-6'>
                <h3 className='font-serif text-xl font-bold mb-2 text-gray-700'>
                  Website Rating:
                </h3>
                <div className='flex flex-col gap-2'>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name='rating'
                      value='excellent'
                      checked={feedback.rating === "excellent"}
                      onChange={handleChange}
                      className='mr-2'
                    />
                    Excellent
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name='rating'
                      value='good'
                      checked={feedback.rating === "good"}
                      onChange={handleChange}
                      className='mr-2'
                    />
                    Good
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name='rating'
                      value='better'
                      checked={feedback.rating === "better"}
                      onChange={handleChange}
                      className='mr-2'
                    />
                    Better
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name='rating'
                      value='poor'
                      checked={feedback.rating === "poor"}
                      onChange={handleChange}
                      className='mr-2'
                    />
                    Poor
                  </label>
                </div>
              </div>
              <div className='mt-6'>
                <h3 className='font-serif text-xl font-bold mb-2 text-gray-700'>
                  Specific Feedback:
                </h3>
                <textarea
                  name='sfeedback'
                  value={feedback.sfeedback}
                  onChange={handleChange}
                  placeholder='Please write to us'
                  rows={3}
                  className='border border-gray-300 w-full rounded-md px-3 py-2 outline-none focus:border-blue-500'
                ></textarea>
              </div>
              <div className='mt-6'>
                <h3 className='font-serif text-xl font-bold mb-2 text-gray-700'>
                  Issues with Website:
                </h3>
                <textarea
                  name='iwebsite'
                  value={feedback.iwebsite}
                  onChange={handleChange}
                  placeholder='Please write to us'
                  rows={3}
                  className='border border-gray-300 w-full rounded-md px-3 py-2 outline-none focus:border-blue-500'
                ></textarea>
              </div>
              <div className='flex justify-center mt-6'>
                <button
                  type='submit'
                  className='bg-blue-500 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors'
                >
                  POST
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
