const { Schema, model } = require('mongoose');

module.exports = () => {
  const deviceShema = new Schema(
    {
      uid: {
        type: Number,
        required: true,
        // unique: true,
        default: Date.now
      },
      vendor: {
        type: String
      },
      status: {
        type: String,
        required: true,
        enum: ['online', 'offline']
      },
      gateway: {
        type: Schema.Types.ObjectId,
        ref: 'Gateway'
      }
    },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    }
  );

  const Device = model('Device', deviceShema);
  return Device;
};

exports.deviceSchema = new Schema(
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
