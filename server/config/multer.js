import multer from 'multer'
//to parse the form data 
const storage = multer.diskStorage({})

const upload = multer({storage})

export default upload