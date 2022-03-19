const { DevicesModel } = require('../models');

exports.getAllDevices = async (req, res) => {
  try {
    const devices = await DevicesModel.find({});
    return res.status(200).json({ data: devices });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.getDeviceById = async (req, res) => {
  try {
    const _id = req.params.id;
    const device = await DevicesModel.findOne({ _id });
    return res.status(200).json({ data: device });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.updateDeviceById = async (req, res) => {
  try {
    const _id = req.params.id;
    const { body } = req;
    const updateResult = await DevicesModel.updateOne({ _id }, body, {
      runValidators: true
    });
    return res.status(204).json({ data: updateResult });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.deleteDeviceById = async (req, res) => {
  try {
    const _id = req.params.id;
    await DevicesModel.deleteOne({ _id });
    return res.status(204).json({});
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.addDevice = async (req, res) => {
  try {
    const { uid = undefined, vendor, status, gateway } = req.body;
    const device = new DevicesModel({
      uid,
      vendor,
      status,
      gateway
    });
    const addedDevice = await device.save();
    return res.status(201).json({ data: addedDevice });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
