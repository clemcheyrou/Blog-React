import fb from './firebase';
import useAuthState from './hooks';

export default function Signin () {
	const {user,initializing} = useAuthState(fb.auth());
	const signinwithGoogle= async()=> {
		const provider= new fb.auth.GoogleAuthProvider();
		fb.auth().useDeviceLanguage();

		try
		{
			await fb.signinwithRedirect(provider);
		} 
		catch (error)
		{
			console.log(error.message);
		}
	};

	if (initializing)
	{
		return 'loading...';
	}

	return(
		<div className="mt-20 text-center">
			<button className="border-2 border-black"
			onClick={signinwithGoogle}
			>Sign in with Google</button>
		</div>
	);
}