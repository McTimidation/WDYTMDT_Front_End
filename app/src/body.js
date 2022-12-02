import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'


export function BigButton(props) {


    const menuItems = props.outing.map((item) =>  
        <Dropdown.Item 
        eventKey={ item.id } 
        key={ item.id }
        onClick={() => 
        props.setValue( item.name )}>
            { item.name }
        </Dropdown.Item>
    )
    const onChange = (event) => {
        props.setPrice(event.target.value)
    }
        

    
    
    return (
        <>
            <Form.Select onChange={onChange} aria-label="Default select example">
                <option>What's your budget?</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </Form.Select>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    What type of Outing are you looking for?
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        { menuItems }
                    </Dropdown.Menu>
            </Dropdown>    
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



    if (value) {
        const X = random()
        return (
            <>
                <h2>Go Here</h2>
                <h3>{recommendations[X].name}</h3>
                <h4>{recommendations[X].phone}</h4>
                <img src={recommendations[X].picture}></img>
            </>
        )
    }
}