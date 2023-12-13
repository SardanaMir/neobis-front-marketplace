import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schema';

function EmailInput() {
    const [email, setEmail] = useState('')

    useEffect(() =>{
      
    }, [email]);

    const {
      values,
      errors,
      touched,
      isSubmitting,
      // handleBlur,
      handleChange,
      // handleSubmit,
  } = useFormik({
      initialValues: {
      email: "",
      username: "",
      },
      validationSchema: basicSchema
  });

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '37ch' },
      }}
      noValidate
      autoComplete="off"
      id="email" 
    >
      <TextField id="standard-basic" onChange={(e) => setEmail(e.target.value)} type="email" label="E-mail"  variant="standard" required/>
    </Box>
  );
}
export default EmailInput