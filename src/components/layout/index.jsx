import Header from './Header'

function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <footer>
                c
            </footer>
        </>
    )
}

export default MainLayout