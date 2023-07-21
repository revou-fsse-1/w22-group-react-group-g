"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import axios from "axios";
import { API_REGISTER } from "@/utils/ApiLinks";
import Logo from "@/components/Logo";

type InitialSignupValues = {
  username: string;
  email: string;
  password: string;
};

export default function Signup() {
  const router = useRouter();

  // Yup & Formik setup
  const signupSchema = object({
    username: string()
      .min(3, "Username too short")
      .required("Username required"),
    email: string().email("Invalid email").required("Email required"),
    password: string()
      .min(5, "Password too short")
      .required("Password required"),
  });
  const initialValues: InitialSignupValues = {
    username: "",
    email: "",
    password: "",
  };

  // Form submit handler
  const handleSubmit = async (values: InitialSignupValues) => {
    console.log("form submitted with values:");
    console.log(values);
    try {
      const response = await axios.post(API_REGISTER, values);

      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="flex flex-col items-center px-5 py-5 pb-16 bg-[#0E141A]">
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <Logo width="64" height="58" />
            <h1 className="text-3xl text-[#1371FF] font-bold">Minicrate</h1>
          </div>
        </Link>
      </header>

      <section className="flex flex-col items-center -mt-11 pt-16 rounded-t-[2rem] bg-[#19222E]">
        <div className="w-3/5 min-w-fit max-w-lg flex flex-col items-center gap-6 py-8 px-4 rounded-[1.2rem] text-gray-100 bg-[#222E3F]">
          <h2 className="text-4xl font-semibold">Sign Up</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(props) => (
              <Form className="w-4/5 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="username" className="text-lg">
                    Username
                  </label>
                  <Field
                    name="username"
                    type="text"
                    placeholder="Johnny"
                    onChange={(e: React.ChangeEvent) => {
                      props.handleChange(e);
                    }}
                    onBlur={(e: React.ChangeEvent) => {
                      props.handleBlur(e);
                    }}
                    className="px-3 py-2 rounded-lg border-2 border-transparent placeholder-slate-600 bg-[#0E141A]"
                  />
                  <ErrorMessage
                    component="span"
                    name="username"
                    className="text-rose-600 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-lg">
                    E-mail
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="myemail@gmail.com"
                    onChange={(e: React.ChangeEvent) => {
                      props.handleChange(e);
                    }}
                    onBlur={(e: React.ChangeEvent) => {
                      props.handleBlur(e);
                    }}
                    className="px-3 py-2 rounded-lg border-2 border-transparent placeholder-slate-600 bg-[#0E141A]"
                  />
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="text-rose-600 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="text-lg">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="********"
                    onChange={(e: React.ChangeEvent) => {
                      props.handleChange(e);
                    }}
                    onBlur={(e: React.ChangeEvent) => {
                      props.handleBlur(e);
                    }}
                    className="px-3 py-2 rounded-lg border-2 border-transparent placeholder-slate-600 bg-[#0E141A]"
                  />
                  <ErrorMessage
                    component="span"
                    name="password"
                    className="text-rose-600 text-sm"
                  />
                </div>

                <div className="flex flex-col mt-3">
                  <button
                    type="submit"
                    className="px-4 py-3 rounded-lg text-lg font-semibold bg-[#0051CC]"
                  >
                    Signup
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="flex flex-col items-center">
            <p className="text-sm">Already have an account?</p>
            <Link href={"/login"}>
              <span className="text-lg text-[#0051CC]">Login</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
