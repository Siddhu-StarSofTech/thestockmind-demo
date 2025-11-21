import React, { useState } from "react";
import { FiEdit2, FiToggleLeft, FiToggleRight } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import Pagination from "../common/Pagination";

export default function StockTable({ onEdit }) {
  const [stocks, setStocks] = useState([
    { id: 1, created: "Nov 11, 2025 09:30 AM", stockId: "TUX001234", productId: "REMA0123", warehouseId: "REMA0123", category: "Traditional Vapes", weight: "3 lb", stockLevel: 12000, recLevel: 10000, active: true },
    { id: 2, created: "Nov 11, 2025 10:15 AM", stockId: "TUX001234", productId: "REMA0123", warehouseId: "REMA0123", category: "E-Cigarettes", weight: "2 lb", stockLevel: 8000, recLevel: 9000, active: false },
    { id: 3, created: "Nov 11, 2025 11:00 AM", stockId: "TUX001234", productId: "REMA0123", warehouseId: "REMA0123", category: "Edibles", weight: "5 lb", stockLevel: 20000, recLevel: 18000, active: true },
    { id: 4, created: "Nov 11, 2025 12:30 PM", stockId: "TUX001234", productId: "REMA0123", warehouseId: "REMA0123", category: "Concentrates", weight: "4 lb", stockLevel: 15000, recLevel: 14000, active: true },
    { id: 5, created: "Nov 11, 2025 01:15 PM", stockId: "TUX001234", productId: "REMA0123", warehouseId: "REMA0123", category: "Traditional Vapes", weight: "2.5 lb", stockLevel: 9000, recLevel: 8000, active: false },
    { id: 6, created: "Nov 11, 2025 02:00 PM", stockId: "TUX001234", productId: "REMA0123", warehouseId: "REMA0123", category: "E-Cigarettes", weight: "3 lb", stockLevel: 7000, recLevel: 7500, active: true },
    { id: 7, created: "Nov 11, 2025 02:45 PM", stockId: "TUX001234", productId: "REMA0123", warehouseId: "REMA0123", category: "Edibles", weight: "4 lb", stockLevel: 11000, recLevel: 10500, active: true },
    { id: 8, created: "Nov 11, 2025 03:30 PM", stockId: "TUX001234", productId: "REMA0123", warehouseId: "REMA0123", category: "Concentrates", weight: "5 lb", stockLevel: 18000, recLevel: 16000, active: false },
  ]);

  const toggleActive = (id) => {
    setStocks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-gray-700 border-collapse">
          <thead className="bg-gray-50 border-b border-gray-400 text-sm text-gray-600">
            <tr>
              <th className="p-4 font-medium">Created Date & Time</th>
              <th className="p-4 font-medium">Stock ID</th>
              <th className="p-4 font-medium">Product ID</th>
              <th className="p-4 font-medium">Warehouse ID</th>
              <th className="p-4 font-medium">Category</th>
              <th className="p-4 font-medium">Weight</th>
              <th className="p-4 font-medium">Stock Level</th>
              <th className="p-4 font-medium">Rec. Level</th>
              <th className="p-4 font-medium text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {stocks.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-300 hover:bg-gray-50 transition text-sm"
              >
                <td className="p-4 whitespace-nowrap">{item.created}</td>
                <td className="p-4 text-gray-800">{item.stockId}</td>
                <td className="p-4 text-gray-600 font-medium underline">
                  {item.productId}
                </td>
                <td className="p-4 text-gray-600 font-medium underline">
                  {item.warehouseId}
                </td>
                <td className="p-4 text-gray-600 font-medium underline">{item.category}</td>
                <td className="p-4">{item.weight}</td>
                <td className="p-4">{item.stockLevel}</td>
                <td className="p-4">{item.recLevel}</td>

                {/* Actions */}
                <td className="p-4 text-center flex justify-center items-center gap-3">
                  <FiEdit2
                    size={18}
                    className="text-purple-600 cursor-pointer hover:text-purple-800"
                    onClick={() => onEdit(item)}
                  />

                  <FaRegTrashAlt
                    size={18}
                    className="text-red-500 cursor-pointer hover:text-red-600"
                  />

                  {/* Custom Toggle Icon */}
                  <button
                    onClick={() => toggleActive(item.id)}
                    className="transition duration-200"
                  >
                    {item.active ? (
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
