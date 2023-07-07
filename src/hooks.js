import { useEffect, useState } from "react";

export default function useAuthState(auth)
{
	const[user, setuser] = useState(()=> auth.Currentuser);
	const[initializing, setinitializing] = useState(true);

	useEffect(()=> {
		const subscribe = auth.onAuthStateChanged(user=>{
			if (user)
				setuser(user);
			else
				setuser(false);
			if (initializing)
				setinitializing(false);
		});
		return subscribe;
	}, [auth, initializing]);

	return {user,initializing};
}
