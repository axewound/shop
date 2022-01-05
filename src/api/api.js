import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
});


export const usersAPI = {
    getUsers() {


        return instance.get()
            .then(response => {
                return response.data;
            });
    }
}
