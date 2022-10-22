import { Card } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useEventListener from "./hooks/useEventListener";

export default function ItemCard({
	item_id,
	item_name,
	description,
	img_url,
	price,
	category_name,
}) {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const [style, setStyle] = useState({
    'transform-origin': 'center center',
  'object-fit': 'cover',
  'height': 100,
  'width': 100,
});

	const element = useRef();

	useEventListener("mouseover", onZoom, element);
  useEventListener("mousemove", onZoom, element);
	useEventListener("mouseleave", offZoom, element);

	function onZoom(e) {
    const x = e.clientX - e.target.offsetLeft;
		const y = e.clientY - e.target.offsetTop;
		e.srcElement.style.transformOrigin = `${x}px ${y}px`;
		e.srcElement.style.transform = "scale(1.05)";
	}
	function offZoom(e) {
		e.srcElement.style.transformOrigin = `center center`;
		e.srcElement.style.transform = "scale(1)";
	}

	return (
		<Card variant='outlined'>
			<h2>{item_name}</h2>
			<img ref={element} src={img_url} alt={item_name} />
			<h2>£{price}</h2>
		</Card>
	);
}
