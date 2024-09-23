import { Outlet, Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <NavBar/>
                        <Outlet/>
                    </>
                }>
                

            </Route>
        </Routes>
    )
}