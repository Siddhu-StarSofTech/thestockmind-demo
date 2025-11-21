import React from "react";
import { useForm } from "react-hook-form";
import TextBox from "../common/TextBox";

export default function StockForm({ onClose, mode = "add", editData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productId: editData?.productId || "",
      warehouseId: editData?.warehouseId || "",
      quantity: editData?.quantity || "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    onClose && onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 bg-white rounded-xl shadow"
    >
      {/* Product ID */}
      <TextBox
        label="Product ID"
        name="productId"
        register={register}
        errors={errors}
        options={["REMA0123", "REMA0456"]}
        rules={{ required: "Product ID is required" }}
      />

      {/* Warehouse ID */}
      <TextBox
        label="Warehouse ID"
        name="warehouseId"
        register={register}
        errors={errors}
        options={["REMA0123", "REMA0456"]}
        rules={{ required: "Warehouse ID is required" }}
      />

      {/* Quantity */}
      <TextBox
        label="Quantity (in SKUs)"
        name="quantity"
        register={register}
        errors={errors}
        placeholder="Enter Quantity"
        validationType="number"
        rules={{ required: "Quantity is required" }}
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
      >
        {mode === "add" ? "Add Stock" : "Update Stock"}
      </button>
    </form>
  );
}
