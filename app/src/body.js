import Dropdown from 'react-bootstrap/Dropdown';


export function BigButton(props) {


    const menuItems = props.outing.map((item) =>  
        <Dropdown.Item 
        eventKey={ item.id } 
        key={ item.id }
        onClick={() => props.setValue( item.name )}>
            { item.name }
        </Dropdown.Item>
    )
    
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Large button
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
    const X = random();
    console.log("recommendations", recommendations)
    console.log("recommendations.business", recommendations.businesses)
    const A = [1,2,3]
    console.log(typeof A)
    console.log(typeof recommendations)
    console.log(typeof recommendations.businesses)
    // console.log(recommendations.businesses[0])
    console.log(recommendations.length)
    // console.log(recommendations.businesses[X].name)
    if (Array.isArray(recommendations.businesses)) {
        console.log(recommendations.businesses["0"]);
      } else {
        console.log('arr is not an array');
      }

    // recommendations.businesses.map(item => {
    //     console.log(item)
    // })

    if (value) {
        return (
            <>
                {/* <h2>Go Here</h2>
                <h3>{recommendations[X].name}</h3>
                <h4>{recommendations[X].phone}</h4>
                <img src={recommendations[X].picture}></img> */}
            </>
        )
    }
}