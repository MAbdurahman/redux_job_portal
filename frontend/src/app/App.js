import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import AppliedJobsPage from '../pages/AppliedJobsPage';
import PostJobPage from '../pages/PostJobPage';
import ProfilePage from '../pages/ProfilePage';
import JobInfoPage from '../pages/JobInfoPage';



export default function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={HomePage}  />
    <Route path="/applied-jobs" exact component={AppliedJobsPage}  />
    <Route path="/post-job" exact component={PostJobPage}  />
    <Route path="/profile" exact component={ProfilePage}  />
    <Route path="/job-info" exact component={JobInfoPage}  />
    
    </BrowserRouter>
  )
}
