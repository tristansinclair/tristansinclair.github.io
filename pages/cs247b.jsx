import { useEffect, useState } from "react";
import { supabase } from "../lib/initSupabase";
import { v4 as uuidv4 } from "uuid";
import { Field, Form, Formik } from "formik";
import { useSession } from "@supabase/auth-helpers-react";
import { toast } from "react-toastify";

import Image from "next/image";

export default function CS247b() {
  const session = useSession();

  return <>{!session ? <SignIn /> : <Account session={session} />}</>;
}

function SignIn() {
  async function magicLinkLogin(values) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: values.email,
      options: {
        emailRedirectTo: "https://tristansinclair.github.io/cs247b",
      },
    });

    if (error) {
      toast.error("Issue sending magic link, try again. " + error);
      console.log(error);
    } else {
      toast.success("You should receive an email to login shortly!");
    }
  }

  return (
    <div className="mx-auto max-w-xl py-16 px-6 text-center lg:px-8">
      <h1 className="mt-12 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        CS 247b Study
      </h1>
      <h3 className="mt-2 text-xl text-zinc-700 dark:text-zinc-300">
        Welcome to our study! Enter your email and you'll receive a single sign
        on link!
      </h3>

      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async (values) => {
          magicLinkLogin(values);
        }}
      >
        <Form>
          <div className="mt-6 sm:flex">
            <div className="min-w-0 flex-1">
              <Field
                required
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="block w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-4 py-3 shadow-md  shadow-zinc-800/5 transition placeholder:text-zinc-400 focus:border-tldr-green-500 focus:outline-none focus:ring-4 focus:ring-tldr-green-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-tldr-green-400 dark:focus:ring-tldr-green-400/10 sm:text-sm"
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full rounded-md bg-tldr-green-500 py-3 px-4 font-medium text-white shadow hover:bg-tldr-green-600 focus:outline-none focus:ring-2 focus:ring-tldr-green-300 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Sign in
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

function today() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  return today;
}

function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [checkIn, setCheckIn] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    getTodaysLocation();
    fetchCheckIns();
  }, [session]);

  async function getTodaysLocation() {
    try {
      setLoading(true);

      let { data, error } = await supabase
        .from("cs247b_research2")
        .select()
        .eq("date", today())
        .single();
      if (data) {
        setImage(data.image);
        setName(data.name);
        setDescription(data.description);
        setLocation(data.location);
      }
    } catch (error) {
      toast.error("Issue fetching today's location. Try refreshing!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function uploadImage() {
    const { data, error } = await supabase.storage
      .from("cs247b")
      .upload(
        today() +
          "/" +
          session.user.email +
          file.name.slice(file.name.lastIndexOf(".")),
        file
      );

    if (data) {
      fetchCheckIns();
      setCheckIn(true);
    } else {
      console.log(error);
      toast.error(error.message);
    }
  }

  async function fetchCheckIns() {
    try {
      setLoading(true);

      const { data, error } = await supabase.storage
        .from("cs247b")
        .list(today(), {
          limit: 20,
          offset: 0,
          sortBy: { column: "created_at", order: "desc" },
        });
      setImages(data);
    } catch (error) {
      toast.error("Issue fetching today's location. Try refreshing!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
      <h1 className="text-center text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {"Welcome to the CS 247b Study " + session.user.email + "!"}
      </h1>
      <div className="mb-12  mt-2 text-zinc-700 dark:text-zinc-500">
        <p className="text-base">
          {
            "Join us on a daily adventure on Stanford's campus! As a participant in our study, we encourage you to take a break from your daily routine and spend some time at a new location each day. Relax, have fun, and snap a photo to share with other participants and let us know you checked in. Let's discover the beauty of the campus together!"
          }
        </p>
      </div>
      <div className="grid gap-8 align-middle md:grid-cols-2 md:gap-16 ">
        <div className="relative min-h-[20rem] w-auto max-w-none overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5">
          {!loading && (
            <Image
              className="object-cover"
              src={image}
              alt="Today's Image"
              fill
            />
          )}
        </div>

        <div className="place-self-center">
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Today's Location:{" "}
            <a
              className="text-pa-green underline dark:text-pa-green-300"
              href={location}
            >
              {name}
            </a>
          </h2>
          <div className="mt-6 space-y-6 text-zinc-700 dark:text-zinc-500">
            <p className="text-lg">{description}</p>
          </div>
          <div className="flex flex-col  text-center text-white">
            <label
              className="mt-2 cursor-pointer rounded-md bg-pa-green px-3 py-2"
              onClick={(event) => {
                if (checkIn) {
                  event.preventDefault();
                  return;
                }
                if (file) {
                  event.preventDefault();
                  uploadImage();
                  return;
                }
              }}
            >
              {checkIn ? (
                <span>{"Success!"}</span>
              ) : (
                <span>{!file ? "Check in" : "Submit"}</span>
              )}

              <input
                htmlFor="file"
                className="sr-only"
                id="file-upload"
                name="file"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => {
                  if (event.target.files) {
                    setFile(event.target.files[0]);
                    console.log(event.target.files);
                  }
                }}
              />
            </label>
            <span className="mt-2">{file?.name}</span>
          </div>
        </div>
      </div>
      <h2 className="mt-12 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        Image Gallery
      </h2>
      {images ? (
        <ImageGallery images={images} />
      ) : (
        <div className="flex h-20 flex-col justify-center text-center text-zinc-600 dark:text-zinc-400">
          No Images Yet. Be the first!
        </div>
      )}

      <div className="mt-2 flex w-full flex-col justify-center">
        <button
          className="rounded-md bg-pa-green px-3 py-2 text-white"
          onClick={() => {
            supabase.auth.signOut();
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

function ImageGallery(images) {
  const CDN =
    "https://waoitkfdrdzcsldypgzg.supabase.co/storage/v1/object/public/cs247b/";
  return (
    <ul
      role="list"
      className="mt-8 grid gap-x-4 gap-y-8 md:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {images.images.map((file) => (
        <li key={CDN + today() + "/" + file.name} className="relative">
          <div className="group relative h-[30rem] h-80 w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Image
              src={CDN + today() + "/" + file.name}
              alt=""
              className="object-cover"
              fill
            />
          </div>
          <p className="mt-2 block truncate text-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {file.name.substring(0, file.name.lastIndexOf("."))}
          </p>
          <p className="text-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {new Date(file.created_at).toLocaleTimeString()}
          </p>
        </li>
      ))}
    </ul>
  );
}
