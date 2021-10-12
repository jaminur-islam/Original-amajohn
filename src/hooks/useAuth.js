import { useContext } from "react"
import { MyContext } from "../Context/ContextProvider"

const useAuth =()=>{
  return useContext(MyContext);
}
export default useAuth;