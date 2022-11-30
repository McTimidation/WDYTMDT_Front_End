import Header from './header';
import GetData from './generate';
import { useState, useEffect } from 'react';
import { BigButton, GeneratedOuting } from './body';
import axios from 'axios';



function App() {
    const [ page, setPage ] = useState()
    const [outing, setOuting] = useState([]);
    const [ value, setValue ] = useState();

    function GetData() {
    const outingArray = []

        useEffect(() => {
            axios.get('https://8000-mctimidation-wdytmdt-az9nokp6w27.ws-us77.gitpod.io/api/outings/?format=json')
            .then((resp) => {
                resp.data.forEach(item => {
                    console.log(item)
                    outingArray.push(item)
                })
                setOuting(outingArray)
            
            })
        }, []);
        console.log(outing)
    }


    GetData();
    return (
        <>
            <Header />
            <BigButton 
            value={value}
            setValue={setValue}
            outing={outing}
            setOuting={setOuting}
            page={page} 
            setPage={setPage}
            />
            {/* <GeneratedOuting
            page={page} 
            /> */}
        </>
    )
}

export default App;