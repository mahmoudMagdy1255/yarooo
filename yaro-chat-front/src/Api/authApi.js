import api from './Api'

export default{
	register(data){
		return api().post('/users' , data);
	}
}