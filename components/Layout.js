import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <>
            <div className="w-full h-screen flex flex-row">
                <Navbar />
                <div className="flex w-full">
                    {children}
                </div>
            </div>
        </>
    ) 
    
}

export default Layout