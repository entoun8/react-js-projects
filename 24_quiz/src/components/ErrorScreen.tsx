const ErrorScreen: React.FC = () => (
  <div className="text-center text-red-400 space-y-2">
    <p className="text-4xl">💥</p>
    <p className="text-lg">There was an error fetching questions.</p>
  </div>
);

export default ErrorScreen;
