import Leftbar from '@/components/Admin/Leftbar'
import Footer from '@/components/web/Footer'
import Navbar from '@/components/web/Navbar'
import React from 'react'
import { Outlet, Route } from 'react-router-dom'

const HomeLayout = () => {

    return (
        <>
            <div className='h-screen w-screen overflow-x-hidden m-0 p-0  flex-col overflow-y-auto'style = {{ backgroundColor:'white'}}>
                
                
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default HomeLayout