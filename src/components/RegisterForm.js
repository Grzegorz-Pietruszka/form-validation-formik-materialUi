import React from 'react';
import {Field, Form, Formik, useField} from "formik";
import TextField from "@material-ui/core/TextField";
import {Button, Checkbox} from "@material-ui/core";
import * as yup from "yup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


const FormTextInput = ({placeholder, ...props}) => {
    const [field, meta] = useField(props);
    const errorText = meta && meta.error && meta.touched ? meta.error : '';

    return <TextField placeholder={placeholder} helperText={errorText} error={!!errorText} {...field}  />
}

const FormRadioButton = ({label, ...props}) => {
    const [field] = useField(props);
    return <FormControlLabel {...field} control={<Radio/>} label={label}/>

}

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required()
        .max(10),
    lastName: yup
        .string()
        .required()
        .max(10),
    email: yup
        .string()
        .required()
        .email()
})

const RegisterForm = () => {
    return (
        <div>
            <Formik
                initialValues={{firstName: '', lastName: '', email: '', gender: 'male'}}
                onSubmit={(data) => {
                    console.log(data)
                }}
                validationSchema={validationSchema}
            >
                {({values, isSubmitting, errors, isValid, dirty}) => (
                    <Form>
                        <div>
                            <FormTextInput type='input' name='firstName' placeholder='First Name'/>
                        </div>
                        <div>
                            <FormTextInput type='input' name='lastName' placeholder='Last Name'/>
                        </div>
                        <div>
                            <FormTextInput placeholder='Your email' type='input' name='email'/>
                        </div>

                        <div>
                            <FormRadioButton name='gender' type='radio' value='male' label='male'/>
                            <FormRadioButton name='gender' type='radio' value='female' label='female'/>
                            <FormRadioButton name='gender' type='radio' value='other' label='other'/>
                        </div>

                        <Button type='submit'
                                variant='outlined'
                                color="primary"
                                disabled={!dirty || !isValid}
                        >
                            Submit
                        </Button>

                        <pre>{JSON.stringify(values, null, 2)}</pre>
                        <pre>{JSON.stringify(errors, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
