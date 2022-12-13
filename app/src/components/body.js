import { useEffect, useState, useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { API_URL, USER_RECS_ENDPOINT } from '../services/auth.constants';
import { Geolocator } from './geolocator';

export function BigButton(props) {
    const tempValue = useRef('local');
    const tempPrice = useRef('1%2C2%2C3%2C4');
    


    const generateButtonClick = (e) => {
        props.setRecommendations(props.yelpRef.current)
        props.setPage('carousel')
        setTimeout(() => {props.scrollToRef.current.scrollIntoView({behavior:"smooth", block:"end"})},  20)
    }



    const menuItems = props.outings.map((item) =>
        <option 
        value={item.name}
        key={item.id}
        >
            { item.name }
        </option>
    )
    const onBudgetChange = (event) => {
        props.setPrice(event.target.value)
    }

    const onOutingChange = (event) => {
        props.setValue(event.target.value)
    }


    if (props.page === 'generate') {
    return (
        <>
        <div id='heroContainer'>
        </div>
        {/* <div className="container text-center">
            <div className="row align-items-start">
                <div className="col"> */}
                    <h5>What's your budget?</h5>
                    <div id="priceSelect">
                        <Form.Select onChange={onBudgetChange} aria-label="Default select example">
                            <option value="1%2C2%2C3%2C4">Any</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                        </Form.Select>
                    {/* </div> */}
                </div>
                {/* <div className='col'> */}
                    <h5>What kind of outing are you looking for?</h5>
                    <div id="outingSelect">
                        <Form.Select onChange={onOutingChange}>
                            { menuItems }
                        </Form.Select>
                    </div>
                {/* </div> */}
                    {props.children}
                    <div className="d-grid gap-2">
                        <a href="#imageCarousel">
                            <Button id='generateBtn' onClick={generateButtonClick} variant="secondary" size="md">
                                Generate a Date!
                            </Button>
                        </a>
                    </div>
            {/* </div> */}
        {/* </div> */}
        </>
    )
    } else {
        return null
    }
}

// export function GeneratedOuting( { PostYelpData, recPostData, setRecPostData, value, recommendations, buttonState } ) {

    // function random() {
    //     return Math.floor(Math.random() * (recommendations.length))
    // }



    // const X = random();

    //generates random id;
    // let guid = () => {
    //     let s4 = () => {
    //         return Math.floor((1 + Math.random()) * 0x10000)
    //             .toString(16)
    //             .substring(1);
    //     }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    //     return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    // }
    // const onOptionClick = (e) => {
    //     let selected = recommendations.find(item => item.id === e.target.value)
    //     setRecPostData(selected)
    // }
    // const outingsList = recommendations.map((item) =>
    //     <div
    //     key={item.id}>
    //         <div 
    //         value={item.name}
    //         key={item.name}
    //         >
    //         {item.name}
            
    //             <div key={item.phone}>{item.phone}</div>
    //             <img key={item.picture_url} src={item.picture_url} alt="restaraunt"></img>
            
    //         </div>
    //         <button 
    //         key={item.address}
    //         value={item.id}
    //         onClick={(e) => onOptionClick(e)}
    //         >Let's Go Here</button>
    //     </div>
    // )   
    //             return (
    //                 <div>
    //                     { outingsList }
    //                     {/* <h2>Go Here</h2>
    //                     <h3>{recommendations[X].name}</h3>
    //                     <h4>{recommendations[X].phone}</h4>
    //                     <img src={recommendations[X].picture_url} alt="a restaurant"></img> */}
    //                 </div>
    //             )
    //         }
        
    
