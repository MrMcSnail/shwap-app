import { Card } from "@mui/material";
import { Container } from "@mui/system";
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
	const element = useRef();

	useEventListener("mouseover", onZoom, element);
  useEventListener("mousemove", onZoom, element);
	useEventListener("mouseleave", offZoom, element);

	function onZoom(e) {
    const {offsetX, offsetY, pageX, pageY, clientX, clientY, layerX, layerY, srcElement} = e;
    const x = layerX
		const y = layerY
    const containerSize = srcElement.width
    
		srcElement.style.transformOrigin = `${x}px ${y}px`;
		srcElement.style.transform = "scale(1.1)";
	}
	function offZoom(e) {
		e.srcElement.style.transformOrigin = `center center`;
		e.srcElement.style.transform = "scale(1)";
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
