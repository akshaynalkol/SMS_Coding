import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import UserData from './UserData';
import EditUser from './EditUser';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/UserData" element={<UserData />}></Route>
          <Route path="*" element={<Home />}></Route>

          {/* Edit User */}
          <Route path='/EditUser/:id' element={<EditUser />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
