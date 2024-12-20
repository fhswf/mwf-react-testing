import { useState } from "react";

const Playground = () => {

    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    };

    return (
        <>
            <h1>Playground</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <div>
                <div className="flex h-6 items-center py-10">
                    <input id="license" data-testid="license" checked={checked} onChange={handleChecked} name="license" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    <div className="ml-3 text-md leading-6">
                        <label htmlFor="license" className="font-medium text-gray-900">Lizenzvereinbarung akzeptieren?</label>
                    </div>
                </div>
            </div>
            <div>
                <button disabled className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
            </div>

            <div className="flex items-center space-x-4">
        
        <div className="flex items-center justify-center w-64 h-32 p-4 bg-blue-500 text-white rounded-md shadow-md">
            Theory & Live Coding
        </div>

        
        <div className="flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
        </div>

        
        <div className="flex items-center justify-center w-64 h-32 p-4 bg-green-500 text-white rounded-md shadow-md">
            Exercices
        </div>

        
        <div className="flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
        </div>

        
        <div className="flex items-center justify-center w-64 h-32 p-4 bg-red-500 text-white rounded-md shadow-md">
            Discussion the solution
        </div>
    </div>
        </>
    )
};

export { Playground };