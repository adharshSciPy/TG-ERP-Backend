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
                Active:req.body.Active,
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

deleteCategory: async (req, res) => {
    const { companyID, categoryID } = req.params;

    try {
        const object = await Category.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedIndex = object.categories.findIndex(
            nestedObj => nestedObj.id === categoryID
        );

        if (nestedIndex === -1) {
            return res.status(404).send('Nested object not found');
        }

        object.categories.splice(nestedIndex, 1);
        await object.save();

        res.send('Object removed successfully');
    } catch (error) {
        console.error('Error deleting object:', error.message);
        return res.status(500).send('Internal Server Error');
    }
},

updateCategory: async (req, res) => {
    const { companyID, categoryID } = req.params;
    const updatedCategoryData = req.body;
    try {
        const object = await Category.findById(companyID);
        
        if (!object) {
            return res.status(404).send('Object not found');
        }
        const nestedCategory = object.categories.find(
            nestedObj => nestedObj.id === categoryID
        );

        if (!nestedCategory) {
            return res.status(404).send('Nested object not found');
        }

        // Update the category's data with the provided updatedCategoryData
        Object.assign(nestedCategory, updatedCategoryData);

        await object.save();

        res.send('Object updated successfully');
    } catch (error) {
        console.error('Error updating object:', error.message);
        return res.status(500).send('Internal Server Error');
    }
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