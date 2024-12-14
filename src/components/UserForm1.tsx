import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { Gender, Type } from '../models/enums';
import { Button, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSignUp } from '../redux/features/userSlice';
import { useProgress } from './progress.ts'
import { Users } from '../models/users.ts';
import { UserData } from '../models/UserData.ts';
import { nextStep } from '../redux/features/currentStepSlice.ts';
import { AppDispatch } from '../store.ts';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
// export default function UserForm1({ setIsFormValid }: any) {
export default function UserForm1() {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });


  const handleSave = (e:any) => {
    e.preventDefault();

      dispatch(fetchSignUp(formData))
      console.log("save");
       
      dispatch(nextStep())

  }


  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value

    }))
  }



  // console.log("formData", formData);

  return (
    <form onSubmit={handleSave}>
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="name" required>
          Name
        </FormLabel>
        <OutlinedInput
          id="name"
          name="name"
          type="name"
          placeholder=""
          autoComplete="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          size="small"
        />
      </FormGrid>

      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="email" required>
          Email
        </FormLabel>
        <OutlinedInput
          id="email"
          name="email"
          type="email"
          placeholder="exampel@gmail.com"
          autoComplete="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="password" required>
          Password
        </FormLabel>
        <OutlinedInput
          id="password"
          name="password"
          type="password"
          placeholder=""
          autoComplete="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="gender" required>
          Gender
        </FormLabel>
        <Select
          id="gender"
          name="gender"

          value={formData.gender}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
          // onBlur={handleSave}
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Gender</MenuItem>
          <MenuItem value="MAN">Man</MenuItem>
          <MenuItem value="WOMAN">Woman</MenuItem>
        </Select>

      </FormGrid>
                <Button
                  variant="contained"
                  // endIcon={<ChevronRightRoundedIcon />}
                  type='submit'
                  sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                >
                 Next 
                </Button>
    </Grid>
    </form>
  );
}