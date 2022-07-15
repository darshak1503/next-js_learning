import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
