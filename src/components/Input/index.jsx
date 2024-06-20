import React, { useState } from "react";
import { INPUT_TYPE_FEILD } from "../../utils/variables";

function index(props) {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibilityHandler = () => setIsVisible((prevState) => !prevState);

  const inputType = isVisible
    ? INPUT_TYPE_FEILD.PASSWORD
    : INPUT_TYPE_FEILD[props.type] == "password"
    ? "text"
    : INPUT_TYPE_FEILD[props.type];

  const PasswordSwitch = (
    <span
      className={`absolute right-1 top-1 rounded-[4px] cursor-pointer w-[60px] text-center p-2 px-2 border-${props.colorClass} text-${props.colorClass} switch-${props.colorClass}`}
      onClick={changeVisibilityHandler}
    >
      {isVisible ? "Hide" : "Show"}
    </span>
  );

  const classes = `form-inp resize-none rounded-md w-full border-2 border-solid p-2 text-lg focus:text-black focus:placeholder:text-slate-300 ${
    props.state.isValid == false
      ? "border-red-400 text-red-400 placeholder:text-red-300"
      : `input-${props.colorClass} text-${props.colorClass}`
  }`;

  return (
    <fieldset className="flex flex-col text-slate-500">
      <div className="relative">
        {console.log(inputType)}
        {inputType == "textarea" ? (
          <textarea
            type={[inputType]}
            placeholder={props.label}
            onChange={props.state.onChange}
            onBlur={props.state.onBlur}
            value={props.state.value}
            rows={2}
            className={classes}
          />
        ) : (
          <input
            type={inputType}
            placeholder={props.label}
            onChange={props.state.onChange}
            onBlur={props.state.onBlur}
            value={props.state.value}
            className={classes}
          />
        )}
        <label
          className={`form-lbl font-semibold absolute -top-6 -left-[7px] opacity-100 duration-75 ml-2 text-[1rem] lbl-${props.colorClass}`}
        >
          {props.label}
        </label>
        {INPUT_TYPE_FEILD[props.type] == "password" && PasswordSwitch}
      </div>
      {props.state.isValid == false && (
        <span className="text-red-400 text-start mt-[1px]">
          {props.validationMsg}
        </span>
      )}
    </fieldset>
  );
}

export default index;
