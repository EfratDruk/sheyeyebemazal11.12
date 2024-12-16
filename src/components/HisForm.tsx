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
import { fetchHis, fetchSignUp, update, updateUser } from '../redux/features/userSlice';
import { useProgress } from './progress.ts'
import { Users } from '../models/users.ts';
import { UserData } from '../models/UserData.ts';
import { nextStep } from '../redux/features/currentStepSlice.ts';
import { fetchManById, updateExistingMan } from '../redux/features/manSlice.ts';
import { AppDispatch, RootState } from '../store.ts';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));
export default function HisForm() {
    const dispatch = useDispatch<AppDispatch>();
    // const user=JSON.parse(localStorage.getItem('user'));
    // const res=localStorage.setItem("user", JSON.stringify(user));
    const [formData, setFormData] = useState({
        cover: "",
        minAge:"",
        maxAge:"",
        height:""

    });
    const user:Users=useSelector((state:RootState)=>{state.user.user})

    
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
            
        }))
    }

    // const handleSave = async () => {
    //     //check if it store in user
    //         // const man=dispatch(fetchManById(user.id));
    //         const resHis=(dispatch(fetchHis(formData))).arg;
    //         console.log("resHis",resHis.arg);
    //         //update user.his=reHis
    //         const nser={...user, his:resHis  } 
    //         console.log("nser", nser);
    //         const updateHisInForm =  dispatch(updateUser(nser));
    //         console.log("try to update the his by my self in store. check it!!", updateHisInForm);      
    //         console.log("user in his from ",user);
    //         console.log("user in his form data ",formData);
    //         //  dispatch(updateExistingMan(user));
    //         console.log("after update changes");         
    //         dispatch(nextStep());   
    // }

    const handleSave=()=>{
        const resHis=(dispatch(fetchHis(formData))).arg;
        const resUser=dispatch(update(resHis));
        console.log("resUser",resUser);
        console.log("use",user);
        
        dispatch(nextStep())

    }

    return (
        <form onSubmit={handleSave}>
        <Grid container spacing={3}>
            <FormGrid size={{ xs: 3 }}>
                <FormLabel htmlFor="minAge" required>
                    Minimum Age
                </FormLabel>
                <OutlinedInput
                    id="minAge"
                    name="minAge"
                    type="minAge"
                    placeholder=""
                    autoComplete=""
                    value={formData.minAge}
                    onChange={handleInputChange}
                    required
                    size="small"
                />
            </FormGrid>
            <FormGrid size={{ xs: 3 }}>
                <FormLabel htmlFor="maxAge" required>
                    Maximum Age
                </FormLabel>
                <OutlinedInput
                    id="maxAge"
                    name="maxAge"
                    type="maxAge"
                    placeholder=""
                    autoComplete=""
                    value={formData.maxAge}
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