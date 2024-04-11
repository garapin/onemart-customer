import { ChevronRightIconSVG } from "@/assets/chevron-right";
import { EditIconSVG } from "@/assets/edit";
import { StoreFrontIconSVG } from "@/assets/store-front";
import React from "react";

const ProfileItem = ({
  title,
  description,
  icon,
  type,
  action,
}: {
  title: string;
  description?: string;
  icon: React.ReactNode;
  type: string | "edit" | "detail" | "logout";
  action?: () => void;
}) => {
  return (
    <div
      className="flex items-center gap-2 justify-between border-b pb-6 cursor-pointer"
      onClick={action}
    >
      <div className="flex items-center gap-2">
        {icon}
        <div>
          <p
            className={`text-sm uppercase ${
              type !== "logout" ? "text-slate-500" : "text-red-600"
            }`}
          >
            {title}
          </p>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
      {type === "edit" ? (
        <EditIconSVG className="w-6 h-6" />
      ) : type === "detail" ? (
        <ChevronRightIconSVG className="w-4 h-4" color="#222233" />
      ) : null}
    </div>
  );
};

export default ProfileItem;
