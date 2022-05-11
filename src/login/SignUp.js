import { useState } from "react";
import axios from 'axios';
import Background from "../generalComponents/Background";
import ClosingAlert from "../generalComponents/Alert";

export default function SignUp() {
    const [inputs, setInputs] = useState({});
    var isLoggedIn = false;
    var error = false;

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        if (inputs.password != inputs.passwordConfirmed) {
            console.log("Error, passswords do not match")
            return (

                <ClosingAlert />
            )
        }
        event.preventDefault();
        console.log(inputs)
        var output = {
            username: (inputs.firstName + inputs.lastName).toLowerCase(),
            email: inputs.email.toLowerCase(),
            password1: inputs.password,
            password2: inputs.passwordConfirmed
        }
        axios.request({ url: 'http://127.0.0.1:8000/dj-rest-auth/registration/', method: 'post', data: output })
            .then((response) => { console.log(response.data) })
            .catch(error => console.error(error));
    }

    return (
        <>
            <ClosingAlert />
            <main>

                <section className="absolute w-full h-full">
                    <div className="absolute top-0 w-full h-full">
                        <Background />
                    </div>
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-4/12 px-4 font-mono">
                                <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-200 border-gray-400 border-2">
                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-10">
                                        <div className="flex justify-center mb-2">
                                            <img className="h-12" src={require("../assets/salvis-logo.png")} />
                                            <h1 className="font-extrabold text-black-600 text-5xl"> SALVIS</h1>
                                        </div>
                                        <form>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={inputs.firstName || ""}
                                                    onChange={handleChange}
                                                    className="focus:ring-green-300 border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="First Name"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={inputs.lastName || ""}
                                                    onChange={handleChange}
                                                    className="focus:ring-green-300 border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="First Name"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={inputs.email || ""}
                                                    onChange={handleChange}
                                                    className="focus:ring-green-300 border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="sunet@stanford.edu"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    value={inputs.password || ""}
                                                    onChange={handleChange}
                                                    className="focus:ring-green-300 border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Password"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Confirm Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="passwordConfirmed"
                                                    value={inputs.passwordConfirmed || ""}
                                                    onChange={handleChange}
                                                    className="focus:ring-green-300 border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Confirm Password"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>


                                            <div className="text-center">
                                                <button
                                                    className="w-full font-mono mt-4 bg-green-300 text-black-400 active:bg-green-400 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                    onClick={handleSubmit}
                                                >
                                                    Sign Up
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}