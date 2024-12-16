
import { Button, MenuItem, Select } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep } from '../redux/features/currentStepSlice';
import { updateUser } from '../redux/features/userSlice';
import { AppDispatch, RootState } from '../store';
import UploadImage from './UploadImage';


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));


export default function UserForm2() {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState(
    {
    license: "",
    residence: "",
    status: "",
    city: "",
    land: "",
    phon: "",
    dateOfBirth: "",
    // imagePath:"",
    //address: "",
    type_phon: "",
    budget: "",
    height: "",
    //countryOfOrigin: "",
  }
);


  const user = useSelector((state: RootState) => state.user.user);

  const handleUpdate = (e:any) => {
    e.preventDefault(); // מונע את השליחה המיידית של הטופס
    console.log("---------user in form 2 from state", user);
     dispatch(updateUser(formData));
     dispatch(nextStep());
  }

  // const handleBack=()=>{
  //   dispatch(previousStep());
  // }

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
      <form onSubmit={handleUpdate}>
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12}}>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="dateOfBirth" required>
          תאריך לידה
          </FormLabel>
          <OutlinedInput
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            placeholder=""
            autoComplete="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
            size="small"
          />
        </FormGrid>
      </FormGrid>

      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="license" >
          License
        </FormLabel>
        <Select
          id="license"
          name="license"

          value={formData.license}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
          
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>License</MenuItem>
          <MenuItem value="YES">Yes</MenuItem>
          <MenuItem value="NO">No</MenuItem>
          <MenuItem value="OTHER">Other</MenuItem>
        </Select>
      </FormGrid>


      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="status" required>
          Status
        </FormLabel>
        <Select
          id="status"
          name="status"

          value={formData.status}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר   
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Status</MenuItem>
          <MenuItem value="SINGLE">רווק</MenuItem>
          <MenuItem value="WIDOW_WITH_KIDS">אלמן/ה עם ילדים</MenuItem>
          <MenuItem value="WIODW_NO_KIDS">אלמן/ה</MenuItem>
          <MenuItem value="DIVORCEE_NO_KIDS">גרוש/ה</MenuItem>
          <MenuItem value="DIVORCE_WITH_KIDS">גרוש/ה עם ילדים</MenuItem>
        </Select>
      </FormGrid>


      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="residence" >
          Residence
        </FormLabel>
        <Select
          id="residence"
          name="residence"

          value={formData.residence}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
          
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Residence</MenuItem>
          <MenuItem value="WITH_PARENTS">With parents</MenuItem>
          <MenuItem value="ALONE">Alone</MenuItem>
          <MenuItem value="DORMITORY">Dormitory</MenuItem>
          <MenuItem value="BATCHELOR_APARTMENT">Singels apartment</MenuItem>
        </Select>
      </FormGrid>

      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="phon" >
          Phon number
        </FormLabel>
        <OutlinedInput
          id="phon"
          name="phon"
          type="phon"
          placeholder=""
          autoComplete="phon"
          value={formData.phon}
          onChange={handleInputChange}
          
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="type_phon" required>
          Type Of Phon
        </FormLabel>
        <Select
          id="type_phon"
          name="type_phon"

          value={formData.type_phon}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר   
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Type Of Phon</MenuItem>
          <MenuItem value="כשר">כשר</MenuItem>
          <MenuItem value="תומך_כשר">תומך כשר</MenuItem>
          <MenuItem value="מכשיר_מוגן">מוגן</MenuItem>
          <MenuItem value="סמארטפון">סמארטפון</MenuItem>
          <MenuItem value="שני_טלפונים">שני טלפונים</MenuItem>
        </Select>
      </FormGrid>

      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="budget" required>
          Budget
        </FormLabel>
        <OutlinedInput
          id="budget"
          name="budget"
          type="budget"
          placeholder=""
          autoComplete=""
          value={formData.budget}
          onChange={handleInputChange}
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="height" required>
          Height
        </FormLabel>
        <OutlinedInput
          id="height"
          name="height"
          type="height"
          placeholder=""
          autoComplete=""
          value={formData.height}
          onChange={handleInputChange}
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" >
          City
        </FormLabel>
        <Select
          id="city"
          name="city"

          value={formData.city}
          onChange={handleInputChange}   
          
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>City</MenuItem>
          <MenuItem value="ירושלים">ירושלים</MenuItem>
          <MenuItem value="תל_אביב">תל אביב</MenuItem>
          <MenuItem value="חיפה">חיפה</MenuItem>
          <MenuItem value="בני_ברק">בני ברק</MenuItem>
          <MenuItem value="פתח_תקוה">פתח תקוה</MenuItem>
          <MenuItem value="אשדוד">אשדוד</MenuItem>
          <MenuItem value="ביתר">ביתר</MenuItem>
          <MenuItem value="רמת_גן">רמת גן</MenuItem>
        </Select>
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="land" required>
          Country
        </FormLabel>
        <Select
          id="land"
          name="land"

          value={formData.land}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר   
          // onBlur={handleUpdate}
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Country</MenuItem>
          <MenuItem value="ישראל">ישראל</MenuItem>
          <MenuItem value="אנגליה">אנגליה</MenuItem>
          <MenuItem value="רוסיה">רוסיה</MenuItem>
          <MenuItem value="צרפת">צרפת</MenuItem>
          <MenuItem value="בלגיה">בלגיה</MenuItem>
          <MenuItem value="תימן">תימן</MenuItem>
          <MenuItem value="מרוקו">מרוקו</MenuItem>
        </Select>
      </FormGrid>
       <UploadImage></UploadImage>
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