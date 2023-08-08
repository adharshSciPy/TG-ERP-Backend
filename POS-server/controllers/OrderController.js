const Order = require('../models/OrderSchema');
module.exports = {
    createorderCollection: async (req, res) => {
        const data = new Order({
            companyId: req.body.companyId,
        });
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
            console.log("Details added");
        }
        catch (error) {
            res.status(400).json({ meesage: error.message })
        }
    },
    order: async (req, res) => {
        const data = new Order({
            orders: {
                CustomerId: req.body.CustomerId,
                OrderDate: req.body.OrderDate,
                OrderTotal: req.body.OrderTotal,
                PaymentMethod: req.body.PaymentMethod,
                OrderStatus: req.body.OrderStatus,
                ShippingAddress: req.body.ShippingAddress,
                BillingAddress: req.body.BillingAddress,
                OrderNotes: req.body.OrderNotes,
                orderitems: req.body.orderitems,
            }
        });
        Order.findByIdAndUpdate(req.params.id, { $push: { orders: data.orders } })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
                //console.log(data.orders)
            })
            .catch((err) => {
                console.error('Failed to add address:', err);
                res.status(500).json("ServerError")
            });
    },
    orderdetails: async (req, res) => {
        try {
            const account = await Order.find();
            res.json(account);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // deleterfq: async (req, res) => {
    //     try {
    //         const sales = await Rfq.findByIdAndDelete(req.params.id);
    //         if (!sales) throw Error("No user found");
    //         res.status(200).json({ success: true });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },

    deleteorder: async (req, res) => {
        const { companyID, salesID } = req.params;

        Order.findById(companyID, (err, object) => {
            if (err) {
                console.error('Error finding object:', err);
                return res.status(500).send('Internal Server Error');
            }

            if (!object) {
                return res.status(404).send('Object not found');
            }
            else {
                console.log(object);
            }

            const nestedIndex = object.orders.findIndex(nestedObj => nestedObj.id === salesID);
            if (nestedIndex === -1) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedIndex);
            }

            object.orders.splice(nestedIndex, 1);
            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.send('Object removed successfully');
            });

        })
    },

    updateorder: async (req, res) => {
        const { companyID, salesID } = req.params;
        const updatedorderData = req.body; // Assuming the updated data is sent in the request body
        console.log(companyID, "companyid")
        console.log(salesID, "salesid")
        console.log(updatedorderData, "salesid")

        Order.findById(companyID, (err, object) => {
            if (err) {
                console.error('Error finding object:', err);
                return res.status(500).send('Internal Server Error');
            }

            if (!object) {
                return res.status(404).send('Object not found');
            }
            else {
                console.log("ok");
            }

            const nestedorder = object.orders.find(nestedObj => nestedObj.id === salesID);
            console.log(nestedorder)

            if (!nestedorder) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedorder, "here");
            }

            // Update the rfq's data with the provided updatedCustomerData
            Object.assign(nestedorder, updatedorderData);

            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.send('Object updated successfully');
            });
        });
    },


    getorder: async (req, res) => {
        const order1 = req.params;
        try {
            const data = await Order.findById(order1.id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error.message);
        }
    },

    //count
    getcount: async (req, res) => {
        const id = req.params.id;
        try {
            const orders = await Order.find({ _id: id });
            if (!orders || orders.length === 0) {
                return res.status(404).json({ message: 'No orders found.' });
            }
            const count = orders[0].orders.length;
            res.status(200).json({ message: 'Total number of orders', count });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'An error occurred while fetching the count.' });
        }
    },
    getorderById: async (req, res) => {
        const collection = req.params.id;
        const id = req.params.OrderID;
        try {
            const data = await Order.findById(collection);

            const Orderdetails = data.orders.find(x => x._id == id)
            res.status(200).json(Orderdetails);
        } catch (error) {
            console.log(error.message);
        }
    },
}                          