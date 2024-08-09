import { BasketItem } from "@/app/lib/basket.action";
import { Button } from "flowbite-react";

export interface BasketItemDetailsProps {
  item: BasketItem;
}

export const BasketItemDetails = (props: BasketItemDetailsProps) => {
  return (
    <div className="flex flex-col p-5 border border-dotted rounded-md">
      <p className="font-bold">{props.item.name}</p>

      <div className="grid grid-cols-4 gap-2">
        <select
          name="color"
          id="color"
          className="form-control col-span-2"
          defaultValue=""
        >
          <option value="">-- Select Color --</option>
          <option value="Green">Green</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>
        <input
          type="text"
          className="form-control col-span-2"
          placeholder="Material"
        />
        <div className="col-span-4">
          <textarea
            className="form-control"
            placeholder="Description for Item"
          />
        </div>
        {/* <div className="w-full flex items-center">
          <Button size="xs" color="dark" className="w-full">
            Update
          </Button>
        </div> */}
      </div>
    </div>
  );
};
