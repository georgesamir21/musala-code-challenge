const { Router } = require('express');
const {
  getAllDevices,
  getDeviceById,
  updateDeviceById,
  deleteDeviceById,
  addDevice
} = require('../controllers/devices');

module.exports = () => {
  const router = Router();
  router.get('/', getAllDevices);
  router.get('/:id', getDeviceById);
  router.put('/:id', updateDeviceById);
  router.delete('/:id', deleteDeviceById);
  router.post('/', addDevice);
  return router;
};
