import express from 'express'
import './config/instrument.js'
import cors from "cors"
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'
import CompanyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import JobRoutes from './routes/jobRoutes.js'


//Initialize express
const app = express()
//connect to db
await connectDB()
await connectCloudinary()


//middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req, res) => res.send("Api Working"))
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhooks', clerkWebhooks)
app.use('/api/company', CompanyRoutes)
app.use('/api/jobs', JobRoutes)


//Port
const PORT = process.env.PORT || 5000
Sentry.setupExpressErrorHandler(app);
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`)
})
