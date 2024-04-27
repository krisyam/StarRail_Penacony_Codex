export const Actions = {
    UPDATE_LANGUAGE: "UPDATE_LANGUAGE",
    UPDATE_HERTASPINCOUNTER: 'UPDATE_HERTASPINCOUNTER',
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case Actions.UPDATE_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        case Actions.UPDATE_HERTASPINCOUNTER:
            return {
                ...state,
                hertaSpinCounter: action.payload,
            };
        default:
            return state;
    }
};
