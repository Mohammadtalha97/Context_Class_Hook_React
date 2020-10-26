//class component
// import React from "react";
// import Navbar from "./Class/component/Navbar";
// import BookList from "./Class/component/BookList";
// import ThemeToggle from "./Class/component/ThemeToggle";
// import AuthContextProvider from "./Class/context/AuthContext";
// import ThemeContextProvide from "./Class/context/ThemeContext";

// // import AuthCo
// function App() {
// return (
//   <div className="App">
//     <ThemeContextProvide>
//       <AuthContextProvider>
//         <Navbar />
//         <BookList />
//         <ThemeToggle />
//       </AuthContextProvider>
//     </ThemeContextProvide>
//   </div>
//   );
// }

// export default App;

import React from "react";
import BookList from "./Hook/component/BookList";
import Navbar from "./Hook/component/Navbar";
import ThemeToggle from "./Hook/component/ThemeToggle";
import AuthContextProvider from "./Hook/context/AuthContext";
import BookContextProvider from "./Hook/context/BookContext";
import ThemeContextProvider from "./Hook/context/ThemeContext";
const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
