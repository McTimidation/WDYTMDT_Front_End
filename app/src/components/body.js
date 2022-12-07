import { useEffect, useState, useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { API_URL, USER_RECS_ENDPOINT } from '../services/auth.constants';


export function BigButton(props) {
    const tempValue = useRef('local');
    const tempPrice = useRef('1%2C2%2C3%2C4');



    
    

    const generateButtonClick = (e) => {
        props.setRecommendations(props.yelpRef.current)
        props.setButtonState('true')






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
        console.log(tempPrice.current)
    }

    const onOutingChange = (event) => {
        props.setValue(event.target.value)
        console.log(tempValue.current)

    }

    

    
    return (
        <>
            <h5>What's your budget?</h5>
            <Form.Select onChange={onBudgetChange} aria-label="Default select example">
                <option value="1%2C2%2C3%2C4">Any</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </Form.Select>

            <h5>What kind of outing are you looking for?</h5>

            <Form.Select onChange={onOutingChange}>
                { menuItems }
            </Form.Select>

            <div className="d-grid gap-2">
                <Button onClick={generateButtonClick} variant="secondary" size="lg">
                    Generate a Date!
                </Button>
            </div>
            {props.children}
        </>
    )
}

export function GeneratedOuting( { PostYelpData, recPostData, setRecPostData, value, recommendations, buttonState } ) {

    // function random() {
    //     return Math.floor(Math.random() * (recommendations.length))
    // }



    // const X = random();

    //generates random id;
    let guid = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    console.log(recPostData)
    const onOptionClick = (e) => {
        let selected = recommendations.find(item => item.id === e.target.value)
        setRecPostData(selected)
        // PostYelpData()
    }
    const outingsList = recommendations.map((item) =>
        <>
            <div 
            value={item.name}
            key={item.id}
            >
            {item.name}
            
                <div key={guid()}>{item.phone}</div>
                <img key={guid()} src={item.picture_url} alt="restaraunt"></img>
            
            </div>
            <button 
            key={guid()}
            value={item.id}
            onClick={(e) => onOptionClick(e)}
            >Schedule it!</button>
        </>
    )   
                return (
                    <div>
                        { outingsList }
                        {/* <h2>Go Here</h2>
                        <h3>{recommendations[X].name}</h3>
                        <h4>{recommendations[X].phone}</h4>
                        <img src={recommendations[X].picture_url} alt="a restaurant"></img> */}
                    </div>
                )
            }
        
    
