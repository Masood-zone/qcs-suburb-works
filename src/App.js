import {BrowserRouter}from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import MainApp from "./admin/pages";

export default function App() {
  return <BrowserRouter>
  <MainApp />
  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
  </BrowserRouter>;
}
