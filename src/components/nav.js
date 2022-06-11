import { Tab, Tabs } from "@mui/material";

const NavBar = () => {
    return (
			<Tabs className='NavBar' centered='true'>
				<Tab label='Categories' href="/categories"/>
				<Tab label='users' href="/users"/>
                <Tab label='Sell Item' href="/sell" />
				<Tab href='/createuser'
				label="Create User Profile"/>
			</Tabs>
		);
}

export default NavBar;