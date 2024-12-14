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
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignUp, updateUser } from '../redux/features/userSlice';
import { createNewSiblings } from '../redux/features/siblingsSlice';
import { RootState } from '../store';
import { nextStep } from '../redux/features/currentStepSlice';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function UserForm3() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    {
    father_name: "",
    mother_name: "",
    fatherOccupation: "",
    motherOccupation: "",
    parents_status: "",
    // siblings
    // referances
 }
);
  const user_id=useSelector((state: RootState) => state.user.user?.id);
  // const [siblingsData, setSiblingsData] = useState({
  //   user_id: user_id,
  //   gender: '',
  //   sibling_status: '',
  //   studies: '',
  // })

  const user=useSelector((state:RootState)=>{state.user.user})
  const handleUpdate = (e:any) => {
    e.preventDefault();
    console.log("---------user in form 3 from state", user);
    
    
    dispatch(updateUser(formData));
    console.log("++++++++++++user in form 3 form data", formData);
    console.log("form data in 3", formData);
    dispatch(nextStep());
  }

  // const handleSave = () => {

  //     dispatch(createNewSiblings(siblingsData))
    
  // }


  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // const handleSiblingChange = (event: any) => {
  //   const { name, value } = event.target;
  //   setSiblingsData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }))
  // }



  // console.log(formData);

  return (
    <form onSubmit={handleUpdate}>
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="father_name" required>
          Father Name
        </FormLabel>
        <OutlinedInput
          id="father_name"
          name="father_name"
          type="father_name"
          placeholder=""
          autoComplete="father_name"
          value={formData.father_name}
          onChange={handleInputChange}
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="mother_name" required>
          Mother Name
        </FormLabel>
        <OutlinedInput
          id="mother_name"
          name="mother_name"
          type="mother_name"
          placeholder=""
          autoComplete="mother_name"
          value={formData.mother_name}
          onChange={handleInputChange}
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="fatherOccupation" >
          Father Occupation
        </FormLabel>
        <OutlinedInput
          id="fatherOccupation"
          name="fatherOccupation"
          type="fatherOccupation"
          placeholder=""
          autoComplete="fatherOccupation"
          value={formData.fatherOccupation}
          onChange={handleInputChange}
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="motherOccupation" >
          Mother Occupation
        </FormLabel>
        <OutlinedInput
          id="motherOccupation"
          name="motherOccupation"
          type="motherOccupation"
          placeholder=""
          autoComplete="motherOccupation"
          value={formData.motherOccupation}
          onChange={handleInputChange}
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="parents_status" required>
          Status Of Parents
        </FormLabel>
        <Select
          id="parents_status"
          name="parents_status"
          value={formData.parents_status}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
          // onBlur={handleUpdate}
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Status Of Parents</MenuItem>
          <MenuItem value="MARRIED">נשואים</MenuItem>
          <MenuItem value="WIDOW_NO_KIDS">אלמן/ה</MenuItem>
          <MenuItem value="DIVORCEE_NO_KIDS">גרוש/ה</MenuItem>
        </Select>

      </FormGrid>

      {/* <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="gender" required>
          Gender
        </FormLabel>
        <Select
          id="gender"
          name="gender"
          value={siblingsData.gender}
          onChange={handleSiblingChange}  // פונקציה לעדכון הערך שנבחר
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Gender</MenuItem>
          <MenuItem value="MAN">Man</MenuItem>
          <MenuItem value="WOMAN">Woman</MenuItem>
        </Select>
      </FormGrid>

      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="sibling_status" required>
          Status Of Sibling
        </FormLabel>
        <Select
          id="sibling_status"
          name="sibling_status"

          value={siblingsData.sibling_status}
          onChange={handleSiblingChange}  // פונקציה לעדכון הערך שנבחר
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Status Of Sibling</MenuItem>
          <MenuItem value="SINGLE">רווק/ה</MenuItem>
          <MenuItem value="MARRIED">נשואים</MenuItem>
          <MenuItem value="WIDOW">אלמן/ה</MenuItem>
          <MenuItem value="DIVORCE">גרוש/ה</MenuItem>
        </Select>

      </FormGrid>

      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="studies" required>
          Studies
        </FormLabel>
        <Select
          id="studies"
          name="studies"

          value={siblingsData.studies}
          onChange={handleSiblingChange}  // פונקציה לעדכון הערך שנבחר
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Studies</MenuItem>
          <MenuItem value="בית_יעקב">בית יעקב</MenuItem>
          <MenuItem value="עבודה">עבודה</MenuItem>
          <MenuItem value="סמינר">סמינר</MenuItem>
          <MenuItem value="אוניברסיטה">אוניברסיטה</MenuItem>
          <MenuItem value="מכללה">מכללה</MenuItem>
          <MenuItem value="תיכון">תיכון</MenuItem>
          <MenuItem value="ישיבה">ישיבה</MenuItem>
          <MenuItem value="חיידר">חיידר</MenuItem>
        </Select>
      </FormGrid> */}
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