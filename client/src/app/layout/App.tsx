import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutPage from "../../features/about/AboutPage";
import Basket from "../../features/basket/Basket";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import NotFound from "../errors/NotFound";
import ServerError from "../errors/ServerError";
import Header from "./Header";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import { setBasket } from "../../features/basket/basketSlice";

export default function App() {
  const [loading, setLoading] = useState(true);
  const {fullscreen} = useAppSelector(state=>state.screen)
  const dispatch = useAppDispatch();

  const [mode, setMode] = useState(true);
  const displayMode = mode ? "light" : "dark";

  useEffect(() => {
    const buyerId = getCookie("buyerId");
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => dispatch(setBasket(basket)))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else setLoading(false);
  }, [dispatch]);


  const darkTheme = createTheme({
    palette: {
      mode: displayMode,
    },
  });
  

  if (loading) return <LoadingComponent message="Initilize App....." />;

  const handleMode = () => setMode(!mode);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <ToastContainer
          position="bottom-right"
          theme="colored"
          autoClose={1000}
        />
        <CssBaseline />
        <Header handleMode={handleMode} />{fullscreen ? <>{mainrouter}</> :<Container sx={{mt:2}}>{mainrouter}</Container>}
      </ThemeProvider>
    </>
  );
}

const mainrouter = 
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/catalog/:id" element={<ProductDetails />} />
    <Route path="/basket" element={<Basket />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/server-error" element={<ServerError />} />
    <Route path="*" element={<NotFound />} />
  </Routes>

