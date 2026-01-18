import React from "react";

const CoreSkillsCard = ({ Icon, title, desc }) => {
  return (
    <div className="p-4 grow cursor-pointer theme shadow-effect transitions  min-h-50 rounded-lg   w-95 my-4">
      <Icon className="mb-2 primary-bg-gradient rounded-full p-2" size={46} />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm  dark:text-neutral-300 text-neutral-500 ">{desc}</p>
    </div>
  );
};

export default CoreSkillsCard;
