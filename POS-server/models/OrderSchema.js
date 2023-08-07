const mongoose = require("mongoose");
const OrderItemdetails=new mongoose.Schema({
    ProductId: {
        type: String,
    },
    ProductName: {
        type: String,
    },
    ProductCategory: {
        type: String,
    },
    ProductPrice: {
        type: String,
    },
    ProductDiscount: {
        type: String,
    },
    Unit: {
        type: String,
    },
});
const OrderdetailSchema = new mongoose.Schema({
    CustomerId: {
        type: String,
    },
    OrderDate: {
        type: String,
    },
    OrderTotal: {
        type: String,
    },
    PaymentMethod: {
        type: String,
    },
    OrderStatus: {
        type: String,
    },
    ShippingAddress: {
        type: String,
    },
    BillingAddress: {
        type: String,
    },
    OrderNotes: {
        type: String,
    },
    orderitems:[OrderItemdetails]
},
    { timestamps: true });
   
    const OrderSchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: true
    },
    orders: [OrderdetailSchema]
},
    { timestamps: true });
const OrdersDetails = mongoose.model("Orders", OrderSchema);
module.exports = OrdersDetails;