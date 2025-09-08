import { useState } from "react";
import TestTypeSelect, { type TestTypeSelectState } from "./TestTypeSelect";

// Example usage component showing how to integrate TestTypeSelect in a form
export default function TestOrderForm() {
  const [selectedTestTypes, setSelectedTestTypes] =
    useState<TestTypeSelectState>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Selected Test Types:", selectedTestTypes);
    // Here you would typically send the selectedTestTypes array to your backend
    // The array contains the IDs of selected test types that the doctor ordered for the patient
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Order Tests for Patient</h2>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Select Test Types:
        </label>
        <TestTypeSelect
          testTypes={selectedTestTypes}
          setTestTypes={setSelectedTestTypes}
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Order Selected Tests
        </button>
      </div>

      {/* Debug info */}
      <div className="mt-4 rounded bg-gray-100 p-4">
        <h3 className="font-semibold">Selected Test Type IDs:</h3>
        <pre>{JSON.stringify(selectedTestTypes, null, 2)}</pre>
      </div>
    </form>
  );
}
