import Carousel from 'react-bootstrap/Carousel';





export function GeneratedOuting({ PostYelpData, recPostData, setRecPostData, value, recommendations, buttonState }) {



    const onOptionClick = (e) => {
        let selected = recommendations.find(item => item.id === e.target.value)
        setRecPostData(selected)
    }
    const outingsList = recommendations.map((item) =>
        <Carousel.Item key={item.id} interval={20000}>
            <img
                className="img-fluid"
                src={item.picture_url}
                alt={item.name}
            />
            <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.phone}</p>
                <button 
                    key={item.address}
                    value={item.id}
                    onClick={(e) => onOptionClick(e)}
                    >
                        Let's Go Here
                </button>
            </Carousel.Caption>
        </Carousel.Item>
    )

    if (outingsList.length !== 0) {
        return (
            <Carousel id="imageCarousel">
                { outingsList }
            </Carousel>
        );
    }
}
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



