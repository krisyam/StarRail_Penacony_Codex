import React, { useEffect, useReducer } from "react";
import GlobalContext from "./GlobalContext.js";
import { fetchData, storeData } from "../functions.js";
import { AppReducer, Actions } from "./AppReducer.js";

const initialState = {
    language: "jp",
    hertaSpinCounter: 0
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
        async function fetchHertaSpinCounter() {
            const data = await JSON.parse(await fetchData("hertaSpinCounter"));
            dispatch({
                type: Actions.UPDATE_HERTASPINCOUNTER,
                payload: data ? data : initialState.hertaSpinCounter,
            });
        }
        fetchLanguage();
        fetchHertaSpinCounter();
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
    const updateHertaSpinCounter = async (data) => {
        dispatch({
            type: Actions.UPDATE_HERTASPINCOUNTER,
            payload: data,
        });
        await storeData(
            "hertaSpinCounter",
            typeof data === "string" ? data : JSON.stringify(data),
        );
    };
    return (
        <GlobalContext.Provider
            value={{
                language: state.language,
                hertaSpinCounter: state.hertaSpinCounter,
                updateLanguage,
                updateHertaSpinCounter,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
