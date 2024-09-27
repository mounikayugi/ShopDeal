const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { v2: cloudinary } = require("cloudinary");
const multer = require("multer");

  // Configuration
  cloudinary.config({ 
    cloud_name: 'dkoazby0d', 
    api_key: '184681955951453', 
    api_secret: 'bH4CUweaYZLZgHl1tKk3krpjBwU' 
});

// Configure Multer to use CloudinaryStorage and upload to a specific folder
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "ecommerce-app-image/products", // Folder path where images will be stored
      format: async (req, file) => "png", // Adjust file format as needed
      public_id: (req, file) => file.fieldname + "_" + Date.now(), // Unique file name
    },
  });
  
  const upload = multer({ storage: storage });
  
  module.exports = upload;
  