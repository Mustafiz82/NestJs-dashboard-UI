import { SiGooglegemini } from "react-icons/si";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";

const BankingNav = () => {
    return ( <>        <div className="flex ">
            <div className="flex-1">
                <h1 className="text-3xl  font-semibold">Banking</h1>
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex border-2 border-black/30 rounded-xl p-4 shadow-xl items-center gap-5 ">
                    <SiGooglegemini className="text-xl" />
                    <h1 className="text-xl font-semibold">AI Categorisation</h1>
                    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border bg-black/10 ">
                        <input type="checkbox" className=" shadow-2xl  scale-110 peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                        <div className="absolute  inset-0 z-10 w-0 shadow-xl rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-sky-200"></div>
                        <div className="z-20 size-4 rounded-full bg-[#fff] shadow-xl duration-200 peer-checked/toggle:translate-x-6"></div>
                    </label>
                </div>
                <IoMdNotificationsOutline className="text-4xl ml-6" />
                <div className="w-[50px] h-[50px]">
                    <Image
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        alt="avatar "
                        quality={80} // Optional: to adjust image quality
                    />
                </div>
            </div>


        </div>
            
            </>
 );
};

export default BankingNav;