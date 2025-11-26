// models/Customer.js
import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        // kis user ka customer hai (optional)
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        licencePlateNumber: { type: String, required: true },
        address: { type: String, required: true },

        // tumhare customerDetails se:
        state: { type: String }, // active / trial / cancelled, ya jo bhi
    },
    { timestamps: true }
);

export default mongoose.model("Customer", customerSchema);
