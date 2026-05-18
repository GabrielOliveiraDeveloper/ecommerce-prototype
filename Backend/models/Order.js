import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    shopID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
    chardID: {
        type: String,
        required: true,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    qrCode: {
        type: String,
        required: true,
    },
    brCode: {
        type: String,
        required: true,
    },
    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: ['PENDING', 'PAID', 'CANCELLED'],
        default: 'PENDING',
    },
  },
  { timestamps: true }
);

  
export default mongoose.model("Order", orderSchema);