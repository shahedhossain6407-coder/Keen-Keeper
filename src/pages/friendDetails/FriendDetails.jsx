import { Navigate, useLoaderData, useParams } from 'react-router';
import { RiNotificationSnoozeLine, RiDeleteBin5Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { BsArchive } from "react-icons/bs";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { TimelineContext } from '../../contextData/ContextData';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const FriendDetails = () => {
   const [data,setData] = useContext(TimelineContext)
   
   const handlerOfCall = () => {
       setData([...data, { ...friend, type: 'Call' }]);
       toast.success("Call added to timeline!");
   }
   
   const handlerOfText = () => {
       setData([...data, { ...friend, type: 'Text' }]);
       toast.success("Text added to timeline!");
   }
   
   const handlerOfVedio = () => {
       setData([...data, { ...friend, type: 'Video' }]);
       toast.success("Vedio Call added to timeline!");
   }

    const { userId } = useParams();
    const friends = useLoaderData();
  
    const friend = friends.find(f => f.id == Number(userId));
  
    const { name, picture, status, bio, tags, days_since_contact,goal,next_due_date
    } = friend;

  

    return (
        <div>
            <div className='p-10 flex gap-10 container mx-auto '>
                <div className='details-container flex gap-8'>
                    <div className='details-left flex flex-col gap-5'>
                       
                        <div className='border border-gray-200 shadow-lg p-10 rounded-lg text-center flex flex-col items-center justify-center'>
                            <img className='rounded-full w-24 h-24 mb-4' src={picture} alt={name} />
                            
                            <h3 className='font-bold text-lg mb-2'>{name}</h3>

                            <div className='mb-2'>
                                <h3 className={`${
                                    status === 'overdue' ? 'bg-red-400' :
                                    status === 'almost due' ? 'bg-yellow-200' :
                                    status === 'on-track' ? 'bg-green-300' : ""
                                } px-4 py-1 rounded-xl font-semibold text-sm`}>
                                    {status}
                                </h3>
                            </div>

                            <div className='flex flex-wrap justify-center gap-2 mb-4'>
                                {tags.map((tag, index) => (
                                    <h3 key={index} className='bg-green-100 px-3 py-1 rounded-2xl text-xs'>
                                        {tag}
                                    </h3>
                                ))}
                            </div>
                            
                            <p className='text-sm text-gray-600 max-w-xs'>"{bio}"</p>
                        </div>

                 
                        <div className='level-details flex flex-col gap-3 '>
                            <h3 className='border border-gray-200 shadow-lg  p-3 flex items-center gap-2 justify-center cursor-pointer'>
                                <RiNotificationSnoozeLine /> Snooze 2 weeks
                            </h3>
                            <h3 className='border border-gray-200 shadow-lg p-3 flex items-center gap-2 justify-center cursor-pointer'>
                                <BsArchive /> Archive
                            </h3>
                            <h3 className='text-red-500 border border-gray-200 shadow-lg p-3 flex items-center gap-2 justify-center cursor-pointer'>
                                <RiDeleteBin5Line /> Delete
                            </h3>
                        </div>
                    </div>

                    
                    <div className='details-right space-y-10 '>
                        <div className='flex gap-10'>
                            <div className=' text-center border border-gray-200 shadow-lg rounded-xl p-10'>
                                <h1 className='font-bold text-3xl text-gray-500'>{days_since_contact}</h1>
                                <p className='text-xl text-gray-500'> Days Since Contact</p>
                            </div>
                            <div className=' text-center border border-gray-200 shadow-lg rounded-xl p-10'>
                                <h1 className='font-bold text-3xl text-gray-500'>{goal}</h1>
                                <p className='text-xl text-gray-500'>Goal (Days)</p>
                            </div>
                            <div className=' text-center border border-gray-200 shadow-lg rounded-xl p-10'>
                                <h1 className='font-bold text-3xl text-gray-500'>{next_due_date}</h1>
                                <p className='text-xl text-gray-500'> Next Due</p>
                            </div>
                          
                        </div>

                        <div className='border border-gray-200 shadow-lg rounded-xl p-6'>
                            <div className='flex justify-between item-center mb-2'>
                                <h3 className='text-xl font-bold text-gray-500'>Relationship Goal</h3>
                                <button className='btn px-6 '>Edit</button>
                            </div>
                            <p className='text-gray-500 text-xl'>Connect every <span className='text-2xl font-bold text-black' >{goal} days</span></p>
                        </div>

                        <h3 className='font-bold text-xl text-gray-500'>Quick Check-In</h3>
                        <div className='grid grid-cols-3 gap-10'>
                            <div onClick={handlerOfCall} className='bg-gray-100 rounded-xl flex flex-col items-center p-5 gap-3'>
                            <FiPhoneCall className='size-8' />
                            <p className='text-xl  text-gray-500'>Call</p>
                            </div>
                            <div onClick={handlerOfVedio} className='bg-gray-100 rounded-xl flex flex-col items-center p-5 gap-3'>
                            <MdOutlineTextsms className='size-8' />
                            <p className='text-xl  text-gray-500'>Text</p>
                            </div>
                            <div onClick={handlerOfText} className='bg-gray-100 rounded-xl flex flex-col items-center p-5 gap-3'>
                            <CiVideoOn className='size-8'  />
                            <p className='text-xl  text-gray-500'>Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;