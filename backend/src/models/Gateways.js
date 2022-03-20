const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');
// const { deviceSchema } = require('./Devices');
const maxDevicesLimit = (devices) => {
  return devices.length <= 10;
};

const deviceSchema = new Schema(
  {
    uid: {
      type: Number,
      required: true,
      // unique: true,
      default: Date.now
    },
    vendor: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ['online', 'offline']
    }
  },
  {
    timestamps: {
      createdAt: 'created_at'
      // updatedAt: 'updated_at'
    }
  }
);

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
      type: [deviceSchema],
      validate: [maxDevicesLimit, '{PATH} exceeds the limit of 10 devices!']
    }
  });

  const Gateway = model('Gateway', gatewaySchema);
  return Gateway;
};
