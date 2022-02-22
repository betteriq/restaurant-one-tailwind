import Navbar from "./Navbar";
import "../images/food_1.jpg";
const Header = () => {
  return (
    <div className="bg-[url('./images/food_1.jpg')] h-screen bg-fixed bg-no-repeat bg-cover relative after:content-['hello'] after:bg-gradient-to-r from-[rgb(255,0,0)] to-blue_1 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:opacity-40">
      <Navbar />
      <div className="banner_content">
        <div className="container">
          <div className="banner_text">
            <h3>رستوران </h3>
            <p>
              چلو کباب بدون شک معروف ترین غذای ایرانی است و خیلی ها آشپزی ایرانی
              را با چلو کباب می شناسند. انواع کباب و به ویژه کوبیده در بین
              ایرانی ها و توریست ها بسیار پرطرفدار است. چلو کباب کوبیده همان طور
              که می دانید معمولا با گوجه و فلفل کبابی، برنج زعفرانی، دوغ و سبزی
              تازه سرو می شود. البته گاهی کوبیده را به جای برنج با نان هم می
              خورند که صد البته بهتر است نان سنگک باشد
            </p>
            <div className="banner_btn">
              <a href="" className="btn btn-smart">
                الان سفارش دهید
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
