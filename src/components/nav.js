import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const NavBar = () => {
  const [value, setValue] = useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};
	return (
		<Tabs value={value} onChange={handleChange} className='NavBar' centered={true}>
			<Tab label='Categories' href='/categories' />
			<Tab label='users' href='/users' />
			<Tab label='Sell Item' href='/sell' />
			<Tab href='/createuser' label='Create User Profile' />
		</Tabs>
	);
};

export default NavBar;
