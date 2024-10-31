import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tasks from "./pages/Tasks";
import Files from "./pages/Files";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Rates from "./pages/Rates";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const ThemedApp = () => {
  const { theme } = useTheme();
  return (
    <Router>
      <div className="w-full h-screen flex dark:bg-[#1F2937] bg-[#F6F8FA]">
        <Sidebar />
        <div className="left-[70px] w-full flex flex-col">
          <div className="w-full z-10">
            <Header />
          </div>
          <div className="top-[70px] w-full flex-grow">
            <Routes>
              <Route path="/files" element={<Files />} />
              <Route path="/" element={<Home />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/rates" element={<Rates />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
