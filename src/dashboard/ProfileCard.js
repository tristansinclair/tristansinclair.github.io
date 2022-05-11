export default function ProfileCard() {
    return (
        <div className="w-full md:w-1/3 xl:w-1/5 px-4 ">
            <div className="relative flex flex-col min-w-128 break-words bg-white mb-6 shadow-lg border border-gray-400 rounded-lg hover:shadow-lg hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                <div className="h-72 items-center text-center px-4">
                    <div className="flex items-center">
                        <div className="flex flex-wrap">
                            <div className=" w-1/5">
                                <img src={require("../assets/profile.jpeg")} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                            </div>

                            <div className="text-xl font-semibold">
                                Tristan Sinclair
                            </div>
                            <div>
                                Computer Science: Artificial Intelligence
                            </div>
                        </div>

                        <div className="">
                            <div className="text-left">
                                Overall Progress
                            </div>
                            <div className="relative pt-1">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                                    <div style={{ width: "89%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}