import React from "react";
// import axios from 'axios';

// import { format } from "url";
// var yup = require('yup')
// const variables = {
//   firstName: document.getElementById('fName').value,
//   lastName: document.getElementById('lName').value,
//   emailAddress: document.getElementById('email').value,
//   contactNumber: document.getElementById('phone').value,
//   address1: document.getElementById('add1').value,
//   city: document.getElementById('cityy').value,
//   stateProvinceGeoId: document.getElementById('statee').value,
//   postalCode: document.getElementById('zipp').value,
// }

// const FirstName = function() {
//   window.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('theButton').addEventListener('click', function(){
//     this.value = document.getElementById('fName').value;
//   }, true)
//   })
//   };

const buttonStyles = {
  fontSize: "15px",
  textAlign: "center",
  color: "#34495E",
  outline: "none",
  padding: "12px 40px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "#B7DFEA",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

// class extends React.Component
// constructor
// super
// this.state

// const variables = {
//   firstName: {FirstName},
//   lastName: 'dasdf',
//   emailAddress: 'asdf@gmail.com',
//   contactNumber: '1234124',
//   address1: '2134 St',
//   city: 'asdf',
//   stateProvinceGeoId: 'asdf',
//   postalCode: 'asdf',
// }


const Checkout = class extends React.Component {
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_CpXDMkBjNYFnjWSHtpzTFjlw00TrgZlcHm")
  }

  async redirectToCheckout(event) {
    event.preventDefault()
  //   console.log(variables)
  //   axios.post('http://localhost:8080/apps/DonationApp/DonationForm/createCCOSApplication', 
  //   variables,
  //   {withCredentials: true}
  //   )
  //   .then(res => {
  //     console.log('Axios response', res)
  //     if (res.status === 200) {
  //         //Do Stripe API Call
  //         // this.chargeStripe(donor.amount)
  //         console.log("Moqui returned 200")
  //     }

  // })
  // .catch(error => {
  //     console.log("error:", error)
  // });
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_FZHu67qCyGiGPd", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/404`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    return (
      <submit
        type="submit"
        method="POST"
        // style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        
      </submit>
    )
  }
}
export default Checkout