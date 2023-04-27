const inventory = [
  {
    _id: "001",
    item_name: "Panadol",
    sku: "XYZ12345",
    serial_no: "1398494894",
    vendor_details: "Panadolic Industry",
    item_location: "Colombo",
    expiry_date: "24.01.2022",
    quantity_available: "100kg",
    minimum_stock: "50kg",
  },
  {
    _id: "002",
    item_name: "Nurofen",
    sku: "ABC56789",
    serial_no: "394857739",
    vendor_details: "Nurofen Co.",
    item_location: "Kandy",
    expiry_date: "10.05.2023",
    quantity_available: "200kg",
    minimum_stock: "100kg",
  },
  {
    _id: "003",
    item_name: "Aspirin",
    sku: "DEF24680",
    serial_no: "592837463",
    vendor_details: "Aspirin Inc.",
    item_location: "Galle",
    expiry_date: "01.09.2024",
    quantity_available: "150kg",
    minimum_stock: "75kg",
  },
  {
    _id: "004",
    item_name: "Tylenol",
    sku: "PQR09123",
    serial_no: "847593829",
    vendor_details: "Tylenol Ltd.",
    item_location: "Jaffna",
    expiry_date: "15.12.2025",
    quantity_available: "300kg",
    minimum_stock: "150kg",
  },
];

import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";

const services = [
  {
    title: "Preventive Care",
    description:
      "Our preventive care services include routine checkups, cleanings, and fluoride treatments. During your checkup, we will examine your teeth, gums, and mouth for any signs of dental problems such as cavities, gum disease, or oral cancer. We may also take X-rays to get a more detailed view of your teeth and jaw.",
    image: img1,
  },
  {
    title: "Restorative Dentistry",
    description:
      "Our restorative dentistry services are designed to repair damaged teeth and replace missing teeth using procedures such as fillings, crowns, bridges, and implants. Whether you have a cavity, a cracked tooth, or are missing one or more teeth, we can help restore your smile and improve your oral health.",
    image: img2,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Our cosmetic dentistry services can improve the appearance of your teeth and give you the confidence to smile again. We offer a variety of options, including teeth whitening, veneers, bonding, and more. Let us help you achieve the beautiful smile you deserve.",
    image: img3,
  },
  {
    title: "Orthodontics",
    description:
      "Our orthodontic services can correct teeth and jaw misalignment using braces, aligners, or other appliances. Whether you have crowded or crooked teeth, an overbite or underbite, or other issues, we can help straighten your teeth and improve your bite.",
    image: img4,
  },
  {
    title: "Endodontics",
    description:
      "Our endodontic services can save a damaged or infected tooth by treating the inside of the tooth, including root canals. If you are experiencing tooth pain or sensitivity, we can help alleviate your discomfort and preserve your natural tooth.",
    image: img5,
  },
  {
    title: "Periodontics",
    description:
      "Our periodontic services focus on treating gum disease and related conditions. Whether you have gingivitis, periodontitis, or other issues, we can help restore your gum health and prevent further damage.",
    image: img6,
  },
];

export { inventory, services };
