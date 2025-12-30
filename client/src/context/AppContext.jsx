import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
const AppContext = createContext();


export const AppProvider = ({children}) =>{
    
    
    const [token, setToken] = useState(null);

useEffect(() => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    setToken(storedToken);
  }
}, []);


    const [blogs, setBlogs] = useState([]);
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");

    const fetchBlogs = async ()=>{
        try {
           const {data} = await axios.get('/api/blog/all');
           data.success ? setBlogs([...data.blogs]) : toast.error(data.message);

            
        } catch (error) {
            toast.error(error.message);
            
        }
    };
    const fetchAllComments = async ()=>{
        try{
             const {data} = await axios.get(`/api/blog/comments`);
             if(data.success){
                setComments([...data.comments]);
             }  else{
                toast.error(data.message);
             }
        }catch(error){
            toast.error(error.message);

        }
    };
      
useEffect(() => {
  fetchBlogs();
  fetchAllComments();
  
}, []);

useEffect(() => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}, [token]);


    const value = {
        axios,
        token, setToken,
        blogs, setBlogs,
        comments, setComments,
        input, setInput
        ,fetchBlogs,
        fetchAllComments
    };



    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () =>{
    return useContext(AppContext);
}

