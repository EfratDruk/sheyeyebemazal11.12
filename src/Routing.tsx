import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import MatchmakerList from "./components/matchmakerList";
import { MMHomePage } from "./components/MMHoePage";
import ManSignUp from "./components/ManSignUp";
import SignUp from "./components/SignUp";
import AdjustmentList from "./components/AdjustmentList";
import WomanList from "./components/womanList";
import HisForm from "./components/HisForm";
import HerForm from "./components/HerForm";
import ShowWoman from "./components/ShowWoman";
import ShowMan from "./components/ShowMan";
import ManList from "./components/manList";
import UploadImage from "./components/UploadImage";
import { ManHomePage } from "./components/ManHomaPage";
import { WomanHomePage } from "./components/WomanHomePage";

const Routing =()=><Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/signin' element={<SignIn/>}/>
<Route path='/MatchmakerList' element={<MatchmakerList/>}/>
<Route path='/MMHomePage' element={<MMHomePage/>}/>
<Route path='/HomePage' element={<HomePage/>}/>
<Route path='/ManSignUp' element={<ManSignUp/>}/>
<Route path='/SignUp' element={<SignUp/>}/>
<Route path='/ManList' element={<ManList/>}/>
<Route path='/adjustmentList' element={<AdjustmentList/>}/>
<Route path='/WomanList' element={<WomanList/>}/>
<Route path='/HisForm' element={<HisForm/>}/>
<Route path='/HerForm' element={<HerForm/>}/>
<Route path='/ShowWoman' element={<ShowWoman/>}/>
<Route path='/ShowMan' element={<ShowMan/>}/>
<Route path="/ManHomePage" element={<ManHomePage/>}/>
<Route path="/WomanHomePage" element={<WomanHomePage/>}/>

</Routes>

export default Routing;
