import moment from 'moment';

function After({setLoggedIn}) {

    const handleLogout = () => {
        setLoggedIn(localStorage.removeItem('jwt'))
        console.log("Succesfully logout!")
    }

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center p-0" style={{height:"100vh", backgroundColor:"lightgrey"}}>
            <div className="row flex-column align-items-center justify-content-center m-0">
                <h3 className="text-center">Good Day!</h3>
                <h3 className="text-center">Today is {moment().format('Do MMMM YYYY')}</h3>
                <p className="small text-center">Please click <a id="logout" onClick={handleLogout}>here</a> to logout!</p>
            </div>
        </div>
    )
};

export default After;