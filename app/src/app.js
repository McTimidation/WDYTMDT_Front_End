import Header from './header';
import GetData from './generate';
import { useState } from 'react';
import { BigButton, GeneratedOuting } from './body';


function App() {
    const [ page, setPage ] = useState()


    GetData();
    return (
        <>
            <Header />
            <BigButton 
            page={page} 
            setPage={setPage}
            />
            <GeneratedOuting
            page={page} 
            setPage={setPage}
            />
        </>
    )
}

export default App;