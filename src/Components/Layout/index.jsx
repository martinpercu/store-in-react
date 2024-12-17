// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return(
        <div className='flex flex-col items-center bg-green-200 mt-16'>
            {children}

        </div>
    )
}

export default Layout