import { dummyContentData } from "../dummyData"
import { CiShare1 } from "react-icons/ci";

import { IoClipboardOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";





interface INoteCard {
  link: string,
  photourl: string, 
  title: string, 
  note: string,
  tages:string[],
  userId: string,
  createdAt: string
}

type dataType = INoteCard[];


function NoteDisplay({ data }: { data: dataType }) {

  return (
    //data container 
    <div className="w-full flex justify-between">
      {
        data.map((note) => {
          return(
            <div className="w-60 bg-[#F8C9BE] h-fit p-2 pb-7 rounded-[30px] flex flex-col gap-4">
              {/* note Content  */}
              <div className="bg-white rounded-[30px] px-10 flex flex-col gap-4 py-5">
              <h1 className="text-xl">{note.title}</h1>
              <p className="text-gray-500 text-sm">{note.note}</p>
              {/* link div */}
              <hr></hr>
              <div className="flex gap-2 items-center justify-center">
              <CiShare1 size={15} className="shrink-0 flex "/>
              <a href={note.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 wrap-anywhere transition-colors hover:underline hover:text-blue-500">{note.link}</a>
              </div>
              </div>
 
              {/* Options  */}
              <div className="flex justify-between px-10">
              <IoClipboardOutline/>
              <IoShareSocial/>
              </div>
            </div>
          )
        })
        
      }
    </div>
  )
}

export default NoteDisplay;