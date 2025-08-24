


//get all jobs

import Job from "../models/Job.js"

export const getJobs = async (req, res) => {
    try {
        //.populate() is a Mongoose method used to automatically replace a referenced ID in a document with the actual document data from another collection.
        const jobs = await Job.find({ visible: true })
        .populate({ path: 'companyId', select: '-password' })
        res.json({ success: true, jobs })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }


}

//get a single job by id
export const getJobById = async (req, res) => {

}