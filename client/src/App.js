import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import MoviePage from './components/MoviePage';
import MovieDetails from './components/MovieDetails';
import ReviewPage from './components/ReviewPage';
import ProfilePage from './components/ProfilePage';
import Login from './components/Login';
import SignUp from './components/SignUp';

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth();
    return currentUser ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <AuthProvider>
            <NavBar />
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                } />
                <Route path="/movies" element={
                    <ProtectedRoute>
                        <MoviePage />
                    </ProtectedRoute>
                } />
                <Route path="/movies/:movieId" element={
                    <ProtectedRoute>
                        <MovieDetails />
                    </ProtectedRoute>
                } />
                <Route path="/reviews/:movieId" element={
                    <ProtectedRoute>
                        <ReviewPage />
                    </ProtectedRoute>
                } />
                <Route path="/profile" element={
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                } />
            </Routes>
        </AuthProvider>
    );
};

export default App;
