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
import { useProgress } from './progress.ts'
import { Users } from '../models/users.ts';
import { UserData } from '../models/UserData.ts';
import { nextStep } from '../redux/features/currentStepSlice.ts';
import { RootState } from '../store.ts';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));
export default function WomanForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        cover: "",
        studies: "",
        //requirements:'',הצעות
        //her;דרישות
    });
  
    // const user=useSelector((state:RootState)=>{state.user.user})  
    const handleUpdate = () => {  
        dispatch(updateUser(formData));
        dispatch(nextStep());
        dispatch(nextStep());
     }
   

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value

        }))
    }

    return (
        <form onSubmit={handleUpdate}>
        <Grid container spacing={3}>
            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="studies" required>
                    Studies
                </FormLabel>
                <Select
                    id="studies"
                    name="studies"

                    value={formData.studies}
                    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
                    //onBlur={handleSave}
                    required
                    size="small"
                    displayEmpty
                >
                    <MenuItem value="" disabled>Studies</MenuItem>
                    <MenuItem value="בית_יעקב">בית יעקב</MenuItem>
                    <MenuItem value="סמינר">סמינר</MenuItem>
                    <MenuItem value="אוניברסיטה">אוניברסיטה</MenuItem>
                    <MenuItem value="מכללה">מכללה</MenuItem>
                </Select>
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="cover" required>
                    Cover
                </FormLabel>
                <Select
                    id="cover"
                    name="cover"

                    value={formData.cover}
                    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
                    // onBlur={handleUpdate}
                    required
                    size="small"
                    displayEmpty
                >
                    <MenuItem value="" disabled>Cover</MenuItem>
                    <MenuItem value="פאה">פאה</MenuItem>
                    <MenuItem value="מטפחת">מטפחת</MenuItem>
                    <MenuItem value="גמיש">גמיש</MenuItem>
                    <MenuItem value="חלקי">חלקי</MenuItem>
                    <MenuItem value="ללא_כיסוי">ללא כיסוי</MenuItem>
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