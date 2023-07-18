"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import { useRouter } from "next/navigation";
import axios from "axios";

type InitialValues = {
  inventoryName: string;
  inventoryDesc: string;
  category: string;
  price: number;
  stockAmount: number;
};

export default function EditInventory({ params }: { params: { id: string } }) {
  const router = useRouter();

  // Yup & Formik setup
  const inventorySchema = object({
    inventoryName: string().required("Inventory name required"),
    inventoryDesc: string(),
    category: string().required("Category required"),
    price: number().min(0, "Invalid price").required("Price required"),
    stockAmount: number()
      .min(0, "Invalid stock amount")
      .integer("Number should be integer")
      .required("Price required"),
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
    console.log(values);
    console.log(params.id);
  };

  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <DashboardHeader headerTitle="Edit Inventory" />
      <Formik
        initialValues={initialValues}
        validationSchema={inventorySchema}
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

          <div className="w-full flex flex-col gap-14 mt-6 sm:flex-row sm:justify-between">
            <button
              type="submit"
              className="w-fit flex items-center text-left gap-3 p-3 pr-5 rounded-lg opacity-70 bg-orange-500 bg-opacity-50 hover:opacity-100 hover:bg-opacity-80 active:bg-opacity-100 transition-all"
            >
              <Image
                src="/assets/icons/edit.png"
                alt="edit inventory"
                width={28}
                height={28}
              />
              Edit Inventory
            </button>

            <button className="w-fit flex items-center text-left gap-3 p-3 pr-5 rounded-lg opacity-70 bg-rose-600 bg-opacity-50 hover:opacity-100 hover:bg-opacity-80 active:bg-opacity-100 transition-all">
              <Image
                src="/assets/icons/delete.png"
                alt="delete inventory"
                width={28}
                height={28}
              />
              Delete Inventory
            </button>
          </div>
        </Form>
      </Formik>
    </main>
  );
}
