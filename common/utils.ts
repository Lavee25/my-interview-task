import multer from 'multer';

const upload=multer({
    storage:multer.diskStorage({
       destination:function(req,res,cb){
          cb(null,"./public/uploads/")
        },
       filename:function(req,file,cb){
          cb(null,file.fieldname+"-"+Date.now()+".jpg") }
       })
    }).single("image_url")
    
    export default upload;