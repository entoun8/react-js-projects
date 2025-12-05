function Spinner(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] py-8">
      <div className="relative">
        <div className="h-12 w-12 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-500">
          <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </div>
      <p className="text-sm text-slate-500 mt-4">Loading...</p>
    </div>
  );
}

export default Spinner;
