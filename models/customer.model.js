import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    licencePlateNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    state: {
        type: String,
        default: "Al Quoz"
    },
    invoiceCount: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

customerSchema.virtual('invoices', {
    ref: 'Invoice',
    localField: '_id',
    foreignField: 'customer',
    justOne: false
});

customerSchema.set('toObject', { virtuals: true });
customerSchema.set('toJSON', { virtuals: true });

export default mongoose.model("Customer", customerSchema);
