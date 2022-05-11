import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import UnitPieChart from "./UnitPieChart";
import CourseBarGraph from "./QuarterlyUnitsLineGraph";
import ProfileCard from "./ProfileCard";
import CourseCard from "./CourseCard";
import { navigate } from "hookrouter";

const testUser = require('../testJsonFiles/testUser.json');

export default function Dashboard() {

    const [curWindow, setCurWindow] = useState(1);

    return (
        <>
            <Navbar />
            <Sidebar curWindow={curWindow} />
            {curWindow == 0 ? <HomeWindow /> : <ProgressWindow />}
        </>
    );
}

function ProgressWindow() {

    function stoplightColor(keyword) {

        var color = "text-gray-800 bg-gray-300";

        switch (keyword) {
            case "Enrolled":
                color = "text-yellow-800 bg-yellow-200 ";
                break;
            case "Taken":
                color = "text-green-800 bg-green-200 ";
                break;
            default:
                color = "text-green-800 bg-green-200 ";
                break;
        }
        console.log("Color: " + color)
        return color;
    }
    return (
        < div className="relative ml-16 mt-16 p-4" >
            <div className="rounded-lg border border-gray-200 w-1/4">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden rounded-lg">
                                <div className="py-3 px-4 text-center text-lg font-semibold">
                                    CS Core Requirements
                                </div>
                                <div className="relative pt-1">
                                    <div className="overflow-hidden h-[1px] flex bg-gray-200">
                                    </div>
                                </div>

                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Course
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Status
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Units
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-t transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                CS 107 or 107E
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <span className={stoplightColor("Taken") + "inline-block rounded-full font-mono px-2 py-1 text-xs"}>{"Taken"}</span>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                5
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-t transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                CS 110 or 111
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <span className={stoplightColor("Taken") + "inline-block rounded-full font-mono px-2 py-1 text-xs"}>{"Taken"}</span>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                5
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-t transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                CS 161
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <span className={stoplightColor("Taken") + "inline-block rounded-full font-mono px-2 py-1 text-xs"}>{"Taken"}</span>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                5
                                            </td>
                                        </tr>
                                        <tr className="bg-green-200 border-t">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                Total
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Completed
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                15
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

function HomeWindow() {
    return (
        <div className="relative ml-16 mt-16">
            <div className="h-full w-full bg-red-200 pt-4">
                <div className="flex flex-wrap">
                    <ProfileCard />
                    <UnitPieChart />
                    <CourseBarGraph />
                </div>
            </div>
        </div>)
}


function Navbar() {
    const handleBackToLanding = (event) => {
        console.log("Going back to Landing Page!");
        navigate("/");
    }
    return (
        <nav className="fixed top-0 left-0 h-16 z-50 w-screen bg-seagreen-500">
            <div className="flex h-16 w-screen items-center px-6">
                <button className="flex" type="button"
                    onClick={handleBackToLanding}>
                    <img className="h-10 mr-1" alt="" src={require("../assets/salvis-logo.png")} />
                    <h1 className="font-extrabold font-mono text-3xl"> SALVIS</h1>
                </button>
            </div>

            {/* <button className="flex justify-between border items-center border-white text-lg text-white pr-3  rounded-full outline-none" type="button">
                <div className="w-10 h-10 overflow-hidden rounded-full mr-2 shadow  max-w-full align-middle border-none">
                    <img alt="" src={require("../assets/profile.jpeg")} className="object-fill" />
                </div>
                Tristan
            </button> */}
        </nav>
    );
}