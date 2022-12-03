

function Header() {
    return(
        <>
            <div className="justify-content-center container">
                <header className="justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                    <span className="text-center">Why Don't You Take Me Downtown?</span>
                    </a>
                    <p id="pageBio">
                        This is an application you can use to help you figure where to take that special someone in your life. 
                        Whether it's for a special anniversary or a quick pivot after a cancelled PTA meeting, 
                        all you have to do is answer a few quick questions and you can be on your way to an awesome night.
                    </p>

                    <ul className="nav d-flex flex-wrap justify-content-center">
                        <li className="nav-item"><a href="#" className="nav-link active link-dark" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark">FAQs</a></li>
                    </ul>
                </header>
            </div>
        </>
        // <>

 
        // </>
    )
}

export default Header;