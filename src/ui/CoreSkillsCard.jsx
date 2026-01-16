import React from "react";

const CoreSkillsCard = ({ Icon, title, desc }) => {
  return (
    <div className="p-4 border border-gray-200 shadow-xl hover:shadow-md transitions dark:border-gray-500 min-h-50 rounded-lg   w-80 my-4">
      <Icon className="mb-2 primary-bg-gradient rounded-full p-2" size={46} />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default CoreSkillsCard;
