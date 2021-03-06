import axios from 'axios'
import { message } from 'antd'
import { GET_ALL_JOBS } from './../constants/jobsConstants';
import { IS_LOADING } from './../constants/loaderConstants'



/*=============================================
         
================================================*/
export const getAllJobs = () => async (dispatch) =>  {
   dispatch({ type: IS_LOADING, payload: true });
   try {
      const response = await axios.get('/api/v1/jobs/get-all-jobs')
      dispatch({type: GET_ALL_JOBS,
                  payload: response.data});
      dispatch({ type: IS_LOADING, payload: false });
   } catch (error) {
      console.log(error);
      dispatch({ type: IS_LOADING, payload: false });
   }
}