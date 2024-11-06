

const InfoCard = ({ title, value, subtitle }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
      {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
    </div>
  );
};

export default InfoCard;
