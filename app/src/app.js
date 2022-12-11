import Header from './components/header';
import { useState, useEffect, useRef } from 'react';
import { BigButton } from './components/body';
import axios from 'axios';
import { useGlobalState } from './context/GlobalState';
import { Outlet } from "react-router-dom";
import { API_URL, USER_RECS_ENDPOINT, ACTIVITY_ENDPOINT } from './services/auth.constants';
import Layout from './components/layout';
import request from './services/api.request';
import { GeneratedOuting } from './components/generatedouting';
import { ScheduleOuting } from './components/scheduleouting';
import "react-datetime/css/react-datetime.css";


function App() {
    const [state, dispatch] = useGlobalState();
    const [ page, setPage ] = useState('generate')
    const [ outings, setOutings ] = useState([]);
    const [ value, setValue ] = useState('Dinner');
    const [ recommendations, setRecommendations ] = useState([]);
    const [ price, setPrice ] = useState('1%2C2%2C3%2C4');
    const [ buttonState, setButtonState ] = useState('inactive');
    const yelpRef = useRef([]);
    const [recPostData, setRecPostData ] = useState({
                                                user: null,
                                                name: null,
                                                phone: null,
                                                rating: null,
                                                picture_url: null,
                                                city: null,
                                                state: null,
                                                address: null,
                                                scheduled_for:null
                                            })

    
    useEffect(() => {
        function GetData() {
        const outingArray = []
            axios.get(`${API_URL}outings/?format=json`)
            .then((resp) => {
                resp.data.forEach(item => {
                    outingArray.push(item)
                })
                setOutings(outingArray)
            })
        }
        GetData();
    },[])


    useEffect(() => {
        async function GetYelpData() {
            yelpRef.current = [];
            const response = await axios.get(`${API_URL}yelpView/?price=${price}&term=${value}`)
            response.data.businesses.forEach(biz => {
                yelpRef.current.push({
                    id: biz.id,
                    name: biz.name,
                    phone: biz.display_phone,
                    rating: biz.rating,
                    picture_url: biz.image_url,
                    city: biz.location.city,
                    state: biz.location.state,
                    address: biz.location.address1
                    })
            })
                    // if (Array.isArray(recommendations.businesses)) {
                    //     console.log(recommendations.businesses["0"]);
                    //   } else {
                    //     console.log('arr is not an array');
                    //   }
        }
        GetYelpData();
        function random() {
            return Math.floor(Math.random() * (recommendations.length))
        }
        const X = random()
        

    },[price, value])

    
    async function PostYelpData() {
        await request({
            url: ACTIVITY_ENDPOINT,
            method: 'POST',
            data: {
                user: state.currentUser.user_id,
                name: recPostData.name,
                phone: recPostData.phone.replace(/[^0-9]/g, ''),
                picture_url: recPostData.picture_url,
                rating: recPostData.rating,
                city: recPostData.city,
                state: recPostData.state,
                address: recPostData.address,
                scheduled_for: recPostData.scheduled_for
            }
        })
    }
        
    

    
    return (
        <Layout>
            <BigButton
            recPostData={recPostData}
            setRecPostData={setRecPostData}
            recommendations={recommendations}
            setRecommendations={setRecommendations}
            yelpRef={yelpRef}
            buttonState={buttonState}
            setButtonState={setButtonState}
            price={price}
            setPrice={setPrice}
            value={value}
            setValue={setValue}
            outings={outings}
            setOutings={setOutings}
            page={page} 
            setPage={setPage}
            />
            <GeneratedOuting
            PostYelpData={PostYelpData}
            page={page}
            setPage={setPage}
            buttonState={buttonState}
            setRecPostData={setRecPostData}
            recPostData={recPostData}
            yelpRef={yelpRef}
            setButtonState={setButtonState}
            recommendations={recommendations}
            value={value} 
            />
                
            
            
            

        </Layout>
    )
}

export default App;