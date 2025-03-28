
import { setHost } from '@/store/features/accommodation/slices/hostChatSlice';
import { Host } from '@/store/features/accommodation/types/hotelTypes';
import { HostDetails, MyBooking } from '@/store/features/accommodation/types/myBookingTypes';
import { useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import React from 'react'

const NeedHelp = ({item, styleName}:{item:Host,styleName?:string}) => {
     const dispatch = useAppDispatch();
      const router = useRouter();
      
 const handleNeedHelp=(hostData:HostDetails)=>{
     dispatch(setHost(hostData))
     router.push(`/home/accommodation/needHelp/${hostData.id}`)
 }
      
  return (
    <div 
    onClick={()=>handleNeedHelp(item)}
    style={{cursor:"pointer"}}
    className={styleName||""}
    >
    <span className="list-icons">
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.625 22.3194C8.345 22.3194 8.05498 22.2494 7.79498 22.1094C7.22498 21.8094 6.875 21.2094 6.875 20.5694V19.1495C3.855 18.8395 1.875 16.6194 1.875 13.4394V7.43945C1.875 3.99945 4.185 1.68945 7.625 1.68945H17.625C21.065 1.68945 23.375 3.99945 23.375 7.43945V13.4394C23.375 16.8794 21.065 19.1894 17.625 19.1894H13.855L9.59497 22.0295C9.30497 22.2195 8.965 22.3194 8.625 22.3194ZM7.625 3.17944C5.045 3.17944 3.375 4.84944 3.375 7.42944V13.4295C3.375 16.0095 5.045 17.6795 7.625 17.6795C8.035 17.6795 8.375 18.0195 8.375 18.4295V20.5595C8.375 20.6895 8.455 20.7495 8.505 20.7795C8.55501 20.8095 8.65501 20.8395 8.76501 20.7695L13.215 17.8095C13.335 17.7295 13.485 17.6795 13.635 17.6795H17.635C20.215 17.6795 21.885 16.0095 21.885 13.4295V7.42944C21.885 4.84944 20.215 3.17944 17.635 3.17944H7.625Z"
          fill="#262626"
        />
        <path
          d="M12.6248 12.1104C12.2148 12.1104 11.8748 11.7704 11.8748 11.3604V11.1504C11.8748 9.99039 12.7248 9.42038 13.0448 9.20038C13.4148 8.95038 13.5348 8.78039 13.5348 8.52039C13.5348 8.02039 13.1248 7.61035 12.6248 7.61035C12.1248 7.61035 11.7148 8.02039 11.7148 8.52039C11.7148 8.93039 11.3748 9.27039 10.9648 9.27039C10.5548 9.27039 10.2148 8.93039 10.2148 8.52039C10.2148 7.19039 11.2948 6.11035 12.6248 6.11035C13.9548 6.11035 15.0348 7.19039 15.0348 8.52039C15.0348 9.66039 14.1948 10.2304 13.8848 10.4404C13.4948 10.7004 13.3748 10.8704 13.3748 11.1504V11.3604C13.3748 11.7804 13.0348 12.1104 12.6248 12.1104Z"
          fill="#262626"
        />
        <path
          d="M12.625 14.5996C12.205 14.5996 11.875 14.2596 11.875 13.8496C11.875 13.4396 12.215 13.0996 12.625 13.0996C13.035 13.0996 13.375 13.4396 13.375 13.8496C13.375 14.2596 13.045 14.5996 12.625 14.5996Z"
          fill="#262626"
        />
      </svg>
    </span>
    <span className="list-text">Need help</span>
  </div>
  )
}

export default NeedHelp