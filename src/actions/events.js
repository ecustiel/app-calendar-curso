import { types } from "../types/types";



export const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
})


export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
})

export const eventClearActiveEvent = () => ({type: types.eventClearActiveEvent});

export const eventUpdated = (e) => ({
    type: types.eventUpdate,
    payload: e
});

export const eventDeleted = () => ({ type: types.eventDeleted})