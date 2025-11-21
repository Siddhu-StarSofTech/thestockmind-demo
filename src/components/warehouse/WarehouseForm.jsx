import React from "react";
import { useForm } from "react-hook-form";
import TextBox from "../common/TextBox";

export default function WarehouseForm({
  onClose,
  buttonText,
  defaultData,
  mode = "add",
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      warehouseName: defaultData?.name || "",
      contactName: defaultData?.contactName || "",
      phoneCode: defaultData?.phoneCode || "IN",
      contactNumber: defaultData?.contactNumber || "",
      email: defaultData?.email || "",
      state: defaultData?.state || "",
      pincode: defaultData?.pincode || "",
      address: defaultData?.address || "",
      capacity: defaultData?.capacity || "",
    },
  });

  const phoneCode = watch("phoneCode");

  const phonePlaceholders = {
    IN: "+91 90807060XX",
    US: "+1 9800000000",
    UK: "+44 7700000000",
  };

  const onSubmit = (data) => {
    console.log(mode === "add" ? "Added:" : "Updated:", data);

    if (typeof onClose === "function") onClose(); // auto close modal
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextBox
          label="Warehouse Name"
          name="warehouseName"
          register={register}
          errors={errors}
          placeholder="Enter Warehouse Name"
          validationType="char"
          rules={{ required: "Required" }}
        />

        <TextBox
          label="Contact Name"
          name="contactName"
          register={register}
          errors={errors}
          placeholder="Enter Contact Name"
          validationType="char"
          rules={{ required: "Required" }}
        />
      </div>

      {/* Contact Number */}
      <div>
        <label className="text-sm text-gray-600 mb-1 font-medium">
          Warehouse Contact Number
        </label>

        <div className="flex border rounded-lg overflow-hidden">
          <select
            {...register("phoneCode")}
            className="border-r p-2 text-sm bg-white outline-none"
          >
            <option value="IN">IN</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
          </select>

          <input
            {...register("contactNumber", {
              required: "Phone is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Must be 10 digits",
              },
            })}
            placeholder={phonePlaceholders[phoneCode]}
            maxLength={10}
            className="px-2 py-2 text-sm w-full outline-none"
          />
        </div>

        {errors.contactNumber && (
          <p className="text-sm text-red-600 mt-1">
            {errors.contactNumber.message}
          </p>
        )}
      </div>

      {/* Email */}
      <TextBox
        label="Email ID"
        name="email"
        register={register}
        errors={errors}
        placeholder="Enter Email ID"
        type="email"
        rules={{
          required: "Required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Invalid email",
          },
        }}
      />

      {/* State + Pincode */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextBox
          label="State"
          name="state"
          register={register}
          errors={errors}
          options={["Maharashtra", "Gujarat", "Karnataka"]}
          rules={{ required: "Required" }}
        />

        <TextBox
          label="Pincode"
          name="pincode"
          register={register}
          errors={errors}
          placeholder="Enter Pincode"
          validationType="number"
          rules={{
            required: "Required",
            minLength: { value: 6, message: "Must be 6 digits" },
            maxLength: { value: 6, message: "Must be 6 digits" },
          }}
        />
      </div>

      {/* Address */}
      <TextBox
        label="Address"
        name="address"
        register={register}
        errors={errors}
        placeholder="Enter Address"
        isTextArea
        rules={{ required: "Required" }}
      />

      {/* Capacity */}
      <TextBox
        label="Capacity (in SKUs)"
        name="capacity"
        register={register}
        errors={errors}
        placeholder="Enter Capacity"
        validationType="number"
        rules={{ required: "Required" }}
      />

      <button
        type="submit"
        className="w-full bg-purple-600 text-white rounded-lg py-2 mt-2 hover:bg-purple-700"
      >
        {buttonText}
      </button>
    </form>
  );
}
