import { Card } from "@mui/material";
import { useRef, } from "react";
import useEventListener from "./hooks/useEventListener";
import translateRatio from "./utils/translateRatio";

export default function ItemCard({
	item_id,
	item_name,
	description,
	img_url,
	price,
	category_name,
}) {
	const element = useRef();

	useEventListener("mouseover", onZoom, element);
  useEventListener("mousemove", onZoom, element);
	useEventListener("mouseleave", offZoom, element);

	function onZoom(e) {
    const {layerX, layerY, srcElement} = e;
    const x = layerX
		const y = layerY
		srcElement.style.transformOrigin = `${x}px ${y}px`;
		srcElement.style.transform = "scale(1.025)";
    srcElement.style.transition = 'transform 1s'
	}
	function offZoom({srcElement: {style}}) {
		style.transform = "scale(1)";
    style.transition = 'transform 3s'
	}

	return (
		<Card variant='outlined'>
			<h2>{item_name}</h2>
      <div className="imgContainer">
			<img ref={element} src={img_url} alt={item_name} />
      </div>
			<h2>£{price}</h2>
		</Card>
	);
}
