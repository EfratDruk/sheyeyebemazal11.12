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
import { fetchHis, fetchSignUp, updateUser } from '../redux/features/userSlice';
import { useProgress } from './progress.ts'
import { Users } from '../models/users.ts';
import { UserData } from '../models/UserData.ts';
import { nextStep } from '../redux/features/currentStepSlice.ts';
import { updateExistingMan } from '../redux/features/manSlice.ts';
import { RootState } from '../store.ts';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));
export default function HisForm() {
    const dispatch = useDispatch();
    // const user=JSON.parse(localStorage.getItem('user'));
    // const res=localStorage.setItem("user", JSON.stringify(user));
    const [formData, setFormData] = useState({
        cover: "",
        ageMin:"",
        ageMax:"",
        height:""

    });
    const user=useSelector((state:RootState)=>{state.user.user})
    const handleSave = () => {
        //check if it store in user
            const resHis=dispatch(fetchHis(formData).arguments);
            console.log("resHis",resHis);
            //update user.his=reHis

            console.log("user in his from ",user);
            console.log("user in his form data ",formData);
            // dispatch(updateExistingMan(user));
            console.log("after update changes");
            
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
                <FormLabel htmlFor="cover" required>
                    Cover
                </FormLabel>
                <Select
                    id="cover"
                    name="cover"

                    value={formData.cover}
                    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
                    // onBlur={handleSave}
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