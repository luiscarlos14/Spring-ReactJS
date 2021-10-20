import axios from 'axios';

export async function ListUser(){
    
    const res = (await axios.get("http://localhost:8080/user")).data;
    return res;
}


export async function AddUser(
    name,
    email,
    phone,
    address,
    district,
    addressNumber,
    city,
    state,
    businessEmail,
    refreshPage
  ) {
    await axios.post("http://localhost:8080/user",
        {
        name: name,
        email: email,
        phone: phone,
        address: address,
        district: district,
        address_number: addressNumber,
        city: city,
        state: state,
        business_email: businessEmail
        }
      ).then(function (response) {
        if(response.status === 201){
            refreshPage(201);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }



