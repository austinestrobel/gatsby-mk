import React from "react";

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


const Checkout = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_CpXDMkBjNYFnjWSHtpzTFjlw00TrgZlcHm")
  }

  async redirectToCheckout(event) {
    event.preventDefault()
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
        type="submit"
        method="POST"
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        Donate
      </button>
    )
  }
}
export default Checkout