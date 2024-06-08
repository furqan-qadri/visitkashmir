"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Feedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [state, handleSubmit] = useForm("xvoejepa");
  if (state.succeeded) {
    return (
      <span className="text-white text-xl">
        <span>Feedback dini khaetri tuhind shukriya!</span> <br />
        <span className=" italic text-base">
          Thanks for your feedback!{" "}
        </span>{" "}
        <br></br>
      </span>
    );
  }

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <button onClick={toggleModal} className=" p-2 feedback-button rounded-xl">
        Give Feedback
      </button>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleModal}>
              &times;
            </button>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Naav (Name)</label>
              <input id="name" type="text" name="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <label htmlFor="message">Feedback/Suggestions</label>
              <textarea id="message" name="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-4 p-2 bg-[#4caf50] text-white rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .feedback-button {
          background-color: #4caf50;
          border: none;
          color: white;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 400px;
          width: 100%;
          margin: 20px;
          position: relative;
        }
        .close-button {
          background: none;
          border: none;
          font-size: 1.5rem;
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-top: 10px;
        }
        input,
        textarea {
          margin-top: 5px;
          padding: 8px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        input[type="submit"] {
          background-color: #4caf50;
          color: white;
          border: none;
          padding: 10px;
          margin-top: 10px;
          cursor: pointer;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
