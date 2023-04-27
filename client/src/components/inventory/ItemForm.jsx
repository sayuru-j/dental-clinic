import { useEffect, useState } from "react";
import axios from "axios";

import { ExclamationCircleIcon } from "@heroicons/react/outline";

function ItemForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (success) {
      setError("");
    }
  }, [success]);

  const [state, setState] = useState({
    item_name: "",
    sku: "",
    serial_number: "",
    vendor_details: "",
    item_location: "",
    expiry_date: "",
    quantity_available: "",
    minimum_stock: "",
  });

  const handleChange = (item) => (e) => {
    setState({ ...state, [item]: e.target.value });
  };

  const {
    item_name,
    sku,
    serial_number,
    vendor_details,
    item_location,
    expiry_date,
    quantity_available,
    minimum_stock,
  } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/inventory/add`,
        {
          item_name,
          sku,
          serial_number,
          vendor_details,
          item_location,
          expiry_date,
          quantity_available,
          minimum_stock,
        }
      );

      setSuccess(response);
    } catch (err) {
      setError(err.response?.data?.error);
    }
  };

  return (
    <form
      onChange={() => setSuccess("")}
      onSubmit={handleSubmit}
      className="w-full lg:max-w-2xl bg-pearlWhite/30 p-5 rounded-lg"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="item-name"
          >
            Item Name
          </label>
          <input
            onChange={handleChange("item_name")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="item-name"
            type="text"
            placeholder="Face Masks"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="sku"
          >
            SKU
          </label>
          <input
            onChange={handleChange("sku")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="sku"
            type="text"
            placeholder="XYZ12345"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="serial-no"
          >
            Serial No
          </label>
          <input
            onChange={handleChange("serial_number")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="serial-no"
            type="number"
            placeholder="394857739"
          />
          <p className="text-gray-600 text-xs italic">
            Serial Number must be a unique set of numbers for each item
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 md:mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="vendor-details"
          >
            Vendor Details
          </label>
          <input
            onChange={handleChange("vendor_details")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="vendor-details"
            type="text"
            placeholder="Aspirin Inc."
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            Location
          </label>
          <div className="relative">
            <select
              onChange={handleChange("item_location")}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="location"
            >
              <option value="">Select</option>
              <option value="Ampara">Ampara</option>
              <option value="Anuradhapura">Anuradhapura</option>
              <option value="Badulla">Badulla</option>
              <option value="Batticaloa">Batticaloa</option>
              <option value="Colombo">Colombo</option>
              <option value="Galle">Galle</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Hambantota">Hambantota</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Kalutara">Kalutara</option>
              <option value="Kandy">Kandy</option>
              <option value="Kegalle">Kegalle</option>
              <option value="Kilinochchi">Kilinochchi</option>
              <option value="Kurunegala">Kurunegala</option>
              <option value="Mannar">Mannar</option>
              <option value="Matale">Matale</option>
              <option value="Matara">Matara</option>
              <option value="Monaragala">Monaragala</option>
              <option value="Mullaitivu">Mullaitivu</option>
              <option value="Nuwara Eliya">Nuwara Eliya</option>
              <option value="Polonnaruwa">Polonnaruwa</option>
              <option value="Puttalam">Puttalam</option>
              <option value="Ratnapura">Ratnapura</option>
              <option value="Trincomalee">Trincomalee</option>
              <option value="Vavuniya">Vavuniya</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 md:pt-3 md:mb-0">
        <div className="w-full md:w-1/3 px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="expiry"
          >
            Expiry
          </label>
          <input
            onChange={handleChange("expiry_date")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="expiry"
            type="date"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="quantity"
          >
            Quantity Available
          </label>
          <input
            onChange={handleChange("quantity_available")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="quantity"
            type="text"
            placeholder="100"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="min-stock"
          >
            Min Stock
          </label>
          <input
            onChange={handleChange("minimum_stock")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="min-stock"
            type="text"
            placeholder="10 Packs"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="px-2 w-24 h-8 bg-accent font-medium text-sm text-white rounded-full"
        >
          Add
        </button>
        {error && (
          <div className="bg-accent/5 flex items-center gap-2 rounded-full border-[1px] border-accent py-2 px-2">
            <ExclamationCircleIcon className="w-5 text-accent" />
            <p className="text-xs font-bold text-accent">{error}</p>
          </div>
        )}
        {success && !error && (
          <div className="bg-green-600/5 flex items-center gap-2 rounded-full border-[1px] border-green-600 py-2 px-2">
            <ExclamationCircleIcon className="w-5 text-green-600" />
            <p className="text-xs font-bold text-green-600">Item Added</p>
          </div>
        )}
      </div>
    </form>
  );
}

export default ItemForm;
