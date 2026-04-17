import { useContext, useState } from "react";
import { TimelineContext } from "../../contextData/ContextData";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

const TimeLine = () => {
  const [data] = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filteredData = filter === "All" ? data : data.filter(d => d.type === filter);

  return (
    <div className="container mx-auto">
      <div className="items-center my-6">
        <h3 className="font-bold text-3xl">Timeline</h3>
    
        <div className="my-5 " >
          <select 
            
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className=" pr-20 bg-white border border-gray-300 text-gray-700 py-2 px-4  rounded-lg shadow-sm cursor-pointer "
          >
            <option value="All">Filter Timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current text-gray-500" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
          </div>
        </div>
      </div>

      
      {filteredData.map((d, index) => (
        <div key={index} className="flex gap-3 items-center my-3 border border-gray-200 rounded-xl shadow-lg p-3">
          <div>
            {d.type === 'Call' && <BiSolidPhoneCall className="size-8 text-green-500" />}
            {d.type === 'Text' && <MdOutlineTextsms className="size-8 text-yellow-500" />}
            {d.type === 'Video' && <CiVideoOn className="size-8" />}
          </div>
          <div>
            <h3>
              <span className="font-semibold text-xl">
                {d.type === 'Call' && 'Call'}
                {d.type === 'Text' && 'Text'}
                {d.type === 'Video' && 'Video Call'}
              </span>{" "}
              with {d.name}
            </h3>
            <small className="text-gray-500">{new Date().toLocaleDateString()}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;