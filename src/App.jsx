import React from "react";
import {Routes, Route} from "react-router-dom";
import Nav from './component/nav';
import Company from './component/company';
import Cards from './component/cards';
import Footer from './component/footer';
import Ad from './component/ad';
import Timework from './component/timework';


function App(props) {
    

    return (
        <div className="bg-[#E3E3E3]">
            <Nav/>
            <Routes>
                <Route path='/Nav' element={<Nav/>}/>
                <Route path='/Company' element={<Company/>}/>
                <Route path='/Cards' element={<Cards/>}/>
                <Route path='/Ad' element={<Ad/>} />
                <Route path='/Timework' element={<Timework/>} />
                <Route path='/Footer' element={<Footer/>}/>
            </Routes>

        </div>
    );
}

export default App;