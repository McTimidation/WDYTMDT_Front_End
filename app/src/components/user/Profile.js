import React, { Fragment } from "react"
import { useGlobalState } from "../../context/GlobalState";
import request from "../../services/api.request";
import { ACTIVITY_ENDPOINT } from "../../services/auth.constants";
import Layout from "../layout";
import { useState, useEffect, useRef } from "react";
import moment from "moment";
import CancelModal from "./CancelModal";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Profile = () => {
    const [state, dispatch ] = useGlobalState();
    const [ profileData, setProfileData ] = useState([]);
    const profileRef = useRef([]);
    const [ deleteID, setDeleteID ] = useState(null)
    const [ completePatch, setCompletePatch ] = useState(null);
    const [ show, setShow ] = useState(false);
    const [ profileUser, setProfileUser ] = useState();
    const handleNevermind = () => setShow(false);
    const handleCancelEvent = () => setShow(true);


    useEffect(() => {
        GetActivity()
    },[])


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
                    scheduled_for: moment(`${date.scheduled_for}`, "YYYY-MM-DDTHH:mm").format("dddd MMM Do  @ h:mma"),
                    completed: date.completed
                }

                )
            })
            setProfileUser(profileRef.current[0].user)
            setProfileData(profileRef.current);

        }

        


   


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
        console.log(profileData.length)
        setDeleteID(e.target.value)
        setProfileData(profileData.filter(d =>
            d.id !== e.target.value))

    }



    useEffect(() => {
        if (completePatch !== null) {
            async function CompletePatchRequest() {
                await request({
                    url: `${ACTIVITY_ENDPOINT}${completePatch}/`,
                    method: 'PATCH',
                })
            }
            CompletePatchRequest()
            
        }
    }, [completePatch])


    const onComplete = (e) => {
        setCompletePatch(e.target.value)
    }






    const dates = profileData.map((date) =>
        <Fragment key={date.id}>
            <h3>{date.name}</h3>
            <img className="userDateImage" src={date.image} alt="a restaurant"></img>
            <div>Scheduled for: {date.scheduled_for}</div>
            {
                !date.completed && (
                    <>
                        <input
                            onChange={(e) => onComplete(e)}
                            type={'checkbox'}
                            value={date.id}
                        >
                        </input>
                        <div>Check here if you went on the date!</div>
                    </>
                )
            }
            {
                date.completed && (
                    <div>Completed: ✔</div>
                )
            }
            <button
                type="button" 
                className="btn btn-outline-dark"
                onClick={(e) => onDelete(e)} 
                value={date.id}
            >
                Remove This Event
            </button>
            
        </Fragment>
    )


    return (
        <Layout>
            {
                profileUser && (
                    <h1>{profileUser}'s dates</h1>
                )
            }
            
            {dates}
        </Layout>
    )
}

export default Profile