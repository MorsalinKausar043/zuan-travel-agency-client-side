
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navbar from "../navbar/Navbar";

const LoginPage = () => {

    const { SigninGoogle, SigninGithub, setIsLoading } = useAuth();

    const navigate = useNavigate();
    const location = useLocation(); 
    const redirect_location = location.state?.from || "/home";

    const googleSingIn = () => {
        SigninGoogle()
            .then(() => {
                navigate(redirect_location);
                // setIsLoading(true);
            }).finally(_ => setIsLoading(false));
    };

    const githubSignIn = () => {
        SigninGithub()
            .then(() => {
                navigate(redirect_location);
                // setIsLoading(true);
            }).finally(_ => setIsLoading(false));
    };

    return (
        <>
          
            <Navbar/>
            <div className="min-h-full flex items-center justify-center py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                start your 14-day free trial
                            </a>
                        </p>
                    </div>
                    <div className="my-8 space-y-6">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className='text-center'>
                                <button onClick={() => googleSingIn()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    sign With Google
                                </button>
                            </div>
                            <div onClick={() => githubSignIn()} className='text-center pb-4'>
                                <button class="bg-red-500 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Sign With Github
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your email?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LoginPage;
