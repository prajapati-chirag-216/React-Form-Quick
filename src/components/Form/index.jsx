import React, { Fragment } from "react";
import Input from "../Input/index.jsx";
import { FORM_VARIANTS } from "../../utils/variables/index.js";
import { VALIDATION_MESSAGES, useForm } from "inputs-validator-react";
import "./index.css";

export const Form = (props) => {
  // [INPUT_TYPES.NAME, INPUT_TYPES.EMAIL, INPUT_TYPES.MOBILE] this should be inline with your form input feilds
  // from this customhook predicts that name feild is at top then email and then mobile
  // also it returns state in same order like below

  const [formState, ...inputStates] = useForm(props.inputTypes);

  const submitFormHandler = (eve) => {
    eve.preventDefault();
    // you will get response as array of data and order will be same as you passed in `useForm` hook
    const response = formState.onSubmit();
    if (response.success) {
      // this will convert array of data into object and pass it to user
      const data = {};
      props.labels.forEach(
        (label, index) => (data[label] = response.data[index])
      );
      props.onSubmit(data);
    }
  };

  const variant = props?.variant?.toUpperCase() || "DEFAULT";
  const colorClass = FORM_VARIANTS[variant];

  return (
    <div
      className={`max-w-[33rem] m-auto min-w-[20rem] p-10 mt-10 rounded-md shadow-md bg-light-${colorClass}`}
    >
      {props?.title && (
        <Fragment>
          <h1
            className={`text-[2rem] text-${colorClass} capitalize font-semibold text-left`}
          >
            {props.title}
          </h1>
          <hr className={`h-[4px] ${colorClass} mb-9 w-10`} />
        </Fragment>
      )}
      <form
        className="w-100 h-100 flex flex-col gap-7 form"
        onSubmit={submitFormHandler}
        id="form"
      >
        {inputStates.map((inputState, index) => {
          const inputType = props.inputTypes[index];
          return (
            <Input
              state={inputState}
              key={index}
              label={props.labels[index]}
              validationMsg={VALIDATION_MESSAGES[inputType]}
              colorClass={colorClass}
              type={inputType}
            />
          );
        })}
        <button
          type="submit"
          className={`${colorClass} rounded-md select-none p-2 text-2xl w-100 mt-3 text-white duration-75`}
        >
          {props?.btnLabel || "Submit"}
        </button>
      </form>
    </div>
  );
};
