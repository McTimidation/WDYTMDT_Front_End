import Header from './components/header';
import { useState, useEffect, useRef } from 'react';
import { BigButton, GeneratedOuting } from './components/body';
import axios from 'axios';
import { GlobalProvider } from './context/GlobalState';
import { Outlet } from "react-router-dom";
import { API_URL, USER_RECS_ENDPOINT } from './services/auth.constants';
import Layout from './components/layout';



function App() {
    const [ page, setPage ] = useState()
    const [ outings, setOutings ] = useState([]);
    const [ value, setValue ] = useState('Dinner');
    const [ recommendations, setRecommendations ] = useState([]);
    const [ price, setPrice ] = useState('1%2C2%2C3%2C4');
    const [ buttonState, setButtonState ] = useState(0);
    const yelpRef = useRef([]);
    const [recPostData, setRecPostData ] = useState()
        
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
                console.log(biz)
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


    function PostYelpData() {
        axios.post(`${API_URL}${USER_RECS_ENDPOINT}`, {
            name: recPostData.name,
            phone: recPostData.phone,
            picture_url: recPostData.picture_url,
            rating: recPostData.rating,
            city: recPostData.city,
            state: recPostData.state,
            address: recPostData.address
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error)
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