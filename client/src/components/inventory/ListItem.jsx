import React from "react";

import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function ListItem({
  _id,
  item_name,
  sku,
  serial_no,
  vendor_details,
  item_location,
  expiry_date,
  quantity_available,
  minimum_stock,
}) {
  return (
    <tbody className="">
      <tr className="border-b-[1px] border-black/10">
        <td className="whitespace-nowrap px-4 py-4 font-medium">{_id}</td>
        <td>{item_name}</td>
        <td>{sku}</td>
        <td>{serial_no}</td>
        <td>{vendor_details}</td>
        <td>{item_location}</td>
        <td>{expiry_date}</td>
        <td>{quantity_available}</td>
        <td>{minimum_stock}</td>
        <td>
          <div className="flex items-center justify-center gap-3">
            <Link to="/inventory/update/:id">
              <PencilAltIcon className="w-4 hover:text-accent cursor-pointer" />
            </Link>
            <Link>
              <TrashIcon className="w-4 hover:text-accent cursor-pointer" />
            </Link>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default ListItem;
