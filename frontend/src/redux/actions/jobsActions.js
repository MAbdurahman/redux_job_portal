import axios from 'axios'
import { message } from 'antd'
import { GET_ALL_JOBS } from './../constants/jobsConstants';



/*=============================================
         
================================================*/
export const getAllJobs = () => async (dispatch) =>  {
   try {
      const response = await axios.get('/api/v1/jobs/get-all-jobs')
      dispatch({type: GET_ALL_JOBS,
                  payload: response.data})
   } catch (error) {
      console.log(error)
   }
}