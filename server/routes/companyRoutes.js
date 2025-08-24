import express from 'express'
import { changeJobApplicationsStatus, changeVisibilty, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middlewares/authMiddleware.js'

const router = express.Router()

//Register a company
//middleware will extract the image and store it in req.file
router.post('/register', upload.single('image'), registerCompany)
//comapny login
router.post('/login', loginCompany)
//get company data 
router.get('/company', protectCompany, getCompanyData)
//post a job
router.post('/post-job', protectCompany, postJob)
//GetApplicants data of company
router.get('/applicants', protectCompany, getCompanyJobApplicants)
//get comapny job list
router.get('/list-jobs', protectCompany, getCompanyPostedJobs)
//change application status
router.post('/change-status', protectCompany, changeJobApplicationsStatus)
//change application visibility
router.post('/change-visibilty', protectCompany, changeVisibilty)

export default router