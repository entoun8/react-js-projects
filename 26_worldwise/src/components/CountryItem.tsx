interface CountryItemProps {
  country: string;
}

const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-200 transition-all duration-200 group cursor-pointer">
      <div className="flex items-center justify-center gap-3">
        <span className="text-2xl">🏳️</span>
        <span className="font-medium text-slate-800 group-hover:text-emerald-700 transition-colors">
          {country}
        </span>
      </div>
    </div>
  );
};

export default CountryItem;
