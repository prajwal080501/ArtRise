import { useState } from "react";
import { ArrowRight } from "lucide-react";
import AuthImage from "../components/AuthImage";
import Input from "../components/Input";
import toast from "react-hot-toast";

const Auth = () => {
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleMode = () => {
    setMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  };

  async function handleSubmit() {
    const apiUrl = "http://localhost:8000/api/auth";
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      let endpoint = "";
      let requestBody = {};

      if (mode === "login") {
        endpoint = "/login";
        requestBody = { email, password };
        toast.success("Logged in successfully!");
      } else {
        endpoint = "/signup";
        requestBody = { username, email, password };
        toast.success("Signed up successfully!");
      }

      const response = await fetch(apiUrl + endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error(`HTTP Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  const buttonText = mode === "login" ? "Login" : "Sign Up";

  return (
    <section className="h-screen w-screen bg-gray-100 py-5 overflow-y-auto absolute top-0 bg-no-repeat object-cover flex items-center justify-center">
      <div className="w-fit h-[85%] absolute top-[10%] flex p-5 space-x-5 justify-around bg-white rounded-lg">
        <AuthImage />
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              {mode === "login" ? "Login" : "Sign Up"}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {mode !== "login" ? (
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={handleMode}
                    className="text-sm font-semibold text-black hover:underline hover:text-blue-500 duration-200 ease-linear"
                  >
                    {" "}
                    Login{" "}
                  </button>
                </p>
              ) : (
                <p>
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={handleMode}
                    className="text-sm font-semibold text-black hover:underline hover:text-blue-500 duration-200"
                  >
                    {" "}
                    Sign Up{" "}
                  </button>
                </p>
              )}
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                {mode === "signup" && (
                  <div>
                    <Input
                      placeholder="Username"
                      label="Username"
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                )}
                <div>
                  <Input
                    placeholder="Email"
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Password"
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    {buttonText} <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover-bg-gray-100 hover-text-black focus-bg-gray-100 focus-text-black focus-outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-[#2563EB]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </span>
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
