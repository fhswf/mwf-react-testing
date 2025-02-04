import { useState } from "react";
import { useForm } from "react-hook-form";
import { RootState, useAppDispatch } from "../../store";
import { Spinner } from "../../components/spinner/Spinner";
import { registerUser } from "../../features/auth/authActions";
import { useSelector } from "react-redux";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string
};

const Register = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();

    const { loading, userInfo, error, success } = useSelector(
        (state: RootState) => state.auth
    );

    const dispatch = useAppDispatch();

    const onSubmit = (data: FormData) => {
        console.log(data);
        dispatch(registerUser({ ...data }));
        reset();
    };

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

    const handleSubmit2 = async (e: React.FormEvent<HTMLFormElement>) => {
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
                    <h1 id="title">Registrierung</h1>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        
                        <div>
                            {error && <span>{error}</span>}
                        </div>

                        {/* Vorname */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Vorname</label>
                            <div className="mt-2">
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    placeholder="Max"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:text-gray-900 sm:text-sm sm:leading-6"
                                    {...register('firstName', { required: 'Vorname ist erforderlich' })}
                                />
                                {/*value={formData.firstName} onChange={e => handleChange(e)} */}
                            </div>
                            {errors.firstName && (<div className="mt-2 text-red-600">{errors.firstName.message}</div>)}
                        </div>

                        {/* Nachname */}
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Nachname</label>
                            <div className="mt-2">
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    id="lastName"
                                    placeholder="Mustermann"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:text-gray-900 sm:text-sm sm:leading-6"
                                    {...register('lastName', { required: 'Nachname ist erforderlich' })}
                                    
                                />
                                {/*value={formData.lastName} onChange={e => handleChange(e)}*/}
                            </div>
                            {errors.lastName && (<div className="mt-2 text-red-600">{errors.lastName.message}</div>)}
                        </div>

                        {/* E-Mail */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">E-Mail</label>
                            <div className="mt-2">
                                <input 
                                    type="text" 
                                    name="email" 
                                    id="email" 
                                    placeholder="you@example.com"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:text-gray-900 sm:text-sm sm:leading-6"
                                    {...register('email', { required: 'E-Mail ist erforderlich', pattern: { value: /^\S+@\S+$/i, message: 'Ungültige E-Mail-Adresse' } })}
                                />
                                {/*value={formData.email} onChange={e => handleChange(e)}*/}
                            </div>
                            {errors.email && (<div className="mt-2 text-red-600">{errors.email.message}</div>)}
                        </div>
                        
                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Passwort</label>
                            <div className="mt-2">
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder=""
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:text-gray-900 sm:text-sm sm:leading-6"
                                    {...register('password', { required: 'Passwort ist erforderlich', minLength: { value: 8, message: 'Mindestens 8 Zeichen' } })}
                                />
                                {/*value={formData.password} onChange={e => handleChange(e)}*/}
                            </div>
                            {errors.password && (<div className="mt-2 text-red-600">{errors.password.message}</div>)}
                        </div>

                        {/* Submit */}
                        <div>
                            <button type="submit" id="password" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={loading}>
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