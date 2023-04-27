const Inventory = require("../models/inventoryModel");
const asyncHandler = require("express-async-handler");

const getInventory = asyncHandler(async (req, res) => {
  const inventory = await Inventory.find();
  res.json(inventory);
});

const createInventoryItem = asyncHandler(async (req, res) => {
  const {
    item_name,
    sku,
    serial_number,
    vendor_details,
    item_location,
    expiry_date,
    quantity_available,
    minimum_stock,
  } = req.body;

  // check if SKU already exists in database
  const existingItem = await Inventory.findOne({ sku });

  if (existingItem) {
    res.status(400).json({ error: "SKU is already exists in the database" });
    throw new Error(`SKU ${sku} already exists in database`);
  }

  // SKU does not exist, create new inventory item
  const inventoryItem = new Inventory({
    item_name,
    sku,
    serial_number,
    vendor_details,
    item_location,
    expiry_date,
    quantity_available,
    minimum_stock,
  });

  const createdItem = await inventoryItem.save();
  res.status(201).json(createdItem);
});

const deleteInventoryItem = asyncHandler(async (req, res) => {
  const removedItem = await Inventory.findOneAndDelete({
    _id: req.params.id,
  })
    .exec()
    .then(() => {
      res.json({ success: "Item deleted" });
    })
    .catch((err) => {
      res.status(404).json({ error: "Item not found" });
    });
});

const sendEmail = asyncHandler(async (req, res) => {});

module.exports = {
  getInventory,
  createInventoryItem,
  deleteInventoryItem,
  sendEmail,
};
