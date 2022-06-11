import { Card, IconButton } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ChairIcon from "@mui/icons-material/Chair";
import CategoryIcon from "@mui/icons-material/Category";
import CheckroomIcon from "@mui/icons-material/Checkroom";

export default function CategoryCard({ category_name }) {
	return (
		<li key={category_name}>
			<IconButton aria-label={category_name} href={`/items/${category_name}`}>
				<>
					{category_name === "Electronics" ? (
						<ElectricBoltIcon />
					) : category_name === "Household" ? (
						<ChairIcon />
					) : category_name === "Clothing" ? (
						<CheckroomIcon />
					) : (
						<CategoryIcon />
					)}
				</>
				{category_name}
			</IconButton>
		</li>
	);
}
