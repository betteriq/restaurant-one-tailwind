import React from "react";

const Client = () => {
  return (
    <div className="bg-[url('./images/food_1.jpg')] w-full px-0 py-20 text-aliceblue bg-fixed bg-no-repeat bg-cover">
      <div className="container">
        <div className="row">
          <div className="w-1/4">
            <div className="client">
              <h1>120</h1>
              <p>Awesome Emploee</p>
            </div>
          </div>
          <div className="w-1/4">
            <div className="client">
              <h1>58</h1>
              <p>pizza type</p>
            </div>
          </div>
          <div className="w-1/4">
            <div className="client">
              <h1>64</h1>
              <p>pizza type</p>
            </div>
          </div>
          <div className="w-1/4">
            <div className="client">
              <h1>74</h1>
              <p>pizza type</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
