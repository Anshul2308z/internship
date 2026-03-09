import  Main  from "../ui/Main";


const AdminUI = () => {
  return (
    <div>AdminUI</div>
  )
}

export default AdminUI

const page = () => {
  return (
    <>
    <Main children={<AdminUI/>}/>
    </>
  )
}

