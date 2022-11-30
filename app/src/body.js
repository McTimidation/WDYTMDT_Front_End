import Dropdown from 'react-bootstrap/Dropdown';


function random() {
    let X = Math.floor(Math.random() * (outing.length))
    return X
}

export function BigButton(props) {


    const menuItems = props.outing.map((item) =>  
        <Dropdown.Item 
        eventKey={ item.id } 
        key={ item.id }
        onClick={() => props.setValue( item.name )}>
            { item.name }
        </Dropdown.Item>
    )
    
    console.log(props.value)
    
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Large button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        { menuItems }
                    </Dropdown.Menu>
                {/* <button onClick={() => 
                props.setPage(props.ideas.outings[random()])}>Generate!</button> */}
            </Dropdown>    
        </>
    )
}

// export function GeneratedOuting( { page } ) {

//     if (page) {
//         return (
//             <h2> {page} </h2>
//         )
//     }
// }