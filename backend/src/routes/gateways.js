const { Router } = require('express');
const {
  getAllgateways,
  getGatewayById,
  updateGateway,
  deleteGatewayById,
  addGateway
} = require('../controllers/gateways');

module.exports = () => {
  const router = Router();
  router.get('/', getAllgateways);
  router.get('/:id', getGatewayById);
  router.put('/:id', updateGateway);
  router.delete('/:id', deleteGatewayById);
  router.post('/', addGateway);
  return router;
};
