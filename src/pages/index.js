import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledTextField from "../components/material-ui"
import Checkout from "../components/checkout"
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';




const IndexPage = () => (
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
            // validate={values => {
            //   let errors = {};
            //   if (!values.emailAddress) {
            //     errors.emailAddress = 'Required';
            //   } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress)
            //   ) {
            //     errors.emailAddress = 'Invalid email address';
            //   }
            //   return errors;
            // }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
            
            validationSchema={Yup.object().shape({
              firstName: Yup.string()
                .required(),
              lastName: Yup.string()
                .required(),
              emailAddress: Yup.string()
                .required()
                .email(),
              contactNumber: Yup.number()
                .integer(),
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
               
              } = props;

              return (
              <Form class="form" name="form" onSubmit={handleSubmit}>
                <StyledTextField label="First Name" name="firstName" type="text" value={values.firstName} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="firstName" component="div" />

                <StyledTextField label="Last Name" name="lastName" type="text" value={values.lastName} onChange={handleChange} onBlur={handleBlur}
                style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="lastName" component="div" />

                <StyledTextField label="Email Address" name="emailAddress" type="email" value={values.emailAddress} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="emailAddress" component="div" />

                <StyledTextField label="Phone Number" name="contactNumber" type="text" value={values.contactNumber} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined"></StyledTextField><br/>
                <ErrorMessage name="contactNumber" component="div" />

                <StyledTextField label="Address" name="address1" type="text" value={values.address1} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="address1" component="div" />

                <StyledTextField label="Apt/Unit #" name="address2" type="text" value={values.address2} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `150px`,}} variant="outlined"></StyledTextField><br/>

                <StyledTextField label="City" name="city" type="text" value={values.city} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="city" component="div" />

                <StyledTextField label="State" name="stateProvinceGeoId" type="text" value={values.stateProvinceGeoId} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" required="true"></StyledTextField><br/>
                <ErrorMessage name="stateProvinceGeoId" component="div" />

                <StyledTextField label="Zip" name="postalCode" type="text" value={values.postalCode} onChange={handleChange} onBlur={handleBlur}
                 style={{paddingBottom: `10px`, width: `250px`,}} variant="outlined" className={
                  errors.email && touched.email ? 'text-input error' : 'text-input'} required="true"></StyledTextField><br/>
                <ErrorMessage name="postalCode" component="div" />

                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}

                  <Checkout type="submit" disabled={isSubmitting} />
              </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  </Layout>
)



export default IndexPage
