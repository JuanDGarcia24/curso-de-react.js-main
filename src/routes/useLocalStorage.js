import React from 'react';

function useLocalStorage(itemName, initialValue) {
    
    const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}))

    const {
        sincronizedItem,
        item,
        error,
        loading
    } = state
    
    // action Creator
    const onSuccess = (item) => dispatch( {type: actionTypes.success, payload: item})
    const onError = (error) => dispatch( {type: actionTypes.error, payload: error})
    const onSave = (item) => dispatch( {type: actionTypes.save, payload: item})
    const onSincronize = () => dispatch( {type: actionTypes.sincronize})
    
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                onSuccess(parsedItem);
            } catch (error) {
                onError(error)
            }
        }, 2000);
    }, [initialValue, itemName, sincronizedItem]);

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            onSave(newItem)
        } catch (error) {
            onError(error)
        }  
    };

    const sincronizeItem = () => {
        onSincronize()
    }
    return { item, saveItem, loading, error, sincronizeItem };
}

const initialState =  ({ initialValue}) => ({
    sincronizedItem: true,
        item: initialValue,
        error: false,
        loading: true,
});

const actionTypes = {
    error: 'ERROR',
    save: 'SAVE',
    success: 'SUCCESS',
    sincronize: 'SINCRONIZE'
}

const reducerObjet = (state, payload) => ({
    [actionTypes.error] : {
        ...state,
        error: true,
        loading: false,
    },
    [actionTypes.save] : {
        ...state,
        item: payload,
    },
    [actionTypes.success] : {
        ...state,
        error: false,
        item: payload,
        loading: false,
        sincronizedItem: true,
    },
    [actionTypes.sincronize] : {
        ...state,
        loading: true,
        sincronizedItem: false
    }

});

const reducer = (state, action) => {
    return (reducerObjet(state, action.payload)[action.type] || state)
}

export { useLocalStorage }