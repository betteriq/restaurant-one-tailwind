import React from "react";

const About = () => {
  return (
    <div className="p-[80px]">
      <div className="container">
        <div className="row">
          <div className="w-6/12 p-[25px]">
            <h3 className="text-3xl font-bold leading-10 text-[ rgba(37, 37, 37, 0.733)]">
              درباره ما
            </h3>
            <h3 className="text-gray-900 leading-10 mb-4 text-3xl font-bold">
              به رستوران رشیدی خوش آمدید
            </h3>
            <p className="text-[18px} text-[#8b8b8b] leading-7 font-normal">
              رستوران‌های زنجیره‌ای ارکیده با بیش از ۶۰ سال تجربه، افتخار آن را
              دارد که در ۶ شعبه در سراسر کشور، میزبان محافل دوستانه و کاری،
              جشن‌ها و مراسم‌های شما عزیزان باشد. برای آنکه برایتان بهترین
              باشیم، متناسب با تمامی ذائقه‌ها و سلیقه‌ها، با تکیه بر هنر آشپزان
              ماهر و باتجربه، منوی کامل غذایی را ترتیب داده‌ایم و با به کارگیری
              استاندارهای جهانی و سبک‌های گوناگونی از معماری و طراحی‌های مدرن،
              فضایی دلنشین برای صرف یک وعده غذا را به صورت رستوران گردون،
              رستوران‌های با فضای روباز و بسته ایجاد کرده‌ایم. همچنین آمادگی
              پذیرائی از مهمان‌ها با جمعیت بالا در هر زمانی را داشته و با
              امکانات رفاهی کم‌نظیر همچون سالن‌های VIP، خانه بازی کودکان، پله
              برقی، پارکینگ اختصاصی، کافی‌شاپ مجزا، آلاچیق و... سعی بر آن داریم
              که اوقات خوشی را برایتان رقم زده و همیشه نام ارکیده میان
              انتخاب‌هایتان بدرخشد.
            </p>
            <div className="mt-10">
              <a href="/" className="btn btn-smart">
                بیشتر بخوانید
              </a>
            </div>
          </div>
          <div className="w-6/12">
            <div className="about_image">
              <img src="images/gheyme_1.jpg" alt="" className="w-4/5 h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
