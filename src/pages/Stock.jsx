import React, { useState } from "react";
import DateFilterBar from "../components/common/DateFilterBar";
import StockTable from "../components/stock/StockTable";
import StockForm from "../components/stock/StockForm";
import Modal from "../components/common/Modal";
import SearchBar from "../components/common/SearchBar";
import FilterButton from "../components/common/FilterButton";
import ExportButton from "../components/common/ExportButton";

export default function Stock() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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
      {/* Back */}
      <button className="text-purple-600 text-sm mb-3 hover:underline">
        &lt; Back
      </button>

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <h1 className="text-2xl font-semibold">Stock</h1>
        <DateFilterBar />
      </div>

      <div className="bg-white rounded-2xl shadow-md p-4 mb-8">
        {/* Search / Filter / Add / Export */}
        <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
          <div className="flex items-center gap-2">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search stock..."
            />
            <FilterButton onClick={handleFilterClick} />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 h-10"
            >
              + Add New Stock
            </button>
            <ExportButton onClick={handleExportClick} />
          </div>
        </div>

        {/* Table */}
        <StockTable onEdit={handleEdit} searchQuery={searchQuery} />
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <Modal title="Add New Stock" onClose={() => setIsAddModalOpen(false)}>
          <StockForm onClose={() => setIsAddModalOpen(false)} mode="add" />
        </Modal>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && editData && (
        <Modal title="Edit Stock" onClose={() => setIsEditModalOpen(false)}>
          <StockForm
            onClose={() => setIsEditModalOpen(false)}
            mode="edit"
            editData={editData}
          />
        </Modal>
      )}
    </div>
  );
}
