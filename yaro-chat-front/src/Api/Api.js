import Vue from 'vue'
import axios from 'axios'

Vue.use(axios);


export default ()=>{
	return axios.create({
		baseURL:'http://localhost:8000/api'
	});
}