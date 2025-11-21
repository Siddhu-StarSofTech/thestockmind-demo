import React, { useState } from "react";
import DateFilterBar from "../components/common/DateFilterBar";
import InvoiceTable from "../components/invoice/InvoiceTable";
import SearchBar from "../components/common/SearchBar";
import FilterButton from "../components/common/FilterButton";
import ExportButton from "../components/common/ExportButton";
import InvoiceForm from "../components/invoice/InvoiceForm";
import Modal from "../components/common/Modal";

export default function Invoice() {
  const [activeTab, setActiveTab] = useState("Active");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const cards = [
    { title: "Active Employees", value: 120, description: "↑ 10% vs last month", key: "Active" },
    { title: "Inactive Employees", value: 25, description: "↓ 3% vs last month", key: "Inactive" },
    { title: "Deleted Employees", value: 8, description: "↑ 4% vs last month", key: "Deleted" },
  ];

  const handleEdit = (data) => {
    setEditData(data);
    setIsEditModalOpen(true);
  };

  const handleFilterClick = () => {
    alert("Filter button clicked!");
  };

  const handleExportClick = () => {
    alert("Export triggered!");
  };

  return (
    <div className="md:ml-64 p-4 px-6 min-h-screen overflow-y-auto bg-gray-50">
      <button className="text-purple-600 text-sm mb-3 hover:underline">&lt; Back</button>

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <h1 className="text-2xl font-semibold">Employees</h1>
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

      <h2 className="text-2xl font-semibold mb-4">{activeTab} Employees</h2>

      <div className="bg-white rounded-2xl shadow-md p-4 mb-8">
        {/* Search / Filter / Add / Export */}
        <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
          <div className="flex items-center gap-2">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <FilterButton onClick={handleFilterClick} />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 h-10"
            >
              + Add New Employee
            </button>
            <ExportButton onClick={handleExportClick} />
          </div>
        </div>

        {/* Table */}
        {activeTab === "Active" ? (
          <InvoiceTable onEdit={handleEdit} searchQuery={searchQuery} />
        ) : (
          <EmptyInvoiceTable />
        )}
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <Modal title="Add New Employee" onClose={() => setIsAddModalOpen(false)}>
          <InvoiceForm buttonText="Add Employee" />
        </Modal>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && editData && (
        <Modal title="Edit Employee" onClose={() => setIsEditModalOpen(false)}>
          <InvoiceForm buttonText="Save Changes" defaultData={editData} />
        </Modal>
      )}
    </div>
  );
}

function EmptyInvoiceTable() {
  return (
    <div className="rounded-xl border border-gray-200 overflow-x-auto">
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
          <tr>
            <td colSpan="7" className="text-center py-6 text-gray-400">
              No data available for this category.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
