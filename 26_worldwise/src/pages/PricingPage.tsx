const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the perfect plan for your travel tracking needs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Explorer</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-slate-800">Free</span>
                </div>
                <p className="text-slate-600">Perfect for getting started</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Track unlimited locations</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Add personal notes</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Interactive map view</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Country statistics</span>
                </li>
              </ul>

              <button className="w-full bg-slate-100 text-slate-800 py-3 rounded-full font-semibold hover:bg-slate-200 transition-colors duration-300">
                Get Started Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg border-2 border-emerald-200 p-8 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 px-6 rounded-full text-sm font-semibold">
                  COMING SOON
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Pro Explorer</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-slate-800">$9</span>
                  <span className="text-slate-600 ml-2">/month</span>
                </div>
                <p className="text-slate-600">Advanced features for serious travelers</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Everything in Free</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Photo attachments</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Export your data</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Priority support</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 opacity-60 cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Is WorldWise really free?</h3>
                <p className="text-slate-600">Yes! Our core features are completely free with no limitations on the number of locations you can track.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Can I export my data?</h3>
                <p className="text-slate-600">Data export will be available with our Pro plan, coming soon.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Do I need to create an account?</h3>
                <p className="text-slate-600">Currently, your data is stored locally in your browser. Account creation and cloud sync will be available soon.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;
