import Header from './header';
import { useState, useEffect } from 'react';
import { BigButton, GeneratedOuting } from './body';
import axios from 'axios';



function App() {
    const [ page, setPage ] = useState()
    const [outing, setOuting] = useState([]);
    const [ value, setValue ] = useState();
    const [ recommendations, setRecommendations ] = useState([]);
    const [ price, setPrice ] = useState('1%2C2%2C3%2C4');

    function GetData() {
    const outingArray = []

        useEffect(() => {
            axios.get('https://8000-mctimidation-wdytmdt-az9nokp6w27.ws-us77.gitpod.io/api/outings/?format=json')
            .then((resp) => {
                resp.data.forEach(item => {
                    outingArray.push(item)
                })
                setOuting(outingArray)
            
            })
        }, []);
    }
    useEffect(() => {
    async function GetYelpData() {
        const yelpArray = [];
        const response = await axios.get(`https://8000-mctimidation-wdytmdt-az9nokp6w27.ws-us77.gitpod.io/api/yelpView/?price=${price}&term=${value}`)
        response.data.businesses.forEach(biz => {
            yelpArray.push({
                            name: biz.name,
                            phone: biz.display_phone,
                            picture: biz.image_url,
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
        setRecommendations(yelpArray)
        
        }
        GetYelpData();
    },[price, value])
                //     .then((resp) => {
                //         resp.data.businesses.forEach(biz => {
                //             yelpData.push({
                //                             name: biz.name,
                //                             phone: biz.display_phone,
                //                             picture: biz.image_url,
                //                             city: biz.location.city,
                //                             state: biz.location.state,
                //                             address: biz.location.address1
    
                //             })
                //         })
                //             // 
                //         })
                //         console.log(yelpData);
                //         setRecommendations(yelpData);
                //         console.log(recommendations)
                //     }, []);
                    
                // } 
                
    
            


    GetData();

    

    
    return (
        <>
            <Header />
            <BigButton
            price={price}
            setPrice={setPrice}
            value={value}
            setValue={setValue}
            outing={outing}
            setOuting={setOuting}
            page={page} 
            setPage={setPage}
            />
            <GeneratedOuting
            recommendations={recommendations}
            value={value} 
            />
        </>
    )
}

export default App;