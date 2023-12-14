import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineCampaign, MdOutlinePets } from 'react-icons/md';
import { BiDonateHeart } from 'react-icons/bi';
import { FaDonate, FaHome } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { FaCodePullRequest } from 'react-icons/fa6';
import { TbBrandCampaignmonitor } from 'react-icons/tb';
import useAdmin from "../../Hooks/useAdmin";
const Dashboard = () => {
  const [isAdmin] = useAdmin()
    return (
      <div className="flex">
        {/* dashboard sidebar */}
        <div className="w-80 min-h-screen bg-[#0D9488] text-white">
        <ul className="menu p-3 gap-2 text-lg">
                    {
                        isAdmin ? <>
                        <li>
                        <NavLink to={`/dashboard/users`}>
                            <HiOutlineUserGroup></HiOutlineUserGroup> Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/dashboard/allpets`}>
                            <MdOutlinePets></MdOutlinePets> All Pets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/dashboard/alldonation`}>
                            <BiDonateHeart></BiDonateHeart> All Donation
                        </NavLink>
                    </li>
                    {/* shared navlink */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to={`/`}>
                            <FaHome></FaHome>Home
                        </NavLink>
                    </li>
                        </>
                        :
                        <>
                    <li>
                        <NavLink to={`/dashboard/addpet`}>
                        <IoIosAddCircle></IoIosAddCircle> Add Pet
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/dashboard/myaddedpet`}>
                        <MdOutlinePets></MdOutlinePets> My Added Pet
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/dashboard/adoptionreq`}>
                            <FaCodePullRequest></FaCodePullRequest>adoption Request
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/dashboard/campaign`}>
                            <TbBrandCampaignmonitor></TbBrandCampaignmonitor> Create Donation Campaign
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/dashboard/mycampaign`}>
                            <MdOutlineCampaign></MdOutlineCampaign> My Donation Campaign
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/dashboard/donationcard`}>
                            <FaDonate></FaDonate> My Donation
                        </NavLink>
                    </li>
                    {/* shared navlink */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to={`/`}>
                            <FaHome></FaHome>Home
                        </NavLink>
                    </li>
                        </>
                    }
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1  ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;