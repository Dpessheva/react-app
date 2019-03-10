import { post } from '../data/request';



class AuthenticationService {
    constructor(){
        this.baseUrl = 'http://localhost:5000/auth';
        this.loginsUrl = `${this.baseUrl}/login`;
        
    }

    login(credentials){
        return post(this.loginsUrl , credentials);
    }
   
}

export default AuthenticationService;