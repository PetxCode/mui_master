import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";
import Test2 from "./components/Test2";
import Test1 from "./components/Test1";
import { QueryClient, QueryClientProvider } from "react-query";
import Test3 from "./components/Test3";
import Project1 from "./components/Project1/Project1";
import { myTheme } from "./components/Project1/theme";
import Project2 from "./components/Project1/Project2";
import Body from "./components/Project1/Body/Body";
import Body2 from "./components/Project1/Body/Body2";
import Body3 from "./components/Project1/Body/Body3";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider> */}
      <ThemeProvider theme={myTheme}>
        <Router>
          {/* <Header /> */}
          <Project1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test3" element={<Test3 />} />
            <Route path="/proj" element={<Project1 />} />
            <Route path="/body1" element={<Body />} />
            <Route path="/body2" element={<Body2 />} />
            <Route path="/body3" element={<Body3 />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
