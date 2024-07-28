import React, { createContext, useReducer } from 'react';
import axios from 'axios';
// Initial state
const initialState = {
    transactions: [],
    error: null,
    loading: true

};

// Reducer function
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'GetTransaction':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DeleteTransaction':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            };
        case 'AddTransaction':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            };
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => { // Use 'children' instead of 'Children'
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Action handlers
    async function getTransaction() {
        try {
            const res = await axios.get('/api/v1/transactions')
            dispatch({
                type: 'GetTransaction',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }
    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: 'DeleteTransaction',
                payload: id
            });

        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }

    }

    async function addTransaction(transaction) {
        const config={
            header:{
                'Content-Type':'application/json'
            }
        }
        try {
            const res=await axios.post(`/api/v1/transactions`,transaction,config);
            
        dispatch({
            type: 'AddTransaction',
            payload:res.data.data
        });
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }

    }



    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            getTransaction,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
