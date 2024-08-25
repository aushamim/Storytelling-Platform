/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { loginSchema } from "../../Schemas/inputValidation";
import { useUserStore } from "../../hooks/store";

const Login = () => {
  const navigate = useNavigate();

  const submitForm = async (values, actions) => {
    console.log(values);
    useUserStore.getState().login(values, navigate);
    actions.resetForm();
  };

  return (
    <div className="min-h-[90vh]">
      <div className="xl:w-1/3 px-7 xl:px-0 mx-auto mt-16">
        <div>
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <span className="w-20 h-1 bg-blue-300 block mx-auto mt-2"></span>
        </div>

        <div className="mt-10">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={submitForm}
          >
            {(props) => (
              <Form>
                <CustomInput
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
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
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <p className="mt-5 text-center">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-600 duration-300"
          >
            Register here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
