import { useState } from "react";
import { RootState, useAppDispatch } from "../../store";
import { Spinner } from "../../components/spinner/Spinner";
import { registerUser } from "../../features/auth/authActions";
import { useSelector } from "react-redux";

const Register = () => {

    const { loading, userInfo, error, success } = useSelector(
        (state: RootState) => state.auth
    );

    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        dispatch(registerUser({ ...formData }));

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })

    };

    return (
        <>
            <div className="flex min-h-full flex-col justify-center">
                
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1>Registrierung</h1>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <form className="space-y-6" method="POST" onSubmit={e => handleSubmit(e)}>
                        
                        <div>
                            {error && <span>{error}</span>}
                        </div>

                        {/* Vorname */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Vorname</label>
                            <div className="mt-2">
                                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={e => handleChange(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:text-gray-900 sm:text-sm sm:leading-6" placeholder="Max" />
                            </div>
                        </div>

                        {/* Nachname */}
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Nachname</label>
                            <div className="mt-2">
                                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={e => handleChange(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:text-gray-900 sm:text-sm sm:leading-6" placeholder="Mustermann" />
                            </div>
                        </div>

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
                                <input type="password" name="password" id="password" value={formData.password} onChange={e => handleChange(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:text-gray-900 sm:text-sm sm:leading-6" placeholder="" />
                            </div>
                        </div>

                        {/* Submit */}
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={loading}>
                                {loading ? <Spinner /> : 'Register'}
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
};

export { Register };