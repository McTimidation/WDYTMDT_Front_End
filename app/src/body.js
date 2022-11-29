import { ideas } from './generate';


function random() {
    let X = Math.floor(Math.random() * (ideas.outings.length))
    return X
}

export function BigButton(props) {

    

    return (
        <>
            <button onClick={() => 
                props.setPage(props.ideas.outings[random])}>Generate!</button> 
        </>
    )
}

export function GeneratedOuting() {
    if (page)
}