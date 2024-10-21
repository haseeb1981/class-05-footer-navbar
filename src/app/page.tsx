import Image from "next/image";
import Navbar from "./component/navbar";
{/* first row of cards*/}

export default function Home() {
  return (

    <main>
      <div className="flex w-full justify-centre mt-20 space-x-4 px-10">
        <div className="bg-red-600  h-60 w-4/12"></div>
        <div className="bg-blue-600 h-60 w-4/12"></div>
        <div className="bg-green-600 h-60 w-4/12"></div>
      </div>


      {/* 2nd row of cards*/}


       <div className="flex w-full justify-centre mt-6  space-x-4 px-10">
       <div className="bg-yellow-600 h-60 w-6/12 "></div>
       <div className="bg-orange-500 h-60 w-6/12 "></div>

       </div>

    </main>
    







    
  );
}
