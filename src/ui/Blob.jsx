const Blob = ({ path, position, className = "text-teal-300/50" }) => {
  return (
    <div className={`absolute ${position} w-full h-full`}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute w-full h-full ${className}`}
      >
        <path fill="currentColor" d={path} transform="translate(100 100)" />
      </svg>
    </div>
  );
};
export default Blob;
