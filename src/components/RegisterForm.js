import React from 'react';
import {Field, Form, Formik, useField, useFormikContext} from "formik";
import TextField from "@material-ui/core/TextField";
import {Button, Checkbox} from "@material-ui/core";
import * as yup from "yup";


const FormTextInput = ({placeholder, ...props}) => {
    const [field, meta] = useField(props);
    const errorText = meta && meta.error ? meta.error : '';

    return <TextField placeholder={placeholder} helperText={errorText} error={!!errorText} {...field}  />
}

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required()
        .max(10)
})

const RegisterForm = () => {

    console.log(validationSchema)
    return (
        <div>
            <Formik
                initialValues={{firstName: '', lastName: '', isVegan: true, email: ''}}
                onSubmit={(data) => {
                    console.log(data)
                }}
                validationSchema={validationSchema}
            >
                {({values, isSubmitting, errors, isValid, dirty}) => (
                    <Form>
                        <div>
                            <FormTextInput type='input' name='firstName' placeholder='firstName'/>
                        </div>
                        <div>
                            <FormTextInput type='input' name='lastName' placeholder='lastName' />
                        </div>
                        <div>
                            <FormTextInput placeholder='your email' type='input' name='email'/>
                        </div>

                        <div>
                            <div>
                                <Field name='isVegan' type='checkbox' as={Checkbox}/>
                            </div>
                            <Button type='submit'
                                    variant='outlined'
                                    color="primary"
                                    disabled={!dirty || !isValid}
                            >
                                Submit
                            </Button>
                        </div>

                        <pre>{JSON.stringify(values, null, 2)}</pre>
                        <pre>{JSON.stringify(errors, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
