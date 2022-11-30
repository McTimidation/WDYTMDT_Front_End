import { useEffect } from 'react';
import axios from 'axios';

const ideas = {
            outings: []
}

function GetData() {
    useEffect(() => {
        axios.get('https://8000-mctimidation-wdytmdt-az9nokp6w27.ws-us77.gitpod.io/api/outings/?format=json')
        .then((data) => {
            data.data.forEach(item => {
                ideas.outings.push(item.name)
            })
        })
    }, []);
}

export { ideas }
export default GetData;