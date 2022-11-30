import Header from './header';
import GetData from './generate';
import { useState } from 'react';
import { BigButton, GeneratedOuting } from './body';
import { ideas } from './generate';


function App() {
    const [ page, setPage ] = useState()


    GetData();
    return (
        <>
            <Header />
            <BigButton 
            page={page} 
            setPage={setPage}
            ideas={ideas}
            />
            <GeneratedOuting
            page={page} 
            />
        </>
    )
}

export default App;