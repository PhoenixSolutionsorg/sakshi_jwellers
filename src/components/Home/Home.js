import Coundown from "../coundown/coundown"
import Footer from "../footer/footer"
import Header from "../header/header"
import HeroSlider from "../heroSlider/heroSlider"
import Loader from "../loader/loader"
import MiddleBanner from "../middleBanner/middleBanner"
import ProductArea from "../productArea/productArea"
import Product from "../productList.js/productList"
import ShopBlog from "../shopBlog/shopBlog"
import ShopHome from "../shopHome/shopHome"
import ShopServices from "../shopService/shopServies"
import SmallSlider from "../smallSlider/smallSlider"
export  default function Home(){
    return<>
        {/* <Loader/> */}
        <Header/>
        <HeroSlider/>
        <SmallSlider/>
        <Product/>
        <MiddleBanner/>
        <ProductArea/>
        <ShopHome/>
        <Coundown/>
        <ShopBlog/>
        <ShopServices/>
        <Footer/>

    </>
}