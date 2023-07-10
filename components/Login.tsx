import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

function Login() {

  const { user, login } = useAuth()

    const [data, setData] = useState({
      email: '',
      password: '',
    })

    const handleLogin = async (e: any) => {
      e.preventDefault()
      console.log(user)
      try {
        await login(data.email, data.password)
      } catch (err) {
        console.log(err)
      }
    }

  return (
    <div
      className={`relative bg-white text-left w-[1512px] h-screen overflow-clip font-['Roboto'] sclae-75`}
    >
      <div className="h-52 absolute w-[250px] left-[631px] top-[2%] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2e55d058ee7b92bb1b8524d3222aa61e376f9bff.webp)_center_/_cover]" />
      <div className="absolute bg-white w-[567px] h-[351px] left-[472px] top-[342px] drop-shadow-lg rounded-[10px]" />
      <p className="absolute font-normal text-black inline m-0 left-[45.44%] right-[45.44%] h-[27px] w-[238px] top-[45.82%] bottom-[51.43%] text-[38.54px] leading-[35.18446350097656px]">
        SIGN IN
      </p>

      <form onSubmit={handleLogin}>
      <div>
              <input type="text" id="userid" name="name" placeholder="User ID" onChange={(e:any)=> setData({...data, email: e.target.value})}  className="pl-3 absolute gap-1.5 font-normal font-['Roboto'] text-[rgba(168,168,168,1)] transition-all left-[33.13%] right-[33.13%] top-[54.48%] bottom-[40.22%] border-solid outline rounded-md"/>
        </div>
        <div>
              <input type="password" id="password" name="password" placeholder="Password" onChange={(e:any)=> setData({...data, password: e.target.value})} className="pl-3 absolute gap-1.5 text-left font-normal font-['Roboto'] text-[rgba(168,168,168,1)] transition-all left-[33.2%] right-[33.07%] top-[63.54%] bottom-[31.16%] outline rounded-md"/>

        </div>
      <button className="absolute text-white font-medium left-[33.13%] right-[33.13%] top-[75.87%] bottom-[18.84%] rounded-md">
        <div className="relative gap-2 w-[510px] h-[52px] bg-black overflow-clip rounded-md">
          <p className="top-4 absolute leading-5 m-0 left-[205px] text-[25px]">
            <button type="submit">
              Sign In
            </button>
          </p>
        </div>
      </button>
      </form>

      <p className="absolute font-normal text-black inline m-0 h-[27px] w-[299px] left-[40.15%] right-[40.08%] top-[29.84%] bottom-[67.41%] text-[21.13px] leading-[35.18446350097656px]">
        JUDICIAL SERVICE OF GHANA
      </p>


    </div>
  );
}

export default Login
