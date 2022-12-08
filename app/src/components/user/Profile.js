import React from "react"
import { useGlobalState } from "../../context/GlobalState";
import Layout from "../layout";

const Profile = () => {
    const [state, dispatch] = useGlobalState();

    return (
        <Layout>
            <h1>{state.currentUser.user_id}</h1>
        </Layout>
    )
}

export default Profile