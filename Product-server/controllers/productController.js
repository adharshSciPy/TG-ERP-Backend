const Product = require("../models/productSchema");
module.exports = {
  createProductCollection: async (req, res) => {
    const data = new Product({
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

  // post

  addProductDetails: async (req, res) => {
    const data = new Product({
      products: {
        Name: req.body.Name,
        Ribbon: req.body.Ribbon,
        Description: req.Description,
        Category: req.body.Category,
        Tax: req.body.Tax,
        Fulfilledby: req.body.Fulfilledby,
        Brand: req.body.Brand,

        //

        Price: req.body.Price,
        OnSale: req.body.OnSale,
        ShowPricePerUnit: req.body.ShowPricePerUnit,
        CostOFGoods: req.body.CostOFGoods,
        Profit: req.body.Profit,
        Margin: req.body.Margin,

        // Product Option 

        Type: req.body.Type,
        Choice: req.body.Choice,

        // Inventory of Shipping

        Status: req.body.Status,
        SKU: req.body.SKU
      }
    });
    Product.findByIdAndUpdate(req.params.id, { $push: { products: data.products } })
      .then(() => {
        res.status(200).json("Successfully Uploaded")
      })
      .catch((err) => {
        console.error('Failed to add address:', err);
        res.status(500).json("ServerError")
      });
  },
  //get

  getProductDetails: async (req, res) => {
    try {
      const product = await Product.find();
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  // deleteProductDetails: async (req, res) => {
  //   try {
  //     const product = await Product.findByIdAndDelete(req.params.id);
  //     if (!product) throw Error("No user found");
  //     res.status(200).json({ success: true });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // },

deleteProductDetails: async (req, res) => {
    const { companyID, productID } = req.params;

    try {
        const object = await Product.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedIndex = object.products.findIndex(
            nestedObj => nestedObj.id === productID
        );

        if (nestedIndex === -1) {
            return res.status(404).send('Nested object not found');
        }

        object.products.splice(nestedIndex, 1);
        await object.save();

        res.send('Object removed successfully');
    } catch (error) {
        console.error('Error deleting object:', error.message);
        return res.status(500).send('Internal Server Error');
    }
},



  //put

editProductDetails: async (req, res) => {
    const { companyID, productID } = req.params;
    const updatedProductData = req.body;

    try {
        const object = await Product.findById(companyID);

        if (!object) {
            return res.status(404).send('Object not found');
        }

        const nestedProduct = object.products.find(
            nestedObj => nestedObj.id === productID
        );

        if (!nestedProduct) {
            return res.status(404).send('Nested object not found');
        }

        // Update the product's data with the provided updatedProductData
        Object.assign(nestedProduct, updatedProductData);

        await object.save();

        res.send('Object updated successfully');
    } catch (error) {
        console.error('Error updating object:', error.message);
        return res.status(500).send('Internal Server Error');
    }
},

  // get by id

  getidProductDetails: async (req, res) => {
    const product = req.params;
    try {
      const data = await Product.findById(product.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  //count
  getcount: async (req, res) => {
    const id = req.params.id;
    try {
      const products = await Product.find({ companyId: id });
      if (!products || products.length === 0) {
        return res.status(404).json({ message: 'No products found.' });
      }
      const count = products[0].products.length;
      res.status(200).json({ message: 'Total number of products', count });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'An error occurred while fetching the count.' });
    }
  },
  getidProductDetailsById: async (req, res) => {
    const collection = req.params.id;
    const id = req.params.ProductID;
    try {
      const data = await Product.findById(collection);

      const Productdetails = data.products.find(x => x._id ==id)
      res.status(200).json(Productdetails);
    } catch (error) {
      console.log(error.message);
    }
  },


}