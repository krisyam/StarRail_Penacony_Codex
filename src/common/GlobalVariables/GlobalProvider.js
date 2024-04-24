import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext.js";
import { fetchData, removeData, storeData } from "../functions.js";
import { AppReducer, Actions } from "./AppReducer.js";

const initialState = {
    authenticated: false,
    settings: {
        priorityFilter: {
            order: 0,
            category: [0, 1, 2, 3, 4],
        },
        nonPriorityFilter: {
            order: 0,
            category: [0, 1, 2, 3, 4],
        },
        flashcardsFilter: {
            order: 0,
            category: [0, 1],
        },
        quizFilter: {
            types: [0, 1], 
            order: 0,
            category: [0, 1, 2],
        },
    },
    startDate: new Date(),
    title: "Default",
    user: {},
};

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    useEffect(() => {
        async function fetchAuthenticated() {
            const data = await JSON.parse(await fetchData("authenticated"));
            dispatch({
                type: Actions.UPDATE_AUTHENTICATED,
                payload: data ? data : initialState.authenticated,
            });
        }
        async function fetchStartDate() {
            const data = await JSON.parse(await fetchData("startDate"));
            dispatch({
                type: Actions.UPDATE_AUTHENTICATED,
                payload: data ? data : initialState.authenticated,
            });
        }
        async function fetchSettings() {
            const data = await JSON.parse(await fetchData("settings"));
            dispatch({
                type: Actions.UPDATE_SETTINGS,
                payload: data ? data : initialState.settings,
            });
        }
        async function fetchTitle() {
            dispatch({ type: Actions.UPDATE_TITLE, payload: "Default" });
        }
        async function fetchUser() {
            const data = await JSON.parse(await fetchData("user"));
            dispatch({
                type: Actions.UPDATE_USER,
                payload: data ? data : initialState.user,
            });
        }
        fetchAuthenticated();
        fetchSettings();
        fetchStartDate();
        fetchTitle();
        fetchUser();
        console.log("state", state);
    }, []);

    const updateAuthenticated = async (data) => {
        dispatch({
            type: Actions.UPDATE_AUTHENTICATED,
            payload: data,
        });
        await storeData(
            "authenticated",
            typeof data === "string" ? data : JSON.stringify(data),
        );
    };
    const updateSettings = async (data) => {
        dispatch({
            type: Actions.UPDATE_SETTINGS,
            payload: data,
        });
        await storeData(
            "settings",
            typeof data === "string" ? data : JSON.stringify(data),
        );
    };
    const updateStartDate = async (data) => {
        dispatch({
            type: Actions.UPDATE_START_DATE,
            payload: data,
        });
        await storeData(
            "startDate",
            typeof data === "string" ? data : JSON.stringify(data),
        );
    };
    const updateTitle = async (data) => {
        dispatch({
            type: Actions.UPDATE_TITLE,
            payload: data,
        });
    };
    const updateUser = async (data) => {
        dispatch({
            type: Actions.UPDATE_USER,
            payload: data,
        });
        console.log("User data updated", data);
        await storeData(
            "user",
            typeof data === "string" ? data : JSON.stringify(data),
        );
    };
    return (
        <GlobalContext.Provider
            value={{
                authenticated: state.authenticated,
                settings: state.settings,
                startDate: state.startDate,
                title: state.title,
                user: state.user,
                updateAuthenticated,
                updateSettings,
                updateStartDate, 
                updateTitle,
                updateUser,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
