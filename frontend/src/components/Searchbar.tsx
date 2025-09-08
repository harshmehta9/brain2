import { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";

function Searchbar() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isFocused, setIsFocused] = useState(true);
  const buttonRef = useRef(null);

  function handleSubmit(e){
    e.preventDefault();

    //API call here
    
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent){
      if(buttonRef.current && !buttonRef.current.contains(event.target as Node) && !isFocused){
        console.log("Clicked outside", event);
        setIsFocused(prev => !prev)
      }
    }

    function handleKeyDown(event){
      if(event.key == 'Escape'){
        setIsFocused(prev => !prev);
      }
      
    }
   
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
      
  }, [isFocused])

  function handleOnClick() {
    setIsFocused(prev => !prev);
  }

  return (
    <div  className={`w-full   flex justify-center items-center gap-10  transform transition-all duration-300 ${isFocused ? "h-50" : "h-100"}`}>
      {
        isFocused ? 
        <div className="flex gap-10">
          <input placeholder="Take a note..." className="w-[586px] border-1 rounded-[12px] p-3" onClick={handleOnClick} />
          <button className="border-1 p-4 rounded-[12px] relative z-10 transition-colors duration-300 hover:text-white hover:bg-black cursor-pointer"><LuSearch/></button>
        </div>
        :
        <form ref={buttonRef} className="flex gap-5 p-4 m-9 " onSubmit={handleSubmit}>
          {/* Submit Note  */}
          <div className="flex flex-col gap-10 gap-5">
          <input
          onChange={e => setTitle(e.target.value)}
           value={title}
           name="title" 
           placeholder="Title.." 
           className="w-[586px] border-1 rounded-[12px] p-3 " />

          <input
          onChange={e => setNote(e.target.value)} 
          value={note}
          name="note" 
          placeholder="Note.." 
          className="w-[586px] border-1 rounded-[12px] p-3 " />

          <input
          onChange={e => setLink(e.target.value)} 
          value={link}
          name="link" 
          placeholder="link" 
          className="w-[586px] border-1 rounded-[12px] p-3 " />
          </div>

          {
            isLoading ?
          <div>
            <div className="border-1 p-4 rounded-[12px] relative z-10 transition-colors duration-300 hover:text-white hover:bg-black cursor-pointer animate-pulse animate-[pulse_1s_ease-in-out_infinite]">Saving..</div>
          </div>
          :
          <div>
           <button type="submit" className="border-1 p-4 rounded-[12px] relative z-10 transition-colors duration-300 hover:text-white hover:bg-black cursor-pointer">Save</button>
          </div> 
          }
          
        </form>
      
      }

    </div>
  )
  

}


export default Searchbar;