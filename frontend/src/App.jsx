import './App.css';
import './common/template/custom.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Header from './common/template/Header/Header';
import Sidebar from './common/template/Sidebar/Sidebar';
import Footer from './common/template/Footer/Footer';
import RoutesConfig from './Routes'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper App skin-blue fixed sidebar-mini">
        <Header />
        <div className="d-flex">
          <Sidebar />
          <div className="wrap-content">
            <RoutesConfig />
            <Footer />
          </div>
        </div>
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
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
