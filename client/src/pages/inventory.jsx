import React, { useEffect, useRef, useState } from "react";

import List from "../components/inventory/List";
import Welcome from "../components/inventory/Welcome";
import AddItem from "../components/inventory/AddItem";
import ItemForm from "../components/inventory/ItemForm";

function Inventory() {
  const [toggle, setToggle] = useState(false);
  const printRef = useRef();

  return (
    <div className="flex flex-col">
      <div className="inline-block min-w-full py-2 px-6 lg:px0">
        <Welcome />
        <div className="mb-10" />
        <List />

        <div className="mb-10" />
        <AddItem />
        <button
          onClick={() => setToggle(!toggle)}
          type="button"
          className="text-sm font-medium bg-accent px-2 w-24 h-8 rounded-full text-white my-4"
        >
          Add item
        </button>
        <div ref={printRef} className={`${toggle ? "" : "hidden"}`}>
          <ItemForm />
        </div>
      </div>
    </div>
  );
}

export default Inventory;
