
const Shop = () => {
  return (
    <div className="w-screen bg-[url('./images/food_1.jpg')] bg-fixed bg-no-repeat bg-cover h-[450px] flex  justify-center items-center">
      <div className="container">
        <div className="flex justify-center items-center my-0 ms-auto w-[400px] h-[50vh] text-red-700 ">
          <div className="container flex-col justify-between h-[150px]">
            <h1 className="text-[40px] leading-4 font-hold">Free delivery</h1>
            <div className="mt-[35px]">
              <a href="" className="btn btn-smart">
                {" "}
                shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
