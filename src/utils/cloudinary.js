import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";
          
cloudinary.config({ 
  cloud_name: process.env.cloudinary_cloud_name, 
  api_key: process.env.cloudinary_cloud_api_key,
  api_secret: process.env=cloudinary_cloud_api_secret
});

const uploadCloundinary = async (localFilePath)=>{
try {
    if(!localFilePath) return null
    //cloudinary file upload 
    const responeFile = await cloudinary.uploader.upload(localFilePath, {
        resource_type:"auto"
    })
    //file has been uplaoded sucessfull
    console.log("file is upload in cloudinary", responeFile.url )
    return responeFile
} catch (error) {
    fs.unlinkSync(localFilePath)
    return null
    //remove the locally saved temp file
}
}

export {uploadCloundinary}