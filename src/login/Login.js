import React, { useState } from "react";
import { navigate } from "hookrouter";
import axios from "axios";
import Background from "../generalComponents/Background.js";

// import token from "../index.js";

export default function Login() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        var output = {
            "username": inputs.username.toLowerCase(),
            "password": inputs.password
        }

        axios.request({ url: 'http://127.0.0.1:8000/dj-rest-auth/login/', method: 'post', data: output })
            .then((response) => {
                console.log(response.data.key);
                // token = response.data.key;
                navigate('/app');
                // token = response.data.key;
                // console.log(token);
            })
            .catch(error => {
                console.error(error.response);
                // var errorWritten = error.response.data.non_field_errors[0];
                // console.error(errorWritten);
            }); // .data.non_field_errors[0]


    }
    return (
        <>
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
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    value={inputs.username || ""}
                                                    onChange={handleChange}
                                                    className="focus:ring-green-300 border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Username"
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
                                            <div>
                                                <label className="inline-flex items-center cursor-pointer">
                                                    <input
                                                        id="customCheckLogin"
                                                        type="checkbox"
                                                        className="focus:ring-green-300 form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                                        style={{ transition: "all .15s ease" }}
                                                    />
                                                    <span className="ml-2 text-sm font-semibold text-gray-700">
                                                        Remember me
                                                    </span>
                                                </label>
                                            </div>

                                            <div className="text-center">
                                                <button
                                                    className="w-full font-mono mt-4 bg-green-300 text-black-400 active:bg-green-400 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                    onClick={handleSubmit}
                                                >
                                                    Sign In
                                                </button>
                                            </div>
                                        </form>
                                        <div className="flex flex-wrap mt-8 ">
                                            <div className="w-1/2">
                                                <a
                                                    onClick={e => e.preventDefault()}
                                                    className="text-black"
                                                >
                                                    <small>Forgot password?</small>
                                                </a>
                                            </div>
                                            <div className="w-1/2 text-right">
                                                <a
                                                    href="/signup"
                                                    className="text-black"
                                                >
                                                    <small>Create new account</small>
                                                </a>
                                            </div>
                                        </div>
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