import { useState } from "react";
import { FiEdit2, FiTrash2, FiToggleLeft, FiToggleRight } from "react-icons/fi";
import Pagination from "../common/Pagination";

export default function WarehouseTable({ onEdit }) {
  const [activeSwitches, setActiveSwitches] = useState([true, false, true, false]);

  const warehouses = [
    {
      name: "365 Warehouse SV1, Austin",
      id: "REMA0123",
      location: "Austin, Texas",
      fullLocation: "#315, North Ave, Austin, Texas",
      capacity: 15000,
    },
    {
      name: "365 Warehouse SV1, Houston",
      id: "REMA0124",
      location: "Houston, Texas",
      fullLocation: "#315, Central Ave, Houston, Texas",
      capacity: 15000,
    },
    {
      name: "365 Warehouse SV5, Vegas",
      id: "REMA0125",
      location: "The Strip, Las Vegas",
      fullLocation: "#52, The Strip Blvd, Las Vegas, Nevada",
      capacity: 15000,
    },
    {
      name: "365 Warehouse SV10, New York",
      id: "REMA0126",
      location: "Central Park, New York",
      fullLocation: "#214, Central Park West, New York",
      capacity: 15000,
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
              <th className="p-4">Warehouse Name</th>
              <th className="p-4">Warehouse ID</th>
              <th className="p-4">Location</th>
              <th className="p-4">Capacity (In SKUs)</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {warehouses.map((w, i) => (
              <tr key={i} className="border-b border-gray-300 hover:bg-purple-50 transition-all">
                <td className="p-4 flex items-center gap-2 text-black whitespace-nowrap">
                  <input type="checkbox" className="accent-purple-600" />
                  {w.name}
                </td>

                <td className="p-4 text-gray-600 font-medium underline whitespace-nowrap cursor-pointer">
                  {w.id}
                </td>

                <td className="p-4 relative group whitespace-nowrap text-gray-700">
                  <div className="flex items-center gap-1">
                    <span className="truncate max-w-[140px] md:max-w-[200px]">{w.location}</span>
                    <span className="text-gray-400">...</span>
                  </div>
                  <div className="absolute bottom-full left-0 mb-1 hidden group-hover:flex bg-white text-gray-800 text-xs rounded-md px-3 py-1 whitespace-nowrap shadow-lg border border-gray-200 z-20">
                    {w.fullLocation}
                  </div>
                </td>

                <td className="p-4 whitespace-nowrap">{w.capacity}</td>

                {/* ACTIONS + CUSTOM TOGGLE */}
                <td className="p-4 flex items-center justify-center gap-3 whitespace-nowrap">

                  {/* Edit button */}
                  <button onClick={() => onEdit(w)} className="text-purple-600 hover:text-purple-800">
                    <FiEdit2 size={18} />
                  </button>

                  {/* Delete button */}
                  <button className="text-red-500 hover:text-red-700">
                    <FiTrash2 size={18} />
                  </button>

                  {/* Custom Toggle */}
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
      <Pagination />
    </div>
  );
}
