import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import SignInSide from './components/SignIn.tsx'
import MatchmakerList from './components/matchmakerList.tsx'
import ManSignUp from './components/ManSignUp.tsx'
import SignUp from './components/SignUpOld.tsx'
import SignIn from './components/SignIn.tsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import WomanList from './components/womanList.tsx'
import ManList from './components/manList.tsx'
import HisForm from './components/HisForm.tsx'
import HerForm from './components/HerForm.tsx'
import HomePage from './components/HomePage.tsx'
import {MMHomePage} from './components/MMHoePage.tsx'
import AdjustmentList from './components/AdjustmentList.tsx'
import ShowWoman from './components/ShowWoman.tsx'
import UploadImage from './components/UploadImage.tsx'
import Routing from './Routing.tsx'

// ReactDOM.createRoot(document.getElementById('root')!).render(
createRoot(document.getElementById('root')!).render(
 <Provider store={store}>
   <StrictMode>
    <BrowserRouter>
    <Routing/>
  
    {/* <Routes>
      <Route path='/' element={<UploadImage/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/MatchmakerList' element={<MatchmakerList/>}/>
      <Route path='/MMHomePage' element={<MMHomePage/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/ManSignUp' element={<ManSignUp/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/ManList' element={<ManList  />}/>
      <Route path='/adjustmentList' element={<AdjustmentList/>}/>
      <Route path='/WomanList' element={<WomanList/>}/>
      <Route path='/HisForm' element={<HisForm/>}/>
      <Route path='/HerForm' element={<HerForm/>}/>
      <Route path='/ShowWoman' element={<ShowWoman/>}/>
      <Route path='/UploadImg' element={<UploadImage/>}/>

    </Routes> */}

    </BrowserRouter>
  </StrictMode>
  </Provider>
)
