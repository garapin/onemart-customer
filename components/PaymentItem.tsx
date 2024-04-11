import { ChevronDownIconSVG } from "@/assets/chevron-down";
import { ChevronRightIconSVG } from "@/assets/chevron-right";
import React from "react";

const PaymentItem = ({ paymentMethod }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="space-y-4 border-b-slate-100 border-b pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={paymentMethod.image}
            alt={paymentMethod.name}
            className="w-6"
          />
          <h1>{paymentMethod.name}</h1>
        </div>
        {paymentMethod.childs && (
          <>
            {isOpen ? (
              <ChevronDownIconSVG
                className="w-5 h-5 cursor-pointer"
                color="#000"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <ChevronRightIconSVG
                className="w-4 h-4 cursor-pointer"
                color="#000"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </>
        )}
      </div>

      {isOpen && (
        <div className="ml-6 space-y-4">
          {paymentMethod.childs.map((child: any) => (
            <div
              key={child.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src={child.image} alt={child.name} className="w-8" />
              <h1>{child.name}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentItem;
