const { GatewaysModel } = require('../models');

exports.getAllgateways = async (req, res) => {
  try {
    const perPage = req.query.perPage;
    const gateways = await GatewaysModel.find()
      .skip(0)
      .limit(+perPage)
      .populate('devices');
    return res.status(200).json({ data: gateways });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.getGatewayById = async (req, res) => {
  const _id = req.params.id;
  try {
    const gateway = await GatewaysModel.findOne({ _id }).populate('devices');
    return res.status(200).json({ data: gateway });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.updateGateway = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const updateResult = await GatewaysModel.updateOne({ _id }, body, {
      runValidators: true
    });
    return res.status(204).json({ data: updateResult });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.deleteGatewayById = async (req, res) => {
  const _id = req.params.id;
  try {
    const deleteResult = await GatewaysModel.deleteOne({ _id });
    console.log(deleteResult);
    return res.status(204).json({});
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.addGateway = async (req, res) => {
  try {
    const {
      name,
      serial_number = undefined,
      ip_address,
      devices = []
    } = req.body;
    const gateway = new GatewaysModel({
      name,
      serial_number,
      ip_address,
      devices
    });
    const addedGateway = await gateway.save();
    return res.status(201).json({ data: addedGateway });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.deleteDeviceById = async (req, res) => {
  try {
    const { id, deviceId } = req.params;
    const gateway = await GatewaysModel.findById(id);
    await gateway.devices.id(deviceId).remove();
    await gateway.save();
    return res.status(204).json({});
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

exports.addDevice = async (req, res) => {
  try {
    const id = req.params.id;
    const { vendor, status } = req.body;
    const gateway = await GatewaysModel.findById(id);
    await gateway.devices.push({ vendor, status });
    // await gateway.devices.create({ vendor, status });
    const updatedGateway = await gateway.save();
    return res.status(201).json({ data: updatedGateway });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
