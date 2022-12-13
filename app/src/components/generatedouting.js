
import Carousel from 'react-bootstrap/Carousel';
import { ScheduleOuting } from './scheduleouting';
import { useState, useEffect } from 'react';
import moment from 'moment';
import Button from 'react-bootstrap/Button';





export function GeneratedOuting({ state, scrollToRef, page, setPage, PostYelpData, recPostData, setRecPostData, value, recommendations, buttonState, setButtonState }) {
    const [ scheduledTime, setScheduledTime ] = useState(new Date());

    const onScheduleClick = () => {
        console.log(scheduledTime)
        setPage('alert')
        setRecPostData({...recPostData,
                        scheduled_for: moment(scheduledTime._d).format("YYYY-MM-DDThh:mm")
                        });
        PostYelpData()
        setTimeout(() => {setPage('generate')}, 5000)
    }


    const onOptionClick = (e) => {
        let selected = recommendations.find(item => item.id === e.target.value)
        setRecPostData({...recPostData,
                        name: selected.name,
                        phone: selected.phone,
                        rating: selected.rating,
                        picture_url: selected.picture_url,
                        city: selected.city,
                        state: selected.state,
                        address: selected.address,
                        url: selected.url
                        })
        if (state.currentUser) {
        setPage('schedule')
        } 
    }


    
    const outingsList = recommendations.map((item) =>
        <Carousel.Item key={item.id} interval={20000}>
            <h3>{item.name}</h3>
            <p>{item.phone}<br></br>Rating: {item.rating}<br></br><a href={item.url} target="#">Check out the menu</a></p>

            <img
                className="img-fluid carImages"
                src={item.picture_url}
                alt={item.name}
            />
            <Carousel.Caption>
                { 
                    state.currentUser && (
                    <button 
                        className="btn btn-secondary"
                        key={item.address}
                        value={item.id}
                        onClick={(e) => onOptionClick(e)}
                        >
                            Let's Go Here
                    </button>
                    )
                }
            </Carousel.Caption>
        </Carousel.Item>
    )

    if (page === 'carousel') {
        return (
            <>
            <Carousel  variant='dark' id="imageCarousel">
                { outingsList }
            </Carousel>
            <Button ref={scrollToRef} variant="outline-secondary" onClick={() => 
                {setPage('generate')}}>Go Back</Button>
            </>
            
        );
    }

    else if (page === 'schedule') {
        return (
            <>
            <div id="selectedContainer">
                <h3>{recPostData.name}</h3>
                <p>{recPostData.phone}</p>
                <img className='bizImage' id='selectedIMG' src={recPostData.picture_url} alt={recPostData.name}/>
                <ScheduleOuting 
                    scheduledTime={scheduledTime}
                    setScheduledTime={setScheduledTime}
                />
                <button onClick={onScheduleClick} id="scheduleButton">
                    Schedule it!
                </button>
            </div>
            <Button variant="outline-secondary" onClick={() => 
                {setPage('carousel')}}>Go Back</Button>
            {/* <button 
                type="button"
                className="btn btn-outline-secondary"  
                
            >
                Go Back
            </button> */}
            </>
        );
    } else if (page === 'alert') {
        const bookedTime = moment(scheduledTime._d).format("dddd MMM Do @ h:mma")
        return (
            <div className="alert alert-dark" role="alert">
                You scheduled <strong>{recPostData.name}</strong> for <em>{bookedTime}</em>!
            </div>
        )
    }
}




