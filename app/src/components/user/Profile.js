import React, { Fragment } from "react"
import { useGlobalState } from "../../context/GlobalState";
import request from "../../services/api.request";
import { ACTIVITY_ENDPOINT } from "../../services/auth.constants";
import Layout from "../layout";
import { useState, useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form';
import moment from "moment";



const Profile = () => {
    const [state, dispatch] = useGlobalState();
    const [profileData, setProfileData ] = useState([]);
    const profileRef = useRef([]);
    const [ deleteID, setDeleteID ] = useState(null)

    
    useEffect(() => {
        async function GetActivity() {
            profileRef.current = [];
            let options = {
                url: ACTIVITY_ENDPOINT,
                method: 'GET',
            }
            let resp = await request(options);
            resp.data.forEach(date => {
                profileRef.current.push({
                    id: date.id,
                    user: date.user,
                    name: date.name,
                    phone: date.display_phone,
                    rating: date.rating,
                    image: date.picture_url,
                    scheduled_for: moment(`${date.scheduled_for}`,"YYYY-MM-DDThh:mm").format("dddd MMM Do  @ h:mma"),
                    completed: date.completed
                    }
        
                )
            })
            setProfileData(profileRef.current)
        }
        GetActivity();

    },[])

    useEffect(() => {
        if (deleteID !== null) {
            async function RemoveActivity() {
                await request({
                    url: `${ACTIVITY_ENDPOINT}${deleteID}/`,
                    method: 'DELETE',
                })
            }
            RemoveActivity()
        }
    }, [deleteID])

    const onDelete = (e) => {
        setDeleteID(e.target.value)
    }


    

    const dates = profileData.map((date) => 
        <Fragment key={date.id}>
            <h3>{date.name}</h3>
            <img src={date.image} alt="a restaurant"></img>
            <div>Scheduled for: {date.scheduled_for}</div>
            <div>
                <Form>
                    <Form.Check 
                    type={"checkbox"}
                    label={`Completed?`}
                    />
                </Form>
            </div>
            <div>{date.completed ? 'Completed: ✔' : ''}</div>
            <button onClick={(e) => onDelete(e)} value={date.id}>
                {date.completed ? "Remove" : "Cancel"}
            </button>
        </Fragment>
    )
    

    return (
        <Layout>
            {/* <h1>{profileData[0].user}</h1> */}
            {dates}
        </Layout>
    )
}

export default Profile