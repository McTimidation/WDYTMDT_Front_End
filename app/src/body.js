import { useEffect, useState, useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


export function BigButton(props) {
    const tempValue = useRef('local');
    const tempPrice = useRef('1%2C2%2C3%2C4');
    
    // useEffect(() => {
    //     console.log('price: ', props.price)
    //     console.log('value: ', props.value)
    //     console.log('recommendations: ', props.recommendations)
    // }, [props.price, props.value])

    const buttonClick = (e) => {
        props.setValue(tempValue.current)
        props.setPrice(tempPrice.current)
        props.setRecommendations(props.yelpRef.current)
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
        tempPrice.current = (event.target.value)
    }

    const onOutingChange = (event) => {
        tempValue.current = (event.target.value)
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
                <Button onClick={buttonClick} variant="secondary" size="lg">
                    Generate a Date!
                </Button>
            </div>

        </>
    )
}

export function GeneratedOuting( { value, recommendations } ) {

    function random() {
        return Math.floor(Math.random() * (recommendations.length))
    }
    // console.log(recommendations.length)
    // setTimeout(console.log(recommendations[random()]), 5000)
    // console.log(recommendations[random()])

            if (value !== 'local' && recommendations.length > 0) {
                const X = random()
                return (
                    <>
                        <h2>Go Here</h2>
                        <h3>{recommendations[X].name}</h3>
                        <h4>{recommendations[X].phone}</h4>
                        <img src={recommendations[X].picture} alt="a restaurant"></img>
                    </>
                )
            } else if (value !== 'local') {
                return (
                    <h2>No results matched those parameters. Try harder.</h2>
                )
            }
        
    
}