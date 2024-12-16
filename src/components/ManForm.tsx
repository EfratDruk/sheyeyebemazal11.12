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
export default function ManForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        beard: "",
        smoking: "",
        studies: "",
        future: "",
        //requirements:"",
        //his;
    });

const user=useSelector((state:RootState)=>{state.user.user})
const handleUpdate = () => {
    console.log("---------user in form man from state", user);
    dispatch(updateUser(formData));
    console.log("++++++++++++user in form man from state", user);

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



    // console.log("formData", formData);

    return (
        <form onSubmit={handleUpdate}>
        <Grid container spacing={3}>
            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="smoking" >
                    Smoke
                </FormLabel>
                <Select
                    id="smoking"
                    name="smoking"

                    value={formData.smoking}
                    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
                    //onBlur={handleSave}
                    
                    size="small"
                    displayEmpty
                >
                    <MenuItem value="" disabled>Smoke</MenuItem>
                    <MenuItem value="YES">Yes</MenuItem>
                    <MenuItem value="NO">No</MenuItem>
                    <MenuItem value="SOMETIMES">Sometimes</MenuItem>
                </Select>
            </FormGrid>
            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="future" >
                    Current Status
                </FormLabel>
                <Select
                    id="future"
                    name="future"

                    value={formData.future}
                    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
                    //onBlur={handleSave}
                    
                    size="small"
                    displayEmpty
                >
                    <MenuItem value="" disabled>Current Status</MenuItem>
                    <MenuItem value="בן_ישיבה">בן ישיבה</MenuItem>
                    <MenuItem value="עובד">עובד</MenuItem>
                    <MenuItem value="משלב">משלב</MenuItem>
                    <MenuItem value="אברך">אברך</MenuItem>
                    <MenuItem value="לומד_מקצוע">לומד מקצוע</MenuItem>
                </Select>
            </FormGrid>

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
                    <MenuItem value="ישיבה">ישיבה</MenuItem>
                    <MenuItem value="חיידר">חיידר</MenuItem>
                    <MenuItem value="אוניברסיטה">אוניברסיטה</MenuItem>
                    <MenuItem value="מכללה">מכללה</MenuItem>
                </Select>
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="beard" >
                    Beard
                </FormLabel>
                <Select
                    id="beard"
                    name="beard"

                    value={formData.beard}
                    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
                    // onBlur={handleUpdate}
                    
                    size="small"
                    displayEmpty
                >
                    <MenuItem value="" disabled>Beard</MenuItem>
                    <MenuItem value="קצוץ">קצוץ</MenuItem>
                    <MenuItem value="מזוקן">מזוקן</MenuItem>
                    <MenuItem value="מגולח">מגולח</MenuItem>
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