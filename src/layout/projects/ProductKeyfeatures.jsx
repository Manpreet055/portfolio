import React from "react";

const ProductKeyfeatures = ({ project }) => {
  return (
    <div className="h-full theme flex flex-col">
      <h4 className="list-none my-2 font-semibold w-full text-center">
        Key Features
      </h4>
      <ul className="overflow-auto cursor-pointer hide-scrollbar flex flex-col gap-2 place-items-start list-disc   rounded-lg px-6 py-1">
        {project?.keyFeatures.map((feat, index) => (
          <li key={index} className="text-sm mx-5 sm:text-base">
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductKeyfeatures;
