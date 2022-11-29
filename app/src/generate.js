import { useEffect } from 'react';
import axios from 'axios';

const ideas = {
            outings: []
}

function GetData() {
    useEffect(() => {
        axios.get('https://8000-mctimidation-wdytmdt-cnbb43lc3et.ws-us77.gitpod.io/api/outings/?format=json')
        .then((data) => {
            data.data.forEach(item => {
                ideas.outings.push(item.name)
            })
        })
    }, []);
}

export { ideas }
export default GetData;