import React from "react";
import {createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from "react-router-dom";
import Layout from "./Layout";
import CountryCode from "./components/CountryCode";
import style from "./style.css";
import FilterSong from "./components/FilterSong";
import NotFound from "./components/NotFound";

let render = createBrowserRouter(createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route index element={<CountryCode />}/>
            <Route path="/filtersong" element={<FilterSong/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
))

export default function App(){
    return(
        <RouterProvider router={render}/>
    )
}