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
    },
    getProfile(userId) {
        console.log('Obsolete method. Please profileAPI object.')


        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        /*debugger*/
        return instance.get(`/` + userId);
    }
}
