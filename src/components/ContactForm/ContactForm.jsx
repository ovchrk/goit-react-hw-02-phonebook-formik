import { Formik, Form, Field, ErrorMessage } from 'formik';
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
                onSubmit={handleSubmit} >
                <Form autoComplete='off' className='grid gap-4 grid-rows-1 p-12 rounded-lg border-solid border-2 border-pink-50'>
                        
                <label htmlFor='name'>Name:
                <Field type="text" name="name" placeholder="Jane Doe" className="ml-10 p-2 rounded-lg border-solid border-2 border-pink-50"/>
                <ErrorMessage name="name" component="div" /></label>
                <label htmlFor='number'>Number:
                <Field type="tel" name="number" placeholder="+380951111111" className="ml-6 p-2 rounded-lg border-solid border-2 border-pink-50"/>
                <ErrorMessage name="number" component="div" /></label>
           <button type="submit" className='w-6/12 p-2 ms-20 bg-pink-100'>
             Add contact
           </button>
         </Form>
     </Formik>)

}