import { Card } from "@mui/material";

export default function ItemCard({
  item_id,
  item_name,
  description,
  img_url,
  price,
  category_name,
}) {
  return (
      <Card variant='outlined'>
        <h2>{item_name}</h2>
        <img src={img_url} alt={item_name}/>
        <h2>£{price}</h2>
      </Card>
  );
}
