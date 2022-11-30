import { useEffect, useState } from 'react';
import axios from 'axios';


// const ideas = {
//             outings: [],
//             recommendations: []
// }




// function GetData() {
    

//     useEffect(() => {
//         axios.get('https://8000-mctimidation-wdytmdt-az9nokp6w27.ws-us77.gitpod.io/api/outings/?format=json')
//         .then((resp) => {
//             setOuting(resp.data)
        
//         })
//     }, []);
//     console.log(outing)
// }

function GetYelpData() {
    
    const options = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        params: {
            location: 'Lexington',
            term: 'Dinner',
            categories: '',
            price: '1',
            sort_by: 'best_match',
            matches_party_size_param: 'true',
            limit: '20'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer MirzBJCP0rFnEzwjGZKMhO8tiXa3oyOeJO7JpCIr7ExtZAmAmScyj4wjuMlrR28Msy97mfUV7GDnEXLNak8-gSn8ReYrVhTj9vrrgrgjM86SnIuXeCUytkvY1nOHY3Yx'
        }
        };

        axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });

}

export default GetYelpData;