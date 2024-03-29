import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledTextField from "../components/material-ui"
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Checkout from '../components/checkout';


const stripe = window.Stripe("pk_test_CpXDMkBjNYFnjWSHtpzTFjlw00TrgZlcHm");

const IndexPage = (props) => (




  <Layout>
    <div className="page-container">
      <div className="content-wrap">
        <div className="layoutBody">
          <img src={window.location.origin + '/img/100-secure.png'} alt="secure" class="secure" title="100% Secure"/>

          <SEO title="Home" />
          <h1 style={{color: `#34495E`, textAlign: `left`}}>Donation Page</h1>

          <Formik
            initialValues={{ 
              firstName: '', 
              lastName: '', 
              emailAddress: '', 
              contactNumber: '', 
              address1: '', 
              city: '', 
              stateProvinceGeoId: '', 
              postalCode: '' 
            }}

  
            onSubmit={(values, { setSubmitting }) => {
                axios.post('http://localhost:8080/vapps/TheComponent/screen/Screen/TheSubscreen/TheTransition', 
                {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  emailAddress: values.emailAddress,
                  contactNumber: values.contactNumber,
                  address1: values.address1,
                  city: values.city,
                  stateProvinceGeoId: values.stateProvinceGeoId,
                  postalCode: values.postalCode,
                }, 
                {withCredentials: true}
                )
                .then(res => {
                  console.log('Axios response', res)
                  if (res.status === 200) {
                      //Do Stripe API Call
                      // this.chargeStripe(999)
                      console.log("Good")
                    }
                  
              })
              .then(() =>{
                
                const { error } = props.stripe.redirectToCheckout({
                  items: [{ sku: "sku_FZHu67qCyGiGPd", quantity: 1 }],
                  successUrl: `http://localhost:8000/page-2/`,
                  cancelUrl: `http://localhost:8000/404`,
                })
                if (error) {
                  console.warn("Error:", error)
                }
              })
              .catch(error => {
                  console.log("error:", error)
              });

              // setTimeout(() => {
              //   // alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 400);

            }}
            
            validationSchema={Yup.object().shape({
              firstName: Yup.string()
                .required(),
              lastName: Yup.string()
                .required(),
              emailAddress: Yup.string()
                .required()
                .email(),
              contactNumber: Yup.number(),
              address1: Yup.string()
                .required(),
              address2: Yup.string(),
              city: Yup.string()
                .required(),
              stateProvinceGeoId: Yup.string()
                .required(),
              postalCode: Yup.number()
                .integer()
                .required(),
            })}
          >
            {
              
              props => {
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setSubmitting,
                
              } = props;

              return (
              <Form class="form" name="form" method="POST" onSubmit={handleSubmit}>
                <StyledTextField label="First Name" id="fName" name="firstName" type="text" value={values.firstName} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="firstName" component="div" />

                <StyledTextField label="Last Name" id="lName" name="lastName" type="text" value={values.lastName} onChange={handleChange} onBlur={handleBlur}
                style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="lastName" component="div" />

                <StyledTextField label="Email Address" id="email" name="emailAddress" type="email" value={values.emailAddress} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="emailAddress" component="div" />

                <StyledTextField label="Phone Number" id="phone" name="contactNumber" type="text" value={values.contactNumber} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined"></StyledTextField><br/>
                <ErrorMessage name="contactNumber" component="div" />

                <StyledTextField label="Address" id="add1" name="address1" type="text" value={values.address1} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="address1" component="div" />

                <StyledTextField label="Apt/Unit #" id="add2" name="address2" type="text" value={values.address2} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `150px`,}} variant="outlined"></StyledTextField><br/>

                <StyledTextField label="City" id="cityy" name="city" type="text" value={values.city} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="city" component="div" />

                <StyledTextField label="State" id="statee" name="stateProvinceGeoId" type="text" value={values.stateProvinceGeoId} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="stateProvinceGeoId" component="div" />

                <StyledTextField label="Zip" id="zipp" name="postalCode" type="text" value={values.postalCode} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" className={
                  errors.email && touched.email ? 'text-input error' : 'text-input'} required="true"></StyledTextField><br/>
                <ErrorMessage name="postalCode" component="div" />

                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}


                    <button 
                    type="submit" disabled={isSubmitting} method="POST" >Donate</button>
                    <Checkout/>



              </Form>     
              );
              
            }}
            
          </Formik>
        </div>
      </div>
    </div>
  </Layout>
)

// onClick={event => this.redirectToCheckout(event)}
//<button type="submit" disabled={isSubmitting}><script src="https://checkout.stripe.com/checkout.js" class="stripe-button"
// data-key="pk_test_CpXDMkBjNYFnjWSHtpzTFjlw00TrgZlcHm" data-amount="999" data-name="Stripe.com"
// data-description="Widget" data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
// data-locale="auto" data-zip-code="true"></script>Donate</button>
    
export default IndexPage