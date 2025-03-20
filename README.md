<!-- this projetct uses tmdb and vite using scss and  --># movie_app
![image](https://github.com/user-attachments/assets/a28bd7c3-1d6d-4ce9-87c7-4883465e26e7)

🎬 React Movie App
Overview
The React Movie App is a modern and dynamic web application that allows users to explore, search, and view details of their favorite movies using The Movie Database (TMDb) API. The application is powered by React, with Redux for efficient state management, ensuring smooth API handling and optimized performance.

Features
✅ Fetch and display trending movies using TMDb API
✅ Search for movies by title
✅ View detailed movie information
✅ Manage API state efficiently using Redux
✅ Responsive design for mobile and desktop
✅ Smooth navigation with React Router

Tech Stack
React – Frontend framework for building the UI
Redux Toolkit – State management for API data
TMDb API – Fetch movie data dynamically
React Router – Handle navigation
Axios – API requests handling
Tailwind CSS / CSS – Styling
Getting Started
Prerequisites
Node.js (>= 16.x recommended)
TMDb API Key (Sign up at The Movie Database)




=================================================================================
State managemnt 

used redux for state mangent

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => { state.loading = true; })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
