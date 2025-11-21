import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiToggleLeft, FiToggleRight } from "react-icons/fi";
import Pagination from "../common/Pagination";

export default function InvoiceTable({ onEdit }) {
  const [activeSwitches, setActiveSwitches] = useState([true, false, true, false]);

  const employees = [
    {
      name: "Phoenix Baker",
      id: "BC2022110001",
      department: "DP10001",
      hireDate: "Jan 4, 2022",
      email: "phoenix.baker@hmail.com",
      phone: "+1 8639724863",
      image: "/src/assets/Images/Avatar_1.png",
    },
    {
      name: "Lana Steiner",
      id: "BC2022110001",
      department: "DP10001",
      hireDate: "Jan 4, 2022",
      email: "lanasteiner@migh.com",
      phone: "+1 8639724863",
      image: "/src/assets/Images/Avatar_2.png",
    },
    {
      name: "Demi Wilkinson",
      id: "BC2022110001",
      department: "DP10001",
      hireDate: "Jan 4, 2022",
      email: "dwilkinson@lon.com",
      phone: "+1 8639724863",
      image: "/src/assets/Images/Avatar_3.png",
    },
    {
      name: "Candice Wu",
      id: "BC2022110001",
      department: "DP10001",
      hireDate: "Jan 4, 2022",
      email: "xing.wu@hyper.s",
      phone: "+1 8639724863",
      image: "/src/assets/Images/Avatar_4.png",
    },
  ];

  const toggleSwitch = (index) => {
    const updated = [...activeSwitches];
    updated[index] = !updated[index];
    setActiveSwitches(updated);
  };

  return (
    <div className="rounded-xl border border-gray-200 overflow-x-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-gray-700 border-collapse">
          <thead className="bg-gray-50 border-b border-gray-400 text-sm text-gray-600">
            <tr>
              <th className="p-4">Employee Name</th>
              <th className="p-4">Employee ID</th>
              <th className="p-4">Department ID</th>
              <th className="p-4">Hire Date</th>
              <th className="p-4">Email ID</th>
              <th className="p-4">Phone Number</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, i) => (
              <tr key={i} className="border-b border-gray-300 hover:bg-purple-50 transition-all">
                {/* Employee Name with Checkbox + Image */}
                <td className="p-4 flex items-center gap-3 whitespace-nowrap">
                  <input type="checkbox" className="accent-purple-600" />
                  <img
                    src={emp.image}
                    alt={emp.name}
                    className="w-8 h-8 rounded-full object-cover border border-gray-300"
                  />
                  <span className="text-black font-medium">{emp.name}</span>
                </td>

                <td className="p-4 text-gray-600 font-medium whitespace-nowrap">{emp.id}</td>
                <td className="p-4 text-gray-600 whitespace-nowrap">{emp.department}</td>

                {/* Hire Date + Time */}
                <td className="p-4 whitespace-nowrap text-gray-700">
                  {emp.hireDate}
                  <span className="text-gray-500 text-sm ml-1">11:00 AM</span>
                </td>

                <td className="p-4 text-gray-700 whitespace-nowrap">{emp.email}</td>
                <td className="p-4 text-gray-700 whitespace-nowrap">{emp.phone}</td>

                {/* Actions */}
                <td className="p-4 flex items-center justify-center gap-3 whitespace-nowrap">
                  <button
                    onClick={() => onEdit(emp)}
                    className="text-purple-600 hover:text-purple-800"
                  >
                    <FiEdit2 size={18} />
                  </button>

                  <button className="text-red-500 hover:text-red-700">
                    <FiTrash2 size={18} />
                  </button>

                  {/* Custom Toggle*/}
                  <button
                    onClick={() => toggleSwitch(i)}
                    className="transition-transform duration-200"
                  >
                    {activeSwitches[i] ? (
                      <FiToggleRight size={25} className="text-green-500 hover:text-green-600" />
                    ) : (
                      <FiToggleLeft size={25} className="text-gray-600 hover:text-gray-800" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <Pagination />
    </div>
  );
}
