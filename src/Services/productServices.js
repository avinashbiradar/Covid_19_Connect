import Axios from "./axiosServices";
const baseUrl = "http://covid19.ap-south-1.elasticbeanstalk.com";
const baseUrlOne="https://covid19connect.s3.ap-south-1.amazonaws.com/cities.json"
const axios = new Axios();

export default class productServices {
  getRequestsForMedicine = () => {
      console.log("in the product")
    return axios.Get(`${baseUrl}/card`);
  };

  getRequestsForCity = () => {
    console.log("in the product for city ")
  return axios.Get(`${baseUrlOne}`);
};
}
//   getWishListBooks = () => {
//     const user = localStorage.getItem("bookStoreToken")
//     return axios.Get(`${baseUrl}/get_wishlist_items`,{
//         headers: {
//           "x-access-token": `${user}`,
//         },
//       });
//   };

//   addToCart = (id) => {
//     const user = localStorage.getItem("bookStoreToken")
//     return axios.Post(`${baseUrl}/add_cart_item/${id}`,false,{
//         headers: {
//           "x-access-token": `${user}`,
//         },
//       });
//   };
//   addToWishList = (id) => {
//     const user = localStorage.getItem("bookStoreToken")
//     return axios.Post(`${baseUrl}/add_wish_list/${id}`,false,{
//         headers: {
//           "x-access-token": `${user}`,
//         },
//       });
//   };

//   getCartItem = () => {
//     const user = localStorage.getItem("bookStoreToken")
//     return axios.Get(`${baseUrl}/get_cart_items`, {
//         headers: {
//           "x-access-token": `${user}`,
//         },
//       });
//   };

//   deleteCartItem = (id) => {
//     const user = localStorage.getItem("bookStoreToken")
//     return axios.Delete(`${baseUrl}/remove_cart_item/${id}`,{
//         headers: {
//           "x-access-token": `${user}`,
//         },
//       });
//   }

//   deleteWishList = (id) => {
//     const user = localStorage.getItem("bookStoreToken")
//     return axios.Delete(`${baseUrl}/remove_wishlist_item/${id}`,{
//         headers: {
//           "x-access-token": `${user}`,
//         },
//       });
//   }

//   addOrder = (data) => {
//     const user = localStorage.getItem("bookStoreToken")
//     console.log(data);
//     return axios.Post(`${baseUrl}/add/order`,data,{
//         headers: {
//           "x-access-token": `${user}`,
//         },
//       });
//   };
//   addQuantity = (data,cartItem_id) => {
//     const user = localStorage.getItem("bookStoreToken")
//     return axios.Put(`${baseUrl}/cart_item_quantity/${cartItem_id}`,data,{
//         headers: {
//           "x-access-token": `${user}`,
//         },
//       });
//   };
// 