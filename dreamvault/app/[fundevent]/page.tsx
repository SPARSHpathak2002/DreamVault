'use client'

import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import data from './../../temp/Feed.json';
export default function Page() {
    const router = useRouter()
    const companyid = useSearchParams().get('id')
    let description = '';
    let fundRaised = 0;
    let people = 0;
    let deadline = '';
    data.feed.forEach(item => {
        if (item.companyName === companyid) {
            description = item.companyDescription;
            fundRaised = item.fundRaisedTillNow
            people = item.totalPeopleInvested
            deadline = item.deadline
        }
    });

    return (
        <div className='text-purple-600 mt-10'>
            <div className="bg-white   shadow-md p-8 mt-5 rounded-sm transform hover:translate-y-2 transition duration-300 ease-in-out">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                {companyid}
                            </h2>

                            <p className="mt-4 text-lg text-gray-500 text-justify ">
                                {description}<br/>
                                <button
                    className="mt-5 px-8 text-lg h-10 font-light text-white bg-[#732fff] rounded-full text-right hover:border-2 hover:border-[#732fff] hover:bg-white hover:text-[#732fff]"
                    
                  >Invest</button>
                            </p>
                        </div>
                        <div className="mt-10 lg:mt-0 ml-10">
                            <img
                                className="m-h-70 object-fit mix-blend-multiply max-w-70  mx-auto lg:mx-0 rounded-lg"
                                src="/home.svg"
                                alt="About Us"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mt-10 max-w-7xl ">
                        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">

                            <div className="text-center space-y-2">
                                <div className="space-y-0.5">
                                    <div className="flex">
                                        <div className="ml-3 text-lg text-black font-semibold text-center">
                                            Fund Raised Till Now
                                        </div>
                                    </div><br />
                                    <p className="text-slate-500 font-medium text-justify ">
                                    {companyid} has raised an amount of     
                                    </p>
                                    <p className="text-slate-500 font-medium text-center ">
                                    {fundRaised}    
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">

                            <div className="text-center space-y-2 ">
                                <div className="space-y-0.5">
                                    <div className="flex">
                                        
                                        <div className="ml-3 text-lg text-black font-semibold text-center">
                                            Number of People Invested
                                        </div>
                                    </div><br />
                                    <p className="text-slate-500 font-medium text-center ">
                                    {people}    
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">

                            <div className="text-center space-y-2 ">
                                <div className="space-y-0.5">
                                    <div className="flex">
                                        

                                        <div className="ml-3 text-lg text-black font-semibold">
                                            Event Deadline
                                        </div>
                                    </div><br />
                                    <p className="text-slate-500 font-medium text-center ">
                                    {deadline}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>


            </div>
        </div>
    )
}