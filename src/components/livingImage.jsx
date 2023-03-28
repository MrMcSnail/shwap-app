import React, { useRef } from 'react'
import useEventListener from './hooks/useEventListener';

export default function LivingImage({ img_url, item_name }) {
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
    style.transition = 'transform 3s '
	}
  return (
    <img ref={element} src={img_url} alt={item_name} />
  )
}
