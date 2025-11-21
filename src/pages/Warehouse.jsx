import React, { useState } from "react";
import DateFilterBar from "../components/common/DateFilterBar";
import WarehouseTable from "../components/warehouse/WarehouseTable";
import WarehouseForm from "../components/warehouse/WarehouseForm";
import Modal from "../components/common/Modal";
import SearchBar from "../components/common/SearchBar";
import FilterButton from "../components/common/FilterButton";
import ExportButton from "../components/common/ExportButton";

export default function Warehouse() {
  const [activeTab, setActiveTab] = useState("Active");

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [editData, setEditData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const cards = [
    { title: "Active Warehouses", value: 100, description: "↑ 12% vs last month", key: "Active" },
    { title: "Inactive Warehouses", value: 19, description: "↓ 5% vs last month", key: "Inactive" },
    { title: "Deleted Warehouses", value: 10, description: "↑ 8% vs last month", key: "Deleted" },
  ];

  const handleEdit = (data) => {
    setEditData(data);
    setIsEditModalOpen(true);
  };

  return (
    <div className="md:ml-64 p-4 px-6 min-h-screen overflow-y-auto bg-gray-50">
      <button className="text-purple-600 text-sm mb-3 hover:underline">
        &lt; Back
      </button>

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <h1 className="text-2xl font-semibold">Warehouses</h1>
        <DateFilterBar />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {cards.map((card) => (
          <div
            key={card.key}
            onClick={() => setActiveTab(card.key)}
            className={`cursor-pointer rounded-xl p-5 shadow-md transition ${
              activeTab === card.key
                ? "bg-purple-600 text-white"
                : "bg-white hover:bg-purple-50"
            }`}
          >
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-3xl font-bold mt-2">{card.value}</p>
            <p
              className={`text-sm mt-1 ${
                activeTab === card.key ? "text-purple-100" : "text-gray-500"
              }`}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">{activeTab} Warehouses</h2>

      {/* Search / Table Section */}
      <div className="bg-white rounded-2xl shadow-md p-4 mb-8">
        {/*  Search / Filter / Add / Export */}
        <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
          <div className="flex items-center gap-2">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <FilterButton onClick={() => alert("Filter button clicked!")} />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 h-10"
            >
              + Add New Warehouse
            </button>
            <ExportButton onClick={() => alert("Export triggered!")} />
          </div>
        </div>

        {/* Table */}
        {activeTab === "Active" ? (
          <WarehouseTable onEdit={handleEdit} searchQuery={searchQuery} />
        ) : (
          <EmptyWarehouseTable />
        )}
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <Modal title="Add New Warehouse" onClose={() => setIsAddModalOpen(false)}>
          <WarehouseForm
            mode="add"
            buttonText="Add Warehouse"
            onClose={() => setIsAddModalOpen(false)}
          />
        </Modal>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && editData && (
        <Modal title="Edit Warehouse" onClose={() => setIsEditModalOpen(false)}>
          <WarehouseForm
            mode="edit"
            buttonText="Save Changes"
            defaultData={editData}
            onClose={() => setIsEditModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}

function EmptyWarehouseTable() {
  return (
    <div className="rounded-xl border border-gray-200 overflow-x-auto">
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
          <tr>
            <td colSpan="5" className="text-center py-6 text-gray-400">
              No data available for this category.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
