class loginApi {
    post = (id) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    };
}
const loginApi = new loginApi();
export default loginApi;