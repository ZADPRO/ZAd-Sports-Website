import { useState } from "react";
import decrypt from "../../helper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet";
const Login = () => {
  
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        isSignIn: boolean = false
    ) => {
        setErrorMessage("")
        const { name, value } = e.target;
        if (isSignIn) {
            if ((name == "username" && value.length <= 10) || (name == "password")) {
                setInputs((prev) => ({ ...prev, [name]: value }));
            }
        }
    };

    const handleLogIn = async () => {
        setLoading(true)
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_COMMERCIAL_URL}/usersignin`,
                inputs
            );

            const data = decrypt(
                response.data[1],
                response.data[0],
                import.meta.env.VITE_ENCRYPTION_KEY
            );
            console.log(data);
            if (data.status) {
                const userDetails = {
                    roleType: data.roleType,
                    token: "Bearer " + data.token,
                    userId: data.users[0].refUserId,
                    userCustId: data.users[0].refUserCustId,
                    firstName: data.users[0].refUserFname,
                    lastName: data.users[0].refUserLname,
                    phNumber: data.users[0].refUserMobileno,
                };

                localStorage.setItem("userDetails", JSON.stringify(userDetails));

                setInputs({
                    username: "",
                    password: "",
                });

                navigate("/dashboard")

                // console.log(data);
            } else {
                setErrorMessage("Invalid username or password");
            }
        } catch (error) {
            console.error("Error during Sign In:", error);
            setErrorMessage("An error occurred. Please try again.");
        };

        setLoading(false);
    };

    return (
        <>
                <Helmet>
     <title>ZadSports – Book Grounds, Register & Play Matches Easily
</title>
      <meta name="description" content="Book sports grounds instantly, register teams, and play competitive matches with ZadSports. Simplified booking, seamless registration, and thrilling sports action - all in one place." />
       <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zadsports.com" />
      <meta
  name="keywords"
  content="box cricket ground size, resort with cricket ground, badminton tournament near me, cricket ground booking, cricket ground booking in hyderabad, cnr cricket ground 2, cricket ground for rent, turf cricket ground near me, box cricket turf, basketball ground near me, vdr cricket ground, turf cricket near me, turf box cricket, cricket net practice near me, mrr cricket ground, vscg cricket ground, basketball courts near me, striker sports indoor academy, indoor cricket nets near me, badminton hall, cricket bowling machine near me, book cricket ground near me, hsr layout cricket ground, snr college cricket ground coimbatore, new madies cricket ground, cooperage ground, cricket nets near me, table tennis club near me, cricket ground booking near me, box cricket, cricket turf near me, badminton court booking, indoor cricket near me, box cricket near me, ground booking app, scf cricket ground salem, turf near me for cricket, pool table near me, table tennis court near me, flying feathers badminton academy, cricket ground near me, synthetic ground near me, turf near me, cricket near me, badminton turf near me, salem cricket ground, ayr cricket ground, football turf near me, tennis courts near me, pickleball court, turf football ground near me, football ground in india, football ground near me, cricket tournament maker, cricket team names for local tournament"
/>

    </Helmet>
        <div className="w-[100%] flex justify-around items-center py-10">
            <div className="w-[90%] lg:w-[40%] border shadow-md rounded flex justify-center items-center flex-col">
                <form className="w-[100%] flex justify-center items-center flex-col" onSubmit={(e: any) => {
                    e.preventDefault();
                    handleLogIn()
                }}>
                    <h1 className="text-[#333] font-bold text-[2rem] py-4">Sign In</h1>
                    <div className="relative my-3 w-[70%]">
                        <input
                            id="username"
                            type="number"
                            name="username"
                            placeholder="Your Mobile Number"
                            required
                            value={inputs.username}
                            className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white focus:border-[#0f3b36] focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            onChange={(e) => handleInputChange(e, true)}
                        />
                        <label
                            htmlFor="username"
                            className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-[#0f3b36] peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Your Mobile Number
                        </label>
                    </div>

                    <div className="relative my-3 w-[70%]">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Your Mobile Number"
                            required
                            value={inputs.password}
                            className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white focus:border-[#0f3b36] focus:outline-none  focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            onChange={(e) => handleInputChange(e, true)}
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-[#0f3b36] peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Your Password
                        </label>
                    </div>

                    {errorMessage && <div className="pt-3 text-[red]">{errorMessage}</div>}{" "}

                    <button type={loading ? "button" : "submit"} className="inline-flex my-5 items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-[#07332f] hover:bg-[#07332f] focus:bg-[#07332f] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none cursor-pointer">
                        <span>{loading ? 'Loading' : 'Submit'}</span>
                    </button>
                </form>
            </div>
        </div></>
    )
}

export default Login