import Sidebar
from "../components/Sidebar";

export default function Dashboard(){

 return(

 <div className="flex">

  <Sidebar/>

  <main className="
   flex-1
   p-8
  ">

   <h1 className="
    text-3xl
    font-bold
    mb-6
   ">
    Dashboard
   </h1>

   <div className="
    grid
    grid-cols-3
    gap-5
   ">

    <div className="
     bg-white
     shadow
     rounded-xl
     p-5
    ">
      Total Scans
      <h2 className="text-4xl">
       42
      </h2>
    </div>

    <div className="
     bg-white
     shadow
     rounded-xl
     p-5
    ">
      Vulnerabilities
      <h2 className="text-4xl">
       18
      </h2>
    </div>

    <div className="
     bg-white
     shadow
     rounded-xl
     p-5
    ">
      Security Score
      <h2 className="text-4xl">
       88
      </h2>
    </div>

   </div>

  </main>

 </div>
 );
}
