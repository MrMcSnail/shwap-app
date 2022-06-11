import { List } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchAllUsers } from "../api";
import UserCard from "./user-card";

const UserList = () => {
	const [allUsers, setAllUsers] = useState([]);

	useEffect(() => {
		fetchAllUsers().then((users) => {
			setAllUsers(users);
		});
	}, []);

	const allUserCards = allUsers.map((userObj) => {
		const { username, avatar_url, kudos } = userObj;

		return (
			<UserCard
				key={username}
				username={username}
				avatar_url={avatar_url}
				kudos={kudos}
				user={userObj}
			/>
		);
	});

	return <List className='UserList'>{allUserCards}</List>;
};

export default UserList;
