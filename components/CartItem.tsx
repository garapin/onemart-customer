import React from "react";
import { Product } from "../app/model/Product";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "@/app/store/cartSlice";

interface ProductDetailProps {
  product: Product;
}

const CartItem: React.FC<ProductDetailProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between gap-2 border-b pb-4 px-6">
      <div className="flex items-center gap-4">
        <img
          src="https://static.toiimg.com/thumb/msid-105672842/105672842.jpg?width=500&resizemode=4"
          alt="carrot"
          className="w-24 h-24 object-cover rounded-md"
        />
        <div>
          <p className="text-slate-500 text-sm">
            {product.category_ref.category}
          </p>
          <p className="font-medium line-clamp-2">{product.name}</p>
          <p className="font-light text-red-500">
            <span className="line-through text-sm">
              {product.discount === 0 ? "" : `Rp.${product.discount}`}
            </span>{" "}
            <span className="font-medium text-black">Rp.{product.price}</span>
          </p>
          <p className="text-slate-500">{product.unit_ref.unit}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(decreaseQuantity(product._id))}
          className="cursor-pointer h-10 w-10 flex items-center justify-center rounded-full text-black text-lg bg-slate-300"
        >
          -
        </button>
        <p>{product.quantity}</p>
        <button
          onClick={() => dispatch(increaseQuantity(product._id))}
          className="cursor-pointer h-10 w-10 flex items-center justify-center rounded-full text-white text-lg bg-slate-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
