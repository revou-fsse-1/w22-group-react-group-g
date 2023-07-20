"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import { useRouter } from "next/navigation";
import { API_INVENTORY, API_TRANSACTION } from "@/utils/ApiLinks";
import axios from "axios";
import { useContext, useState } from "react";
import { DashboardContext } from "@/app/dashboard/layout";

type InitialValues = {
  orderDate: string;
  orderUsername: string;
  orderStatus: string;
  inventoryName: string;
  amount: number;
};

export default function AddTransaction() {
  const router = useRouter();

  const { userInventory }: any = useContext(DashboardContext);

  // Handles max. order amount based on current inventory stock
  const [inventorySelectedOption, setInventorySelectedOption] =
    useState<number>(0);
  const setMaxAmount = () => {
    return !userInventory
      ? 10
      : userInventory[inventorySelectedOption].stockAmount;
  };

  // Yup & Formik setup
  const transactionSchema = object({
    orderDate: string().required("Transaction date required"),
    orderUsername: string().required("Username required"),
    orderStatus: string().required("Order status required"),
    inventoryName: string().required("Inventory name required"),
    amount: number()
      .min(1, "Invalid amount")
      .max(setMaxAmount(), "Ordered amount exceeds current stocks")
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
    try {
      const transactionRes = await axios.post(API_TRANSACTION, values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const inventoryRes = await axios.patch(
        `${API_INVENTORY}/${userInventory[inventorySelectedOption].inventoryId}`,
        {
          stockAmount:
            userInventory[inventorySelectedOption].stockAmount - values.amount,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      router.refresh();
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <DashboardHeader headerTitle="Add New Transaction" />
      <Formik
        initialValues={initialValues}
        validationSchema={transactionSchema}
        onSubmit={(values) => handleSubmit(values)}
        validateOnChange={false}
      >
        {(props) => (
          <Form className="w-full flex flex-col p-4 gap-4 rounded-md bg-[#0E141A]">
            <div className="w-full flex flex-col gap-2 sm:w-4/5 lg:w-3/5 xl:w-2/5">
              <label htmlFor="inventoryName" className="text-lg">
                Inventory Name
              </label>
              <Field
                name="inventoryName"
                as="select"
                className="p-2 rounded-md border-2 border-gray-800 placeholder-slate-500 bg-[#222E3F]"
                onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                  props.handleChange(e);
                  setInventorySelectedOption(e.currentTarget.selectedIndex - 1);
                }}
              >
                <option value="" disabled>
                  - SELECT INVENTORY -
                </option>
                {!userInventory ? (
                  <option value="" disabled>
                    Loading...
                  </option>
                ) : (
                  userInventory.map((inventory: any) => (
                    <option
                      key={inventory.inventoryId}
                      value={inventory.inventoryName}
                    >
                      {inventory.inventoryName}
                    </option>
                  ))
                )}
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
              <ErrorMessage
                component="span"
                name="orderUsername"
                className="text-sm text-red-600"
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
                <option value="Awaiting Payment">Awaiting Payment</option>
                <option value="In Process">In Process</option>
                <option value="Shipping">Shipping</option>
                <option value="Delivered">Delivered</option>
              </Field>
              <ErrorMessage
                component="span"
                name="orderStatus"
                className="text-sm text-red-600"
              />
            </div>

            <div className="w-full flex flex-col gap-2 mt-6 sm:w-4/5 lg:w-3/5 xl:w-2/5">
              <button
                type="submit"
                className="w-fit flex items-center text-left gap-3 p-3 pr-5 rounded-lg opacity-70 bg-[#0051CC] bg-opacity-50 hover:opacity-100 hover:bg-opacity-80 active:bg-opacity-100 transition-all"
              >
                <Image
                  src="/assets/icons/add.png"
                  alt="create transaction"
                  width={28}
                  height={28}
                />
                Create Transaction
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}
