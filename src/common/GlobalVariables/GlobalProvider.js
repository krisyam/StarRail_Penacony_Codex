import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext.js";
import { fetchData, removeData, storeData } from "../functions.js";
import { AppReducer, Actions } from "./AppReducer.js";

const initialState = {
    language: "jp",
};

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    useEffect(() => {
        async function fetchLanguage() {
            const data = await JSON.parse(await fetchData("language"));
            dispatch({
                type: Actions.UPDATE_LANGUAGE,
                payload: data ? data : initialState.language,
            });
        }
        fetchLanguage();
        console.log("state", state);  
    }, []);
    const updateLanguage = async (data) => {
        dispatch({
            type: Actions.UPDATE_LANGUAGE,
            payload: data,
        });
        await storeData(
            "language",
            typeof data === "string" ? data : JSON.stringify(data),
        );
    };
    return (
        <GlobalContext.Provider
            value={{
                language: state.language,
                updateLanguage,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
