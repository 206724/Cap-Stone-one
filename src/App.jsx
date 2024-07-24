import { Routes, Route } from "react-router-dom";
import IndexPage from "./Pages/IndexPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import AccountPage from "./Pages/AccountPage.jsx";
import Layout from "./Layout.jsx";
import axios from "axios";
import { UserContextProvider } from "./UserContext.jsx";

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials=true;

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account/:subpage?" element={<AccountPage />} />
        <Route path="/account/:subpage/:action" element={<AccountPage />} />
        
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
