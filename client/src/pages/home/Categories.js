import React from "react";

const Categories = () => {
  return (
    <>

      <div className="flex flex-wrap pillers_main_sections  mx-auto ">
        
          <div className="lg:w-1/4 md:w-1/2 w-full py-7 pillers-sections cursor-pointer">
            <div className="four-piller-outside">
              <div className="four-piller-inside">
                <img
                  src={require("../../assets/image/islamic-piller-salah-image.png")}
                  alt="islamic-salah"
                  width="100%"
                ></img>
              </div>
            </div>
            <p className="four-piller-names">اسلامی مضامین</p>
            <p className="four-piller-discription">
              عرض جمعت منتصف تم, تكاليف الأرواح الا كل. ما لان وحتى الثالث.
            </p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full py-7 pillers-sections cursor-pointer">
            <div className="four-piller-outside">
              <div className="four-piller-inside">
                <img
                  src={require("../../assets/image/islamic-piller-salah-image.png")}
                  alt="islamic-salah"
                  width="100%"
                ></img>
              </div>
            </div>
            <p className="four-piller-names">اسلامی کتابیں</p>
            <p className="four-piller-discription">
              عرض جمعت منتصف تم, تكاليف الأرواح الا كل. ما لان وحتى الثالث.
            </p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full py-7 pillers-sections cursor-pointer">
            <div className="four-piller-outside">
              <div className="four-piller-inside">
                <img
                  src={require("../../assets/image/islamic-piller-salah-image.png")}
                  alt="islamic-salah"
                  width="100%"
                ></img>
              </div>
            </div>
            <p className="four-piller-names">اسلامی نام</p>
            <p className="four-piller-discription">
              عرض جمعت منتصف تم, تكاليف الأرواح الا كل. ما لان وحتى الثالث.
            </p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full py-7 pillers-sections cursor-pointer">
            <div className="four-piller-outside">
              <div className="four-piller-inside">
                <img
                  src={require("../../assets/image/islamic-piller-salah-image.png")}
                  alt="islamic-salah"
                  width="100%"
                ></img>
              </div>
            </div>
            <p className="four-piller-names">صلاح</p>
            <p className="four-piller-discription">
              عرض جمعت منتصف تم, تكاليف الأرواح الا كل. ما لان وحتى الثالث.
            </p>
          </div>
       
      </div>
    </>
  );
};

export default Categories;
