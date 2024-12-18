import { Outlet } from 'react-router-dom';
import Content from './Content';
import Footer from './Footer';
import MenuMobile from './MenuMobile';

function SellerPage() {

    return (
           <>
            <MenuMobile />
            <Content />
            <Outlet />
            <Footer />
           </>
    );
}

export default SellerPage;
