import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addLab, deleteLab, fetchLabs, updateLab } from "../../api/lab";

const Labs = () => {
  const [labs, setLabs] = useState([]);
  const [selectedLab, setSelectedLab] = useState(null); // For both add/edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Modal for delete confirmation
  const [labToDelete, setLabToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [labsPerPage] = useState(8); // Number of labs per page

  // Fetch labs from API when component mounts
  useEffect(() => {
    const getLabs = async () => {
      const fetchedLabs = await fetchLabs();
      if (fetchedLabs && fetchedLabs.success) {
        setLabs(fetchedLabs.data.items);
      } else {
        toast.error("Failed to fetch labs");
      }
    };

    getLabs();
  }, []);

  // Get current labs for pagination
  const indexOfLastLab = currentPage * labsPerPage;
  const indexOfFirstLab = indexOfLastLab - labsPerPage;
  const currentLabs = labs.slice(indexOfFirstLab, indexOfLastLab);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Open the modal for editing or adding
  const openModal = (lab = null) => {
    setSelectedLab(
      lab
        ? { ...lab } // If editing, populate with lab data
        : {
            labID: labs.length + 1,
            labName: "",
            description: "",
            labFileUrl: "",
          } // If adding, start with empty fields
    );
    setIsModalOpen(true); // Open the modal
  };

  // Save the edited or new lab
  const handleSaveLab = async () => {
    // Check for validation errors
    if (!selectedLab.labName) {
      toast.error("Lab name is required!");
      return;
    }
    const labData = {
      labName: selectedLab.labName,
      description: selectedLab.description,
      labFileUrl: selectedLab.labFileUrl,
    };

    try {
      if (selectedLab.labID <= labs.length) {
        // Update existing lab
        const updatedLab = await updateLab(selectedLab.labID, labData);
        setLabs(
          labs.map((lab) =>
            lab.labID === selectedLab.labID ? updatedLab.data : lab
          )
        );
        toast.success("Lab edited successfully!"); // Trigger alert for update
      } else {
        // Add new lab
        const newLab = await addLab(labData);
        setLabs([...labs, newLab.data]);
        toast.success("Lab added successfully!"); // Trigger alert for adding
      }
      setIsModalOpen(false); // Close modal after saving
    } catch (error) {
      toast.error(`Failed to save lab: ${error.message}`); // Trigger error alert
    }
  };

  // Handle delete button click
  const openDeleteModal = (lab) => {
    setLabToDelete(lab); // Set the lab to be deleted
    setIsDeleteModalOpen(true); // Open delete confirmation modal
  };

  // Confirm delete action
  const handleConfirmDelete = async () => {
    try {
      await deleteLab(labToDelete.labID);
      setLabs(labs.filter((lab) => lab.labID !== labToDelete.labID));
      toast.success("Lab deleted successfully!"); // Trigger alert for delete
      setIsDeleteModalOpen(false); // Close the delete confirmation modal
    } catch (error) {
      toast.error(`Failed to delete lab: ${error.message}`); // Trigger error alert
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedLab((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Manage Labs</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => openModal()}
      >
        Add
      </button>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">File URL</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentLabs.map((lab) => (
            <tr key={lab && lab.labId}>
              <td className="border px-4 py-2">{lab && lab.labId}</td>
              <td className="border px-4 py-2">{lab && lab.labName}</td>
              <td className="border px-4 py-2">{lab && lab.description}</td>
              <td className="border px-4 py-2">{lab && lab.labFileUrl}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded"
                  onClick={() => openModal(lab)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                  onClick={() => openDeleteModal(lab)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-8">
        {Array.from(
          { length: Math.ceil(labs.length / labsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 border border-blue-500"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>

      {/* Modal for adding/editing */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded shadow-lg w-[500px]">
            <h2 className="text-xl mb-4">
              {selectedLab.labID <= labs.length ? "Edit Lab" : "Add New Lab"}
            </h2>

            <div className="grid gap-4">
              <div>
                <label>Lab Name:</label>
                <input
                  className="border p-2 w-full"
                  name="labName"
                  value={selectedLab.labName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Description:</label>
                <textarea
                  className="border p-2 w-full"
                  name="description"
                  value={selectedLab.description}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>File URL:</label>
                <input
                  className="border p-2 w-full"
                  name="labFileUrl"
                  value={selectedLab.labFileUrl}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleSaveLab}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal for delete confirmation */}
      {isDeleteModalOpen && (
        <Modal
          isOpen={isDeleteModalOpen}
          onRequestClose={() => setIsDeleteModalOpen(false)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded shadow-lg w-[500px]">
            <h2 className="text-xl mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this lab?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      <ToastContainer />
    </div>
  );
};

export default Labs;
