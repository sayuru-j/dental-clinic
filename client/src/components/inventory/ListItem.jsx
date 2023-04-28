import {
  ExclamationCircleIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
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
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = async () => {
    if (window.confirm("Are you sure?")) {
      const response = await axios.delete(
        `${import.meta.env.VITE_API}/inventory/${_id}`
      );
      alert(response.data?.success);
      setIsDeleted(true);
    }
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

  const deleteAlert = () => {
    return (
      <tr
        className="fixed flex items-center justify-center 
      bottom-2 left-5 py-2 px-10 gap-2 bg-white border-[1px] text-red-600 rounded border-red-600"
      >
        <td className="font-semibold">Item deleted</td>
      </tr>
    );
  };

  // put your recieving email address here
  const email = "example@email.com";

  useEffect(() => {
    const sendEmail = async () => {
      try {
        await axios.post(`${import.meta.env.VITE_API}/inventory/send-email`, {
          item_name,
          sku,
          email,
        });
      } catch (err) {
        console.log("Error sending email", err);
      }
    };

    if (daysUntilExpiration !== null && daysUntilExpiration <= 7) {
      sendEmail();
    }
  }, [daysUntilExpiration, item_name, sku]);

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
                <span>{daysUntilExpiration} Days left</span>
              )}
            </p>
          ) : (
            <p>{daysUntilExpiration} Days left</p>
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
      {isDeleted && deleteAlert()}
    </tbody>
  );
}

export default ListItem;
