import React, { useRef, useState } from "react";
import ListItem from "./ListItem";
import { inventory } from "../../data/test";
import Layout from "../Layout";
import { savePDF } from "@progress/kendo-react-pdf";

function List() {
  const [query, setQuery] = useState("");
  const table = useRef(null);

  const exportPDF = () => {
    let element = table.current;
    if (element !== null) {
      savePDF(element, {
        paperSize: "a4",
        margin: "2cm",
        landscape: true,
        fileName: "CurrentInventory",
        scale: 0.5,
      });
    }
  };

  const searchItems = (inventory, query) => {
    return inventory.filter((item) =>
      Object.values(item).join("").toLowerCase().includes(query.toLowerCase())
    );
  };
  const filteredItems = searchItems(inventory, query);
  // console.log(filteredItems);
  return (
    <>
      <div className="flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between py-4">
        <h1 className="font-semibold text-2xl text-accent">
          Current Inventory
        </h1>
        <div className="flex items-center justify-center gap-4">
          <input
            type="text"
            className="border-2 px-2 py-1 text-sm rounded-full border-accent"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            className="md:block hidden bg-accent px-2 w-24 h-8 text-sm text-white font-medium rounded-full"
          >
            Search
          </button>
        </div>
      </div>
      <div className="overflow-auto max-h-[800px] rounded-md">
        <table
          ref={table}
          className="min-w-full text-center text-sm font-light bg-pearlWhite/30 rounded-md border-seperate"
        >
          <thead className="bg-accent font-medium text-white">
            <tr className="">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Item Name</th>
              <th className="px-6 py-4">SKU</th>
              <th className="px-6 py-4">Serial Number</th>
              <th className="px-6 py-4">Vendor Details</th>
              <th className="px-6 py-4">Item Location</th>
              <th className="px-6 py-4">Expiry Date</th>
              <th className="px-6 py-4">Quantity Available</th>
              <th className="px-6 py-4">Minimum Stock</th>
              <th className="px-6 py-4">Modify</th>
            </tr>
          </thead>
          {!query &&
            inventory.map((item) => <ListItem key={item._id} {...item} />)}

          {query &&
            filteredItems.map((item) => <ListItem key={item._id} {...item} />)}
        </table>
      </div>
      <div className="flex items-center justify-center text-sm font-medium bg-accent px-2 w-40 h-8 rounded-full text-white my-3">
        <button onClick={exportPDF} type="button">
          Download as a PDF
        </button>
      </div>
    </>
  );
}

export default List;
