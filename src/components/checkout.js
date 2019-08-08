import React from "react"
import axios from 'axios';
// import { format } from "url";
// var yup = require('yup')


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

const variables = {
  firstName: 'Austin',
  lastName: 'Strobel',
  emailAddress: 'austin@gmail.com',
  contactNumber: '9283001234',
  address1: '123 Austin St',
  city: 'Austin',
  stateProvinceGeoId: 'USA_TX',
  postalCode: '42533',

}

const Checkout = class extends React.Component {
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_CpXDMkBjNYFnjWSHtpzTFjlw00TrgZlcHm")
  }

  async redirectToCheckout(event) {
  
    event.preventDefault()
    axios.post('http://localhost:8080/apps/DonationApp', 
    variables,
    {withCredentials: true}
    )
    .then(res => {
      console.log('Axios response', res)
      if (res.status === 200) {
          //Do Stripe API Call
          // this.chargeStripe(donor.amount)
          console.log("Moqui returned 200")
      }

  })
  .catch(error => {
      console.log("error:", error)
  });
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
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        DONATE
      </button>
    )
  }
}
export default Checkout