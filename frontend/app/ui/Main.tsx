
import Welcome from "./Welcome";



const Main = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex-1">
        <Welcome /> 
        {children}
    </div>
  )
}

export default Main