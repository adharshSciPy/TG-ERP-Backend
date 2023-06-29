const Customer = require('../model/customerSchema');
const { v4: uuidv4 } = require('uuid');
const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const s3Client = new S3Client({
  // Set your AWS credentials and region here
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.KEYID123,
    secretAccessKey: process.env.KEY123
  }
});

// console.log( KEY,"keyyyyy"); 
module.exports = {
  createCustomerCollection: async (req, res) => {
    const data = new Customer({
      companyId: req.body.companyId,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      console.log("Details added");
    }
    catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
createCustomer: async (req, res) => {
    const file = req.file; // Get the uploaded file
    // Generate a unique key for the file
    const key = `customer/${uuidv4()}-${file.originalname}`;
    const putObjectParams = {
      Bucket: 'tgraderp-bucket',
      Key: key,
      Body: file.buffer,
    };
    console.log(key);
    try {
      // Upload the file to S3
      await s3Client.send(new PutObjectCommand(putObjectParams));  
      // File has been uploaded to S3 successfully
      // res.json({ message: 'Image uploaded successfully',key:key });
      const data = new Customer({
        customers: {
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          BusinessRole: req.body.BusinessRole,
          Category: req.body.Category,
          Description: req.body.Description,
          Email: req.body.Email,
          PhoneWork: req.body.PhoneWork,
          PhoneHome: req.body.PhoneHome,
          PhoneMobile: req.body.PhoneMobile,
          PrimaryCity: req.body.PrimaryCity,
          PrimaryState: req.body.PrimaryState,
          PrimaryCountry: req.body.PrimaryCountry,
          PrimaryPostal: req.body.PrimaryPostal,
          SecondaryCity: req.body.SecondaryCity,
          SecondaryState: req.body.SecondaryState,
          SecondaryCountry: req.body.SecondaryCountry,
          SecondaryPostal: req.body.SecondaryPostal,
          Website: req.body.Website,
          Address : req.body.address,
          BusinessName : req.body.businessName,
          BusinessContact : req.body.businessContact,
          BusinessMail : req.body.businessMail,
          Image : key,
          OfficeDMail : req.body.officeEmail,
          tempAddress : req.body.tempaddress,
          // PrimaryAccount: req.body.PrimaryAccount,
          // Title: req.body.Title,
          // PhoneOther: req.body.PhoneOther,
          // Assigned: req.body.Assigned,
          // Teams: req.body.Teams,
          // Partner: req.body.Partner,
          // Department: req.body.Department,
          // Reports: req.body.Reports,
          // AssistantPh: req.body.AssistantPh,
        }
      });
      Customer.findByIdAndUpdate(req.params.id, { $push: { customers: data.customers } })
        .then(() => {
          res.status(200).json("Successfully Uploaded");
        })
        .catch((err) => {
          console.error('Failed to add address:', err);
          res.status(500).json("ServerError");
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to upload image to S3' });
    }

  },
  customerDetails: async (req, res) => {
    try {
      const user = await Customer.find();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteCustomer: async (req, res) => {
    try {
      const user = await Customer.findByIdAndDelete(req.params.id);
      if (!user) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateCustomer: async (req, res) => {
    try {
      await Customer.findByIdAndUpdate(req.params.id, {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        PrimaryAccount: req.body.PrimaryAccount,
        Title: req.body.Title,
        PhoneWork: req.body.PhoneWork,
        PhoneHome: req.body.PhoneHome,
        PhoneMobile: req.body.PhoneMobile,
        PhoneOther: req.body.PhoneOther,
        Website: req.body.Website,
        Assigned: req.body.Assigned,
        Teams: req.body.Teams,
        Partner: req.body.Partner,
        Category: req.body.Category,
        Department: req.body.Department,
        BusinessRole: req.body.BusinessRole,
        Reports: req.body.Reports,
        AssistantPh: req.body.AssistantPh,
        PrimaryCity: req.body.PrimaryCity,
        PrimaryState: req.body.PrimaryState,
        PrimaryCountry: req.body.PrimaryCountry,
        PrimaryPostal: req.body.PrimaryPostal,
        SecondaryCity: req.body.SecondaryCity,
        SecondaryState: req.body.SecondaryState,
        SecondaryCountry: req.body.SecondaryCountry,
        SecondaryPostal: req.body.SecondaryPostal,
        Description: req.body.Description
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },
  getCustomer: async (req, res) => {
    const user = req.params;
    try {
      const data = await Customer.findById(user.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

  //count
  getcount: async (req, res) => {
    const id = req.params.id;
    try {
      const customers = await Customer.find({ companyId: id });
      if (!customers || customers.length === 0) {
        return res.status(404).json({ message: 'No customers found.' });
      }
      const count = customers[0].customers.length;
      res.status(200).json({ message: 'Total number of customers', count });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'An error occurred while fetching the count.' });
    }
  },

  getimage: async(req,res) => {
    const folder = req.params.folder; // Get the folder name from the request URL
    const key = `${folder}/${req.params.key}`; // Get the image key from the request URL
  
    // Set up the parameters for retrieving the image from S3
    const getObjectParams = {
      Bucket: 'tgraderp-bucket',
      Key: key
    };
  
    try {
      // Retrieve the image from S3
      const data = await s3Client.send(new GetObjectCommand(getObjectParams));
  
      // Convert the image data to a Buffer
      const imageBuffer = await new Promise((resolve, reject) => {
        const chunks = [];
        data.Body.on('data', (chunk) => chunks.push(chunk));
        data.Body.on('end', () => resolve(Buffer.concat(chunks)));
        data.Body.on('error', (error) => reject(error));
      });
  
      // Set the appropriate content type for the response
      res.setHeader('Content-Type', data.ContentType);
  
      // Send the image data in the response
      res.send(imageBuffer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to retrieve image from S3' });
    }
  }

}