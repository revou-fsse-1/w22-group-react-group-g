"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import { useRouter } from "next/navigation";
import { API_INVENTORY } from "@/utils/ApiLinks";
import axios from "axios";
import { useEffect } from "react";

type InitialValues = {
  inventoryName: string;
  inventoryDesc: string;
  category: string;
  price: number;
  stockAmount: number;
};

export default function AddInventory() {
  const router = useRouter();

  // Yup & Formik setup
  const inventorySchema = object({
    inventoryName: string().required("Inventory name required"),
    inventoryDesc: string(),
    category: string().required("Category required"),
    price: number().min(0, "Invalid price").required("Price required"),
    stockAmount: number()
      .min(1, "Invalid stock amount")
      .integer("Number should be an integer")
      .required("Stock required"),
  });
  const initialValues: InitialValues = {
    inventoryName: "",
    inventoryDesc: "",
    category: "",
    price: 0,
    stockAmount: 0,
  };

  // Form submit handler
  const handleSubmit = async (values: InitialValues) => {
    try {
      const response = await axios.post(API_INVENTORY, values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      router.push("/dashboard");
    } catch (error) {
      throw new Error("Failed creating inventory");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      throw new Error("MISSING TOKEN");
    }
  }, []);

  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <DashboardHeader headerTitle="Add New Inventory" />
      <Formik
        initialValues={initialValues}
        validationSchema={inventorySchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className="w-full flex flex-col p-4 gap-4 rounded-md bg-[#0E141A]">
          <div className="w-full flex flex-col gap-2 sm:w-4/5 lg:w-3/5 xl:w-2/5">
            <label htmlFor="inventoryName" className="text-lg">
              Inventory Name
            </label>
            <Field
              name="inventoryName"
              type="text"
              placeholder="My New Product"
              className="p-2 rounded-md border-2 border-gray-800 placeholder-slate-500 bg-[#222E3F]"
            />
            <ErrorMessage
              component="span"
              name="inventoryName"
              className="text-sm text-red-600"
            />
          </div>

          <div className="w-full flex flex-col gap-2 sm:w-4/5 lg:w-3/5 xl:w-2/5">
            <label htmlFor="inventoryDesc" className="text-lg">
              Description
            </label>
            <Field
              name="inventoryDesc"
              as="textarea"
              rows="5"
              placeholder="My product description..."
              className="p-2 rounded-md border-2 resize-none border-gray-800 placeholder-slate-500 bg-[#222E3F]"
            />
          </div>

          <div className="w-full flex flex-col gap-2 sm:w-4/5 lg:w-3/5 xl:w-2/5">
            <label htmlFor="category" className="text-lg">
              Category
            </label>
            <Field
              name="category"
              type="text"
              placeholder="ex. Books"
              className="p-2 rounded-md border-2 border-gray-800 placeholder-slate-500 bg-[#222E3F]"
            />
            <ErrorMessage
              component="span"
              name="category"
              className="text-sm text-red-600"
            />
          </div>

          <div className="w-full flex flex-col gap-2 sm:w-4/5 lg:w-3/5 xl:w-2/5">
            <label htmlFor="price" className="text-lg">
              Price per Item
            </label>
            <Field
              name="price"
              type="number"
              className="p-2 rounded-md border-2 border-gray-800 placeholder-slate-500 bg-[#222E3F]"
            />
            <ErrorMessage
              component="span"
              name="price"
              className="text-sm text-red-600"
            />
          </div>

          <div className="w-full flex flex-col gap-2 sm:w-4/5 lg:w-3/5 xl:w-2/5">
            <label htmlFor="stockAmount" className="text-lg">
              Stock
            </label>
            <Field
              name="stockAmount"
              type="number"
              className="p-2 rounded-md border-2 border-gray-800 placeholder-slate-500 bg-[#222E3F]"
            />
            <ErrorMessage
              component="span"
              name="stockAmount"
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
                alt="create inventory"
                width={28}
                height={28}
              />
              Create Inventory
            </button>
          </div>
        </Form>
      </Formik>
    </main>
  );
}
