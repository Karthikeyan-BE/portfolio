import { AiOutlineInstagram,AiOutlineFacebook ,AiOutlineGithub,AiOutlineLinkedin , AiOutlineMail} from "react-icons/ai";

const Contacts = () => {
  return (
    <section className='flex flex-col bg-gray-800 h-screen text-white justify-center  items-center' id="contact" >
        <div>
            <h1 className='text-3xl  font-bold border-b-4 w-[150px]'>Contact</h1>
            <p className='py-2'>
                Feel Free to Connect With Me ! 
            </p>
                <div>
                    <p>Ping Me ! ...</p>
                    <div className="py-2 animate-pulse">
                        <AiOutlineMail size={30}  className="inline "/> karthikeyanfsd@gmail.com
                    </div>
                </div>
                <div className='flex py-5'>
                   <a href="#" className='pr-5 hover:text-rose-400'><AiOutlineInstagram size={40}/></a>
                   <a href="#" className='pr-5 hover:text-blue-400'><AiOutlineFacebook size={40}/></a>
                   <a href="#" className='pr-5 hover:text-black'><AiOutlineGithub size={40}/></a>
                   <a href="#" className='hover:text-blue-800'><AiOutlineLinkedin size={40}/></a>
                </div>
            </div>
    </section>
  )
}

export default Contacts;