const { Router } = require('express');
const {
  getAllgateways,
  getGatewayById,
  updateGateway,
  deleteGatewayById,
  addGateway,
  deleteDeviceById,
  addDevice
} = require('../controllers/gateways');

module.exports = () => {
  const router = Router();
  router.get('/', getAllgateways);
  router.get('/:id', getGatewayById);
  router.put('/:id', updateGateway);
  router.delete('/:id', deleteGatewayById);
  router.delete('/:id/device/:deviceId', deleteDeviceById);
  router.post('/:id/device', addDevice);
  router.post('/', addGateway);

  return router;
};
