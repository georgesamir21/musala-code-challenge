const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');
module.exports = () => {
  const gatewaySchema = new Schema({
    name: {
      type: String,
      required: true
    },
    serial_number: {
      type: String,
      default: uuidv4,
      unique: true,
      required: true
    },
    ip_address: {
      type: String,
      required: true,
      validate: {
        validator: (ip) =>
          /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
            ip
          ),
        message: (data) => `${data.value} is invalid IPV4 address!'`
      }
    },
    devices: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Device' }],
      validate: [maxDevicesLimit, '{PATH} exceeds the limit of 10 devices!']
    }
  });

  const maxDevicesLimit = (devices) => {
    devices.length <= 10;
  };

  const Gateway = model('Gateway', gatewaySchema);
  return Gateway;
};
