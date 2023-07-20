"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import { useRouter } from "next/navigation";
import { API_INVENTORY, API_TRANSACTION } from "@/utils/ApiLinks";
import axios from "axios";
import useSWR from "swr";
import { useContext } from "react";
import { DashboardContext } from "@/app/dashboard/layout";

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
  const { userInventory }: any = useContext(DashboardContext);

  // Fetch handler
  const fetcher = (url: string) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        return data.data;
      });
  const { data, isLoading } = useSWR(
    `${API_TRANSACTION}/${params.id}`,
    fetcher
  );
  const inventory = useSWR(`${API_INVENTORY}`, fetcher);

  // Handles max. order amount based on current inventory stock
  const setMaxAmount = () => {
    if (userInventory !== undefined && !isLoading) {
      const currentInventory = userInventory.find(
        (inventory: any) => inventory.inventoryName == data.inventoryName
      );
      return currentInventory.stockAmount + data.amount;
    }

    return 10;
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
    orderDate: isLoading || inventory.isLoading ? "" : data.orderDate,
    orderUsername: isLoading || inventory.isLoading ? "" : data.orderUsername,
    orderStatus: isLoading || inventory.isLoading ? "" : data.orderStatus,
    inventoryName: isLoading || inventory.isLoading ? "" : data.inventoryName,
    amount: isLoading || inventory.isLoading ? 0 : data.amount,
  };

  // Delete handler
  const handleDelete = async (values: InitialValues) => {
    try {
      const currentInventory = inventory.data.find(
        (inventory: any) => inventory.inventoryName == values.inventoryName
      );

      // Delete current transaction
      const response = await axios.delete(`${API_TRANSACTION}/${params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // Update inventory stock
      const inventoryRes = await axios.patch(
        `${API_INVENTORY}/${currentInventory.inventoryId}`,
        {
          stockAmount: currentInventory.stockAmount + data.amount,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      router.refresh();
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  // Form submit handler
  const handleSubmit = async (values: InitialValues) => {
    try {
      const currentInventory = inventory.data.find(
        (inventory: any) => inventory.inventoryName == values.inventoryName
      );

      // Update current transaction
      const transactionRes = await axios.patch(
        `${API_TRANSACTION}/${params.id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // Update inventory stock
      const inventoryRes = await axios.patch(
        `${API_INVENTORY}/${currentInventory.inventoryId}`,
        {
          stockAmount:
            currentInventory.stockAmount + (data.amount - values.amount),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      router.refresh();
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <DashboardHeader headerTitle="Edit Transaction" />
      {isLoading || inventory.isLoading ? (
        <span>Loading...</span>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={transactionSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
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
                  disabled
                  className="p-2 rounded-md border-2 border-gray-800 placeholder-slate-500 bg-[#222E3F]"
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

                <button
                  type="button"
                  onClick={() => {
                    handleDelete(props.values);
                  }}
                  className="w-fit flex items-center text-left gap-3 p-3 pr-5 rounded-lg opacity-70 bg-rose-600 bg-opacity-50 hover:opacity-100 hover:bg-opacity-80 active:bg-opacity-100 transition-all"
                >
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
          )}
        </Formik>
      )}
    </main>
  );
}
