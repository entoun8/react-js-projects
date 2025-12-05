import CreateCustomer from "./feautures/customers/CreateCustomer";
import AccountOperations from "./feautures/accounts/AccountOperations";
import { useAppSelector } from "./hooks/redux";

function App() {
  const fullName = useAppSelector((store) => store.customer.fullName);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-gradient-to-br from-white to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-6 sm:px-6 lg:px-8 min-h-screen">
        <main className="w-full max-w-7xl mx-auto">
          {!fullName ? (
            <div className="flex items-center justify-center min-h-[calc(100vh-3rem)]">
              <CreateCustomer />
            </div>
          ) : (
            <AccountOperations />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
