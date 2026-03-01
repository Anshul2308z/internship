import Image from "next/image";
import AuthButton from "./components/AuthButton";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <AuthButton/>
        </div>
        <Dashboard/>
    </>


  );
}
