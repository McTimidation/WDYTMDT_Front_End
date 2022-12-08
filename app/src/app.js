import Header from './components/header';
import { useState, useEffect, useRef } from 'react';
import { BigButton } from './components/body';
import axios from 'axios';
import { GlobalProvider } from './context/GlobalState';
import { Outlet } from "react-router-dom";
import { API_URL, USER_RECS_ENDPOINT, ACTIVITY_ENDPOINT } from './services/auth.constants';
import Layout from './components/layout';
import request from './services/api.request';
import { GeneratedOuting } from './components/generatedouting';



function App() {
    const [ page, setPage ] = useState()
    const [ outings, setOutings ] = useState([]);
    const [ value, setValue ] = useState('Dinner');
    const [ recommendations, setRecommendations ] = useState([]);
    const [ price, setPrice ] = useState('1%2C2%2C3%2C4');
    const [ buttonState, setButtonState ] = useState(0);
    const yelpRef = useRef([]);
    const [recPostData, setRecPostData ] = useState(null)
        
    //                                             name: null,
    //                                             phone: null,
    //                                             rating: null,
    //                                             picture_url: null,
    //                                             city: null,
    //                                             state: null,
    //                                             address: null
    //                                         })

    
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

    useEffect(() => {
        async function PostYelpData() {
            await request({
                url: ACTIVITY_ENDPOINT,
                method: 'POST',
                data: {
                    name: recPostData.name,
                    phone: recPostData.phone.replace(/[^0-9]/g, ''),
                    picture_url: recPostData.picture_url,
                    rating: recPostData.rating,
                    city: recPostData.city,
                    state: recPostData.state,
                    address: recPostData.address
                }
            })
        }
        if (recPostData !== null) {
                PostYelpData();
        }
    }, [recPostData])

    
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
            setRecPostData={setRecPostData}
            recPostData={recPostData}
            yelpRef={yelpRef}
            buttonState={buttonState}
            recommendations={recommendations}
            value={value} 
            />

        </Layout>
    )
}

export default App;