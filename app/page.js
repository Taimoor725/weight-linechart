// app/page.jsx

import WeightChart from "@/components/WeightChart";

export default function Home() {
  return (
    <div className="flex h-screen w-screen lg:p-0 p-2 justify-center items-center bg-black">
      
        <WeightChart/>
    </div>
  );
}
