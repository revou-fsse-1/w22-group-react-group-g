"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import { useRouter } from "next/navigation";
import { API_TRANSACTION } from "@/utils/ApiLinks";
import axios from "axios";

type InitialValues = {
  orderDate: string;
  orderUsername: string;
  orderStatus: string;
  inventoryName: string;
  amount: number;
};

export default function EditTransaction({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  // Yup & Formik setup
  const transactionSchema = object({
    orderDate: string().required("Transaction date required"),
    orderUsername: string().required("Username required"),
    orderStatus: string().required("Order status required"),
    inventoryName: string().required("Inventory name required"),
    amount: number()
      .min(1, "Invalid amount")
      .integer("Number should be an integer")
      .required("Amount required"),
  });
  const initialValues: InitialValues = {
    orderDate: "",
    orderUsername: "",
    orderStatus: "",
    inventoryName: "",
    amount: 0,
  };

  // Form submit handler
  const handleSubmit = async (values: InitialValues) => {
    console.log(values);
    console.log(params.id);
  };

  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <DashboardHeader headerTitle="Edit Transaction" />
      <Formik
        initialValues={initialValues}
        validationSchema={transactionSchema}
        onSubmit={(values) => handleSubmit(values)}
        validateOnChange={false}
      >
        <Form className="w-full flex flex-col p-4 gap-4 rounded-md bg-[#0E141A]">
          <div className="w-full flex flex-col gap-2 sm:w-4/5 lg:w-3/5 xl:w-2/5">
            <label htmlFor="inventoryName" className="text-lg">
              Inventory Name
            </label>
            <Field
              name="inventoryName"
              as="select"
              className="p-2 rounded-md border-2 border-gray-800 placeholder-slate-500 bg-[#222E3F]"
            >
              <option value="" disabled>
                - SELECT INVENTORY -
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Field>
            <ErrorMessage
              component="span"
              name="inventoryName"
              className="text-sm text-red-600"
            />
          </div>

          <div className="w-full flex flex-col gap-2 sm:w-4/5 lg:w-3/5 xl:w-2/5">
            <label htmlFor="orderUsername" className="text-lg">
              Ordered By
            </label>
            <Field
              name="orderUsername"
              type="text"
              placeholder="ex. John"
              className="p-2 rounded-md border-2 resize-none border-gray-800 placeholder-slate-500 bg-[#222E3F]"
            />
          </div>

          <div className="w-full flex flex-col gap-2 sm:w-4/5 lg:w-3/5 xl:w-2/5">
            <label htmlFor="orderDate" className="text-lg">
              Transaction Date
            </label>
            <Field
              name="orderDate"
              type="date"
              className="p-2 rounded-md border-2 border-gray-800 placeholder-slate-500 bg-[#222E3F]"
            />
            <ErrorMessage
              component="span"
              name="orderDate"
              className="text-sm text-red-600"
            />
          </div>

          <div className="w-full flex flex-col gap-2 sm:w-4/5 lg:w-3/5 xl:w-2/5">
            <label htmlFor="amount" className="text-lg">
              Order Amount
            </label>
            <Field
              name="amount"
              type="number"
              className="p-2 rounded-md border-2 border-gray-800 placeholder-slate-500 bg-[#222E3F]"
            />
            <ErrorMessage
              component="span"
              name="amount"
              className="text-sm text-red-600"
            />
          </div>

          <div className="w-full flex flex-col gap-2 sm:w-4/5 lg:w-3/5 xl:w-2/5">
            <label htmlFor="orderStatus" className="text-lg">
              Order Status
            </label>
            <Field
              name="orderStatus"
              as="select"
              className="p-2 rounded-md border-2 border-gray-800 placeholder-slate-500 bg-[#222E3F]"
            >
              <option value="" disabled>
                - SELECT STATUS -
              </option>
              <option value="awaiting payment">Awaiting Payment</option>
              <option value="in process">In Process</option>
              <option value="shipping">Shipping</option>
              <option value="delivered">Delivered</option>
            </Field>
            <ErrorMessage
              component="span"
              name="orderStatus"
              className="text-sm text-red-600"
            />
          </div>

          <div className="w-full flex flex-col gap-14 mt-6 sm:flex-row sm:justify-between">
            <button
              type="submit"
              className="w-fit flex items-center text-left gap-3 p-3 pr-5 rounded-lg opacity-70 bg-orange-500 bg-opacity-50 hover:opacity-100 hover:bg-opacity-80 active:bg-opacity-100 transition-all"
            >
              <Image
                src="/assets/icons/edit.png"
                alt="edit transaction"
                width={28}
                height={28}
              />
              Edit Transaction
            </button>

            <button className="w-fit flex items-center text-left gap-3 p-3 pr-5 rounded-lg opacity-70 bg-rose-600 bg-opacity-50 hover:opacity-100 hover:bg-opacity-80 active:bg-opacity-100 transition-all">
              <Image
                src="/assets/icons/delete.png"
                alt="delete transaction"
                width={28}
                height={28}
              />
              Delete Transaction
            </button>
          </div>
        </Form>
      </Formik>
    </main>
  );
}
