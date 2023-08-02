import "./App.css";
import Header from "./components/Header"; // Default Import
import { Title } from "./components/Header"; // Named Import
import Body from "./components/Body";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  // const searchText = "Search";

  const [searchText, setSearchText] = useState("kfc");

  const [searchClick, setSearchClick] = useState("True");

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;

//   return (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="search"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//             //whatever you write in the input
//           }}
//         ></input>

//         <button className="search-btn">{searchText}</button>

//         <h1>{searchClick}</h1>

//         <button
//           onClick={() => {
//             if (searchClick === "True") setSearchClick("False");
//             else setSearchClick("True");
//           }}
//         >
//           Click Me
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;
