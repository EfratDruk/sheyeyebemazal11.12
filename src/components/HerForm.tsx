import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { Gender, Type } from '../models/enums.ts';
import { Button, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHer, fetchSignUp, updateUser } from '../redux/features/userSlice.ts';
import { useProgress } from './progress.ts'
import { Users } from '../models/users.ts';
import { UserData } from '../models/UserData.ts';
import { current } from '@reduxjs/toolkit';
import { nextStep } from '../redux/features/currentStepSlice.ts';
import { AppDispatch, RootState } from '../store.ts';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));
// export default function UserForm1({ setIsFormValid }: any) {
export default function HerForm() {
    const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] = useState({
        ageMin: "",
        ageMax: "",
        //  sector: "",
        height: "",
        beard: "",
        smoking: "",
        studies: "",
        future: "",
        current: "",
        //requirements:"",
        //his;
    });


    const user=useSelector((state:RootState)=>state.user.user)
    const handleSave = () => {
            const resHer=dispatch(fetchHer(formData))
            console.log("resHer",resHer);
            dispatch(nextStep());
    }

    // const handleUpdate = () => {
    //     //const isValid = formData.beard !== '' && formData.future !== '' && formData.studies !== '';
    //    // if (isValid) {
    //         dispatch(updateUser(formData));
    //     //}
    // }

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
            <FormGrid size={{ xs: 3 }}>
                <FormLabel htmlFor="ageMin" required>
                    Minimum Age
                </FormLabel>
                <OutlinedInput
                    id="ageMin"
                    name="ageMin"
                    type="ageMin"
                    placeholder=""
                    autoComplete=""
                    value={formData.ageMin}
                    onChange={handleInputChange}
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{ xs: 3 }}>
                <FormLabel htmlFor="ageMax" required>
                    Maximum Age
                </FormLabel>
                <OutlinedInput
                    id="ageMax"
                    name="ageMax"
                    type="ageMax"
                    placeholder=""
                    autoComplete=""
                    value={formData.ageMax}
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
                <FormLabel htmlFor="smoking" required>
                    Smoke
                </FormLabel>
                <Select
                    id="smoking"
                    name="smoking"

                    value={formData.smoking}
                    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
                    //onBlur={handleSave}
                    required
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
                <FormLabel htmlFor="current" required>
                    Current Status
                </FormLabel>
                <Select
                    id="current"
                    name="current"

                    value={formData.current}
                    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
                    //onBlur={handleSave}
                    required
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
                <FormLabel htmlFor="future" required>
                    Current Status
                </FormLabel>
                <Select
                    id="future"
                    name="future"

                    value={formData.future}
                    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
                    //onBlur={handleSave}
                    required
                    size="small"
                    displayEmpty
                >
                    <MenuItem value="" disabled>Current Status</MenuItem>
                    {/* <MenuItem value="בן_ישיבה">בן ישיבה</MenuItem> */}
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
                    {/* <MenuItem value="חיידר">חיידר</MenuItem> */}
                    <MenuItem value="אוניברסיטה">אוניברסיטה</MenuItem>
                    <MenuItem value="מכללה">מכללה</MenuItem>
                </Select>
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="beard" required>
                    Beard
                </FormLabel>
                <Select
                    id="beard"
                    name="beard"

                    value={formData.beard}
                    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
                    // onBlur={handleSave}
                    required
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