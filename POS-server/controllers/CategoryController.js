const Category = require('../models/CategorySchema');
module.exports = {
    createcategoryCollection: async (req, res) => {
        const data = new Category({
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
    category: async (req, res) => {
        const data = new Category({
            categories: {
                CategoryName:req.body.CategoryName,
                Description: req.body.Description,
                Product:req.body.Product,
            }
        });
        Category.findByIdAndUpdate(req.params.id, { $push: { categories: data.categories} })
            .then(() => {
                res.status(200).json("Successfully Uploaded")
                //console.log(data.categories)
            })
            .catch((err) => {
                console.error('Failed to add address:', err);
                res.status(500).json("ServerError")
            });
    },
    categorydetails: async (req, res) => {
        try {
            const account = await Category.find();
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

    deletecategory: async (req, res) => {
        const { companyID, salesID } = req.params;

        Category.findById(companyID, (err, object) => {
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

            const nestedIndex = object.categories.findIndex(nestedObj => nestedObj.id === salesID);
            if (nestedIndex === -1) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedIndex);
            }

            object.categories.splice(nestedIndex, 1);
            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.send('Object removed successfully');
            });

        })
    },

    updatecategory: async (req, res) => {
        const { companyID, salesID } = req.params;
        const updatedcategoryData = req.body; // Assuming the updated data is sent in the request body

        Category.findById(companyID, (err, object) => {
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

            const nestedCategory = object.categories.find(nestedObj => nestedObj.id === salesID);
            console.log(nestedCategory)

            if (!nestedCategory) {
                return res.status(404).send('Nested object not found');
            }
            else {
                console.log(nestedCategory, "here");
            }

            // Update the category's data with the provided updatedCustomerData
            Object.assign(nestedCategory, updatedcategoryData);

            object.save((err) => {
                if (err) {
                    console.error('Error saving object:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.send('Object updated successfully');
            });
        });
    },


    getcategory: async (req, res) => {
        const category1 = req.params;
        try {
            const data = await Category.findById(category1.id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error.message);
        }
    },

    //count
    getcount: async (req, res) => {
        const id = req.params.id;
        try {
            const categories = await Category.find({ _id: id });
            if (!categories || categories.length === 0) {
                return res.status(404).json({ message: 'No category found.' });
            }
            const count = categories[0].categories.length;
            res.status(200).json({ message: 'Total number of categories', count });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'An error occurred while fetching the count.' });
        }
    },
    getcategoryById: async (req, res) => {
        const collection = req.params.id;
        const id = req.params.CategoryID;
        try {
            const data = await Category.findById(collection);

            const Categorydetails = data.categories.find(x => x._id == id)
            res.status(200).json(Categorydetails);
        } catch (error) {
            console.log(error.message);
        }
    },
}