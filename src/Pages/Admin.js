import { Outlet } from "react-router-dom";;
import { Provider } from "react-redux";
import store from "../store/store";
import AdminHeader from "../Components/Admin/AdminHeader";
import Footer from "../Components/Footer/Footer";

function Admin() {
    return (
        <>
        <Provider store={store}>
            <AdminHeader/>
            <Outlet/>
            <Footer/>
        </Provider>
        </>
    );
};

export default Admin;