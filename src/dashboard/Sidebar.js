import { FaHome } from 'react-icons/fa';
import { CgTranscript } from 'react-icons/cg';

import { BiBrain } from 'react-icons/bi';

const Sidebar = (curWindow) => {
    console.log(curWindow);

    return (
        <nav className="z-50 fixed top-16 left-0 h-screen w-16 bg-white shadow-xl">
            <div className="">
                <SidebarIcon icon={<FaHome size="28" />} text="Home" selected={true}
                />
                <Divider />
                <SidebarIcon icon={<CgTranscript size="32" />} text="Progress"
                />
                <SidebarIcon icon={<BiBrain size="32" />} text="WAYS"
                />
                <Divider />
            </div>
        </nav>
    );
};

const SidebarIcon = ({ icon, text = 'Popup!', selected = false }) => (
    <button className="group relative flex items-center justify-center 
    h-12 w-12 mt-2 mb-2 mx-auto  
  bg-gray-300 hover:bg-green-400
  text-gray-900 hover:text-green-800
    hover:rounded-xl rounded-3xl
    transition-all duration-300 ease-linear
    cursor-pointer shadow-lg
    focus:bg-green-400
    focus:text-green-800"
    >
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span >
    </button >
);


const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;