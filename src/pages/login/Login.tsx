import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { loginUser } from "../../features/auth/authActions";

const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { loading, userInfo, error } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        if (userInfo) {
            navigate('/admin');
        }
    }, [navigate, userInfo])
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        dispatch(loginUser(formData));

    };

    return (
        <>
            <div className="flex min-h-full flex-col justify-center">
                
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1>Login</h1>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <form className="space-y-6" onSubmit={e => handleSubmit(e)}>
                        
                        {/* E-Mail */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">E-Mail</label>
                            <div className="mt-2">
                                <input type="text" name="email" id="email" value={formData.email} onChange={e => handleChange(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:text-gray-900 sm:text-sm sm:leading-6" placeholder="you@example.com" />
                            </div>
                        </div>
                        
                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input type="password" name="password" id="password" value={formData.password} onChange={e => handleChange(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:text-gray-900 sm:text-sm sm:leading-6" placeholder="you@example.com" />
                            </div>
                        </div>

                        {/* Submit */}
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
};

export { Login };