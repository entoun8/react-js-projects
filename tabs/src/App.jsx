import { useState } from "react";
import data from "./data";
import Tabs from "./Components/Tabs";
import Resume from "./Components/Resume";

function App() {
  const [resume, setResume] = useState(data[0]);
  const companies = data.map((resume) => resume.company);
  const activeCompany = resume.company;

  const handleClick = (company) => {
    const selectedResume = data.find((resume) => resume.company === company);
    setResume(selectedResume);
  };

  return (
    <div className="bg-blue-50 h-screen pt-16">
      <h1 className="text-center text-3xl font-semibold mb-8">Expierence</h1>
      <div className="flex justify-between gap-14 w-4/5 mx-auto">
        <Tabs
          companies={companies}
          handleClick={handleClick}
          activeCompany={activeCompany}
        />
        <Resume {...resume} />
      </div>
    </div>
  );
}

export default App;
