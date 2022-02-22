import Navbar from "./Navbar";
import "../images/food_1.jpg";
const Header = () => {
  return (
    <div className="bg-[url('./images/food_1.jpg')] h-screen bg-fixed bg-no-repeat bg-cover relative after:content-['hello'] after:bg-gradient-to-r from-[rgb(189,32,32)] to-blue_1 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:opacity-60">
      <Navbar />
      <div className="flex items-center h-screen text-aliceblue">
        <div className="container w-screen my-0 mx-auto top-40">
          <div className="relative w-50 z-10">
            <h3 className="text-[4rem]">رستوران </h3>
            <p className="text-[1.2rem] leading-10">
              چلو کباب بدون شک معروف ترین غذای ایرانی است و خیلی ها آشپزی ایرانی
              را با چلو کباب می شناسند. انواع کباب و به ویژه کوبیده در بین
              ایرانی ها و توریست ها بسیار پرطرفدار است. چلو کباب کوبیده همان طور
              که می دانید معمولا با گوجه و فلفل کبابی، برنج زعفرانی، دوغ و سبزی
              تازه سرو می شود. البته گاهی کوبیده را به جای برنج با نان هم می
              خورند که صد البته بهتر است نان سنگک باشد
            </p>
            <div className="mt-[35px]">
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
