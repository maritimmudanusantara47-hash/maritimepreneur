import HeaderEvent from "../component/Eventpage/HeaderEvent.jsx";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer.jsx";
import EventList from "../component/Eventpage/EventList.jsx";

const EventPage = () => {
    return (
        <div>
            <NavBar/>
            <HeaderEvent/>
            <EventList/>
            <Footer/>
        </div>
    );
}

export default EventPage;