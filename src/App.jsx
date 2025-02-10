import { Route ,Routes} from 'react-router-dom'
import './App.css'
import { AdminDashboard, AdminHotel, BookingForm, BookingList, BookingPage, Footer, Header, Home, HotelDetails, HotelList, HotelPage, Layout, Login, ManageBooking, ManageHotel, Register } from '../root'

function App() {

  return (
    <>
 <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="AdminDashboard" element={<AdminDashboard />} />
        <Route path="BookingPage" element={<BookingPage />} />
        <Route path="HotelPage" element={<HotelPage />} />
        <Route path="AdminHotel" element={<AdminHotel />} />
        <Route path="HotelDetails" element={<HotelDetails />} />
        <Route path="HotelList" element={<HotelList />} />
        <Route path="BookingForm" element={<BookingForm />} />
        <Route path="BookingList" element={<BookingList />} />
        <Route path="ManageBooking" element={<ManageBooking />} />
        <Route path="ManageHotel" element={<ManageHotel />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="*" element={<Error />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
