deleteCustomer: async (req, res) => {
    const { companyID, customerID } = req.params;

    Customer.findById(companyID, (err, object) => {
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

        const nestedIndex = object.customers.findIndex(nestedObj => nestedObj.id === customerID);
        if (nestedIndex === -1) {
            return res.status(404).send('Nested object not found');
        }
        else {
            console.log(nestedIndex);
        }

        object.customers.splice(nestedIndex, 1);
        object.save((err) => {
            if (err) {
                console.error('Error saving object:', err);
                return res.status(500).send('Internal Server Error');
            }

            res.send('Object removed successfully');
        });

    })
}



router.delete("/deleteCustomer/:companyID/:customerID", customerController.deleteCustomer);