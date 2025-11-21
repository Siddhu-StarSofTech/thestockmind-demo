// import React from "react";
// import { useForm } from "react-hook-form";

// export default function Form() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log("Submitted:", data);

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-sm mx-auto mt-10 p-5 border rounded-lg space-y-4"
//     >
//       <h2 className="text-lg font-semibold text-center">Simple Form</h2>

//       {/* First Name */}
//       <div className="flex flex-col">
//         <label className="text-sm">First Name</label>
//         <input
//           {...register("firstName", {
//             required: "First name is required",
//             pattern: {
//               value: /^[A-Za-z]+$/,
//               message: "Letters only",
//             },
//             minLength: { value: 3, message: "Min 3 letters" },
//             maxLength: { value: 10, message: "Max 10 letters" },
//           })}
//           placeholder="Enter first name"
//           className="border px-3 py-2 rounded"
//         />
//         {errors.firstName && (
//           <p className="text-sm text-red-600">{errors.firstName.message}</p>
//         )}
//       </div>

//       {/* Last Name */}
//       <div className="flex flex-col">
//         <label className="text-sm">Last Name</label>
//         <input
//           {...register("lastName", {
//             required: "Last name is required",
//             pattern: {
//               value: /^[A-Za-z]+$/,
//               message: "Letters only",
//             },
//             minLength: { value: 3, message: "Min 3 letters" },
//             maxLength: { value: 10, message: "Max 10 letters" },
//           })}
//           placeholder="Enter last name"
//           className="border px-3 py-2 rounded"
//         />
//         {errors.lastName && (
//           <p className="text-sm text-red-600">{errors.lastName.message}</p>
//         )}
//       </div>

//       {/* Phone */}
//       <div className="flex flex-col">
//         <label className="text-sm">Phone</label>
//         <input
//           {...register("phone", {
//             required: "Phone number is required",
//             pattern: {
//               value: /^[0-9]{10}$/,
//               message: "Must be 10 digits",
//             },
//           })}
//           placeholder="Enter phone number"
//           className="border px-3 py-2 rounded"
//           maxLength={10}
//         />
//         {errors.phone && (
//           <p className="text-sm text-red-600">{errors.phone.message}</p>
//         )}
//       </div>

//       <button className="w-full bg-blue-600 text-white py-2 rounded">
//         Submit
//       </button>
//     </form>
//   );
// }
