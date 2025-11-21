import React, { useEffect } from "react";
import TextBox from "../common/TextBox";
import { useForm } from "react-hook-form";

export default function InvoiceForm({
  buttonText = "Add Employee",
  defaultData,
  onClose,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (defaultData) {
      reset(defaultData);
    }
  }, [defaultData, reset]);

  const onSubmit = (data) => {
    console.log("Employee Form Data:", data);
    reset();
    if (onClose) onClose(); // close modal
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name + ID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextBox
          label="Employee Name"
          name="employeeName"
          register={register}
          errors={errors}
          placeholder="Enter Employee Name"
          validationType="char"
          rules={{ required: "Name is required" }}
        />

        <TextBox
          label="Employee ID"
          name="employeeId"
          register={register}
          errors={errors}
          placeholder="Enter Employee ID"
          validationType="char"
          rules={{ required: "Employee ID is required" }}
        />
      </div>

      {/* Department + Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextBox
          label="Department ID"
          name="departmentId"
          register={register}
          errors={errors}
          placeholder="Enter Department ID"
          rules={{ required: "Department ID required" }}
        />

        <div>
          <label className="text-sm text-gray-600 mb-1 font-medium">
            Hire Date & Time
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              {...register("hireDate", { required: "Hire date required" })}
              className="border rounded-lg px-3 py-2 text-sm w-2/3 outline-none"
            />
            <input
              type="time"
              {...register("hireTime", { required: "Hire time required" })}
              className="border rounded-lg px-3 py-2 text-sm w-1/3 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextBox
          label="Email ID"
          name="email"
          type="email"
          register={register}
          errors={errors}
          placeholder="Enter Email ID"
          rules={{ required: "Email is required" }}
        />

        <TextBox
          label="Phone Number"
          name="phoneNumber"
          register={register}
          errors={errors}
          placeholder="+1 9876543210"
          validationType="number"
          rules={{ required: "Phone number is required" }}
        />
      </div>

      {/* Status */}
      <TextBox
        label="Status"
        name="status"
        register={register}
        errors={errors}
        options={["Active", "Completed", "Cancelled"]}
      />

      <button
        type="submit"
        className="w-full bg-purple-600 text-white rounded-lg py-2 mt-2 hover:bg-purple-700 transition"
      >
        {buttonText}
      </button>
    </form>
  );
}
