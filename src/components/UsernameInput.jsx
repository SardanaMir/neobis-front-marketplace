import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState, useEffect} from 'react';

function UsernameInput() {
    const [username, setUsername] = useState('')

    useEffect(() =>{
      
    }, [username]);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '37ch' },
      }}
      noValidate
      autoComplete="off"
      id="username" 
      
    >
      <TextField id="standard-basic" onChange={(e) => setUsername(e.target.value)} label="Имя пользователя" variant="standard" required/>
    </Box>
  );
}
export default UsernameInput