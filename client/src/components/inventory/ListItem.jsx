import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

function ListItem({
  _id,
  item_name,
  sku,
  serial_number,
  vendor_details,
  item_location,
  expiry_date,
  quantity_available,
  minimum_stock,
  collapse,
}) {
  const [daysUntilExpiration, setDateUntilExpiration] = useState(null);
  const handleDelete = async () => {
    const response = await axios.delete(
      `${import.meta.env.VITE_API}/inventory/${_id}`
    );
    alert(response.data?.success);
  };

  useEffect(() => {
    const calculateDaysUntilExpiration = () => {
      const today = new Date();
      const expiration = new Date(expiry_date);
      const difference = expiration - today;
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setDateUntilExpiration(days);
    };

    calculateDaysUntilExpiration();
  }, [expiry_date]);

  return (
    <tbody className="">
      <tr className="border-b-[1px] border-black/10">
        <td
          className={`whitespace-nowrap px-4 py-4 font-medium ${
            collapse ? "hidden" : ""
          }`}
        >
          {_id}
        </td>
        <td className="px-4 py-4">{item_name}</td>
        <td>{sku}</td>
        <td>{serial_number}</td>
        <td>{vendor_details}</td>
        <td>{item_location}</td>
        <td>{expiry_date.substring(0, 10)}</td>
        <td>
          {daysUntilExpiration < 7 ? (
            <p className="text-red-600 font-bold">
              {daysUntilExpiration <= 0 ? (
                <span>Expired</span>
              ) : (
                <span>{daysUntilExpiration}</span>
              )}
            </p>
          ) : (
            <p>{daysUntilExpiration}</p>
          )}
        </td>
        <td>{quantity_available}</td>
        <td>{minimum_stock}</td>
        <td>
          <div className="flex items-center justify-center gap-3">
            <Link to={`/inventory/update/${_id}`}>
              <PencilAltIcon className="w-4 hover:text-accent cursor-pointer" />
            </Link>

            <TrashIcon
              onClick={handleDelete}
              className="w-4 hover:text-accent cursor-pointer"
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default ListItem;
