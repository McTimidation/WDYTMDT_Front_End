import { useReducer } from "react";
// import DateTimePicker from 'react-datetime-picker';
import Datetime from 'react-datetime';
import { useState } from "react";
import moment from "moment";

// function detailsReducer()


export function ScheduleOuting( { scheduledTime, setScheduledTime } ) {
    // const [ details, dispatch ] = useReducer(detailsReducer, initialDetails);
    const yesterday = moment().subtract( 1, 'day' );
    const valid = function( current ){
    return current.isAfter( yesterday );
    };


    
    return (
        <>
            <Datetime  input={ false } isValidDate={ valid } onChange={setScheduledTime} value={scheduledTime} />
        </>

    )

    
}