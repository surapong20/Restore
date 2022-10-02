import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useCallback,useEffect,useState } from "react";
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
import { fetchBasketAsync} from "../../features/basket/basketSlice";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import { PrivateLogin, PrivateRoute } from "./PrivateRoute";
import OrderPage from "../../features/orders/OrderPage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { fullscreen } = useAppSelector((state) => state.screen);
  const dispatch = useAppDispatch();

  const [mode, setMode] = useState(true);
  const displayMode = mode ? "light" : "dark";

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);
  
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
        <Header handleMode={handleMode} />
        {fullscreen ? (
          <>{mainrouter}</>
        ) : (
          <Container sx={{ mt: 2 }}>{mainrouter}</Container>
        )}
      </ThemeProvider>
    </>
  );
}

const mainrouter = (
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
    <Route path="/register" element={<Register />} />
    <Route
              path="/login"
              element={
                <PrivateLogin>
                  <Login />
                </PrivateLogin>
              }
            />
            <Route element={<PrivateRoute />}>
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order" element={<OrderPage/>}/>
            </Route>

  </Routes>
);
