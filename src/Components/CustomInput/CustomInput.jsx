/* eslint-disable react/prop-types */
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text text-base -ml-1">{label}</span>
      </div>
      <input
        {...field}
        {...props}
        className={`input input-bordered w-full ${
          meta.touched && meta.error ? "input-error" : ""
        }`}
      />
      {meta.touched && meta.error ? (
        <div className="label">
          <span className="label-text-alt -ml-0.5 text-red-500">
            {meta.error}
          </span>
        </div>
      ) : (
        ""
      )}
    </label>
  );
};

export default CustomInput;
