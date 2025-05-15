import Banner from "../components/Banner";
import Destaques from "../components/Destaques";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Produtos from "../components/Produtos";
import Oferta from '../components/Oferta';

const Home = () => {
    return (
        <main>
            <Banner />
            <Destaques />
            <Produtos />
            <Oferta />
        </main>
    );
}

export default Home;