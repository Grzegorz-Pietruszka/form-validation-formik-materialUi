import React from 'react';
import {Form, Formik, useField} from "formik";
import {Button, Checkbox, makeStyles} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel"
import * as yup from "yup";

const useStyles = makeStyles({
    inputGroup: {
        marginBottom: '10px',
    },
    textInput: {
        display: 'block',
        width: '100%'
    }
})

const FormTextInput = ({placeholder, ...props}) => {
    const [field, meta] = useField(props);
    const errorText = meta && meta.error && meta.touched ? meta.error : '';

    return <TextField placeholder={placeholder}
                      helperText={errorText}
                      error={!!errorText}
                      className={props.className}
                      fullWidth
                      {...field} />
}

const FormRadioButton = ({label, ...props}) => {
    const [field] = useField(props);

    return <FormControlLabel {...field} control={<Radio/>} label={label}/>
}

const FormAcceptConditions = ({label, ...props}) => {
    const [field, meta] = useField(props);
    const errorText = meta && meta.error && meta.touched ? meta.error : '';

    return (
        <FormControl component="fieldset">
            <FormControlLabel control={<Checkbox {...field} color='primary'/>} label={label}/>
            <FormHelperText error>{errorText}</FormHelperText>
        </FormControl>
    );
}

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required('You need to provide your first name')
        .max(10),
    lastName: yup
        .string()
        .required('You need to provide your last name')
        .max(10),
    email: yup
        .string()
        .required('You need to provide your email')
        .email(),
    conditionsAccepted: yup
        .bool()
        .oneOf([true], 'You must accept terms and conditions')

})

const RegisterForm = () => {
    const {inputGroup, textInput} = useStyles();

    return (
        <div>
            <Formik
                initialValues={{firstName: '', lastName: '', email: '', gender: 'male', conditionsAccepted: false}}
                onSubmit={(data) => {
                    console.log(data)
                }}
                validationSchema={validationSchema}
            >
                {({values, isSubmitting, errors, isValid, dirty}) => (
                    <Form>
                        <div className={inputGroup}>
                            <FormTextInput name='firstName' type='input' placeholder='First Name'
                                           className={textInput}/>
                            <FormTextInput name='lastName' type='input' placeholder='Last Name' className={textInput}/>
                            <FormTextInput name='email' placeholder='Your email' type='input' className={textInput}/>
                        </div>
                        <div>
                            <FormLabel component="legend">Gender</FormLabel>
                            <FormRadioButton name='gender' type='radio' value='male' label='male'/>
                            <FormRadioButton name='gender' type='radio' value='female' label='female'/>
                            <FormRadioButton name='gender' type='radio' value='other' label='other'/>
                        </div>

                        <div>
                            <FormAcceptConditions name='conditionsAccepted' label='Accept terms and conditions'/>
                        </div>

                        <div>
                            <Button type='submit'
                                    variant='outlined'
                                    color="primary"
                                    disabled={!dirty || !isValid}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
