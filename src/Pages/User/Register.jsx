/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { registerSchema } from "../../Schemas/inputValidation";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../hooks/store";

const Register = () => {
  const navigate = useNavigate();

  const submitForm = async (values, actions) => {
    console.log(values);
    useUserStore.getState().register(values, navigate);
    actions.resetForm();
  };

  return (
    <div className="min-h-[90vh]">
      <div className="xl:w-1/3 px-7 xl:px-0 mx-auto mt-16">
        <div>
          <h1 className="text-5xl font-bold text-center">Register</h1>
          <span className="w-20 h-1 bg-blue-300 block mx-auto mt-2"></span>
        </div>

        <div className="mt-10">
          <Formik
            initialValues={{
              name: "",
              email: "",
              address: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={submitForm}
          >
            {(props) => (
              <Form>
                <CustomInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <CustomInput
                  label="Address"
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                />
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <div className="mt-5">
                  <button
                    type="submit"
                    className="btn w-full"
                    disabled={props.isSubmitting}
                  >
                    Register
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <p className="mt-5 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-600 duration-300"
          >
            Login here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
