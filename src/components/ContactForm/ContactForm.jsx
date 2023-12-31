import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

let schema = yup.object({
        name: yup.string().required(),
        number: yup.string()
  .required("required")
  .matches(phoneRegExp, 'Phone number is not valid')
  .min(9, "too short")
  .max(13, "too long"),
})

const initialValues = {
        name: '',
        number: '', 
}


export const ContactForm = ({onSubmit}) => {
        const handleSubmit = (values, { resetForm }) => {
                onSubmit(values);
                resetForm();
        }
        return (<Formik
       initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
        >
                <Form autoComplete='off' className='grid gap-4 grid-rows-1 p-12 rounded-lg border-solid border-2 border-pink-50'>
                <label htmlFor='name'>Name:
                <Field type="text" name="name" placeholder="Jane Doe" className="ml-10 p-2 rounded-lg border-solid border-2 border-pink-50"/>
                <ErrorMessage name="name" component="div" /></label>
                <label htmlFor='number'>Number:
                <Field type="tel" name="number" placeholder="+380951111111" className="ml-6 p-2 rounded-lg border-solid border-2 border-pink-50"/>
                <ErrorMessage name="number" component="div" /></label>
           <button type="submit" className='w-6/12 p-2 rounded-lg ms-20 bg-pink-100'>
             Add contact
           </button>
         </Form>
     </Formik>)

}

ContactForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
}