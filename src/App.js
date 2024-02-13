import { ToastContainer } from "react-toastify";
import  AuthContextProvider from "./components/contexts/AuthContext";
import BlogContextProvider  from "./components/contexts/BlogContext";
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter/>
      <ToastContainer/>
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  )
}


