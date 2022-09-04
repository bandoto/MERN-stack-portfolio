import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AboutPage, ContactPage, WorkExperiencePage, ProjectsPage, LoginPage, RegisterPage, CreatePostPage, PostPage, CreateWorkPage } from '../../pages'
import AppSidebar from "../appSidebar/AppSidebar"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMe } from '../../redux/features/auth/authSlice'
import './app.scss'

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    return (
        <Router>
            <div className="app">
                <AppSidebar />
                <main className="main">
                    <Routes>
                        <Route
                            path="/"
                            element={<AboutPage />}>
                        </Route>
                        <Route
                            path="/works"
                            element={<WorkExperiencePage />}>
                        </Route>
                        <Route
                            path="/posts"
                            element={<ProjectsPage />}>
                        </Route>
                        <Route
                            path="/contact"
                            element={<ContactPage />}>
                        </Route>
                        <Route
                            path="/login"
                            element={<LoginPage />}>
                        </Route>
                        <Route
                            path="/register"
                            element={<RegisterPage />}>
                        </Route>
                        <Route
                            path="/createpost"
                            element={<CreatePostPage />}>
                        </Route>
                        <Route
                            path="/creatework"
                            element={<CreateWorkPage />}>
                        </Route>
                        <Route
                            path="/posts/:id"
                            exact 
                            element={<PostPage />}>
                        </Route>
                        <Route
                            path="*"
                            element={<h1>Page Not Found</h1>}>
                        </Route>
                    </Routes>

                    <ToastContainer position='bottom-right' />
                </main>
            </div>
        </Router>
    );
}

export default App;
