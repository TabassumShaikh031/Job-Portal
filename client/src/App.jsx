import React, { useContext } from 'react'
import Home from './Pages/Home'
import ApplyJob from './Pages/ApplyJob'
import Application from './Pages/Application'
import { Routes, Route } from 'react-router-dom'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/AppContext'
import Dashboard from './Pages/Dashboard'
import AddJob from './Pages/AddJob'
import ManageJobs from './Pages/ManageJobs'
import ViewApplication from './Pages/ViewApplication'
import 'quill/dist/quill.snow.css'

const App = () => {
  const { showRecruiterLogin, setShowRecruiterLogin } = useContext(AppContext)
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/apply-job/:id' element={<ApplyJob />}></Route>
        <Route path='/applications' element={<Application />}></Route>
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='add-job' element={<AddJob />}></Route>
          <Route path='manage-jobs' element={<ManageJobs />}></Route>
          <Route path='view-applications' element={<ViewApplication />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App