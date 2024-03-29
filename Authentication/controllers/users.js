const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");      
const fetch = require("node-fetch");

// Load User model
const User = require("../models/user");
// Load input validation
const SignupValidation = require("../validator/SignupValidation");
const SigninValidation = require("../validator/SigninValidation");
module.exports = {
  //  ---------------------------------------- //signup method to add a new user//--------------------------- //

  signup: async (req, res) => {
    const { firstName,lastName, email, password,role,Company } = req.body;
    const { errors, isValid } = SignupValidation(req.body);
    if(Company == undefined){
      Company = null
    }
    try {
      if (!isValid) {
        res.status(404).json(errors);  
      } else {
        await User.findOne({ email }).then(async (exist) => {
          if (exist) {
            errors.email = "Email already in use";
            res.status(404).json(errors); 
          } else {
            const hashedpassword = bcrypt.hashSync(password, 8);
            const result = await User.create({
              firstName,
              lastName,
              email,
              password: hashedpassword,
              role: role,
              Company : Company
            });
            
            res.status(201).json({ message: "user added with success",id:result._id,firstName:result.firstName,lastName:result.lastName,email: result.email});
          }
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  //  ---------------------------------------- //signin method to add a new user//--------------------------- //
  signin: async (req, res) => {
    const { email, password } = req.body;
    const { errors, isValid } = SigninValidation(req.body);

    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        await User.findOne({ email }).then(async (user) => {
          if (!user) {
            errors.email =
              "Email does not exist ! please Enter the right Email or You can make account";
            res.status(404).json(errors);
          }
          // Compare sent in password with found user hashed password
          const passwordMatch = bcrypt.compareSync(password, user.password);
          if (!passwordMatch) {
            errors.password = "Wrong Password";
            res.status(404).json(errors);
          } else {
            // generating a token and storing it in a local storage
            const token = jwt.sign({ _id: user._id , role: user.role}, "sooraj_DOING_GOOD", {
              expiresIn: "8h",
            });
            const options = {
              expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
              httpOnly: true,
              sameSite: "lax",
            };
            // res.cookie("Authorization", token, options);
            res.status(201).json({
              token
            });
          }
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  },


  verifyToken : async(req,res) =>{
    try{
      const token = req.body.token ;
      const decoded = jwt.verify(token,"sooraj_DOING_GOOD")
      res.status(200).json(decoded)

    }catch(error) {
      return res.status(401).json({
        message : 'Auth Failed'
      });
    }

  },

   getUser : async(req,res) => {
    const id = req.params.id;
    console.log(id,"id vanno");
    try {
      const userdata = await User.findById(id);
      const data = {
        firstName : userdata.firstName,
        lastName : userdata.lastName,
        email : userdata.email,
        Company: userdata.Company
       }
      res.status(200).json(data)

    }catch (error) {

    }
   },

   users: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  
   InitializeCompany: async (req, res) => {
    const {Companyid,userid} =req.body;
    try {
      await User.findByIdAndUpdate(req.params.id, {
          role:"owner",
          Company: Companyid
      });
      const token = jwt.sign({ _id: userid, role: "owner"}, "sooraj_DOING_GOOD", {
        expiresIn: "8h",
      });
      res.status(200).json(token);
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },


  //  ---------------------------------------- //Google Authentication //--------------------------- //
  googleLogin: async (req, res) => {
    const client = new OAuth2Client(process.env.webClientId);
    const { idToken } = req.body;
    let response = await client.verifyIdToken({
      idToken,
      audience: process.env.webClientId,
    });
    console.log("-response--->", response);

    const { email_verified, email, name } = response.payload;
    const image = response.payload.picture;
    if (email_verified) {
      let user = await User.findOne({ email });
      try {
        if (user) {
          console.log("-user--->", user);
          const token = jwt.sign({ _id: user._id }, "sooraj_Still_Alive", {
            expiresIn: "12h",
          });
          return res.json({
            status: "Success",
            message: "welcom " + user.name + " to your home page",
            user,
            token,
          });
        } else {
          let password = email + " sooraj_DOING_GOOD";
          const user = await User.create({
            name,
            email,
            password,
            image,
          });

          const token = jwt.sign({ _id: user._id }, "sooraj_DOING_GOOD", {
            expiresIn: "12h",
          });
          return res.json({
            status: "Success",
            message: "welcome " + user.name + " to your home page",
            user,
            token,
          });
        }
      } catch (error) {
        console.log(error);
        res.status(400).send(error);
      }
    } else {
      return res.status(400).json({
        message: "Google login failed try again",
      });
    }
  },
  //  ---------------------------------------- //Facebook Authentication //--------------------------- //
  FacebookLogin: async (req, res) => {
    try {
      console.log("FACEBOOK LOGIN REQ BODY", req.body);
      const { userID, accessToken } = req.body;
      const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`;
      let response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      const { email, name } = data;
      const image = data.picture.data.url;
      let user = await User.findOne({ email });
      if (user) {
        const token = jwt.sign({ _id: user._id }, "sooraj_DOING_GOOD", {
          expiresIn: "12h",
        });
        return res.json({
          status: "Success",
          message: "welcom " + user.name + " to your home page",
          user,
          token,
        });
      } else {
        let password = email + " sooraj_DOING_GOOD";
        const user = await User.create({
          name,
          email,
          password,
          image,
        });
        if (!user) {
          return res.status(400).json({
            message: "User signup failed with facebook",
          });
        }
        const token = jwt.sign({ _id: user._id }, "sooraj_DOING_GOOD", {
          expiresIn: "12",
        });
        return res.json({
          status: "Success",
          message: "welcom " + user.name + " to your home page",
          user,
          token,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};