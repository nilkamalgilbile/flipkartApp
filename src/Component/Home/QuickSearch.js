import React, { useEffect, useState } from "react";
import "./QuickSearch.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const url = "https://flipkartapi-9q66.onrender.com/quicksearch";

const QuickSearch = () => {
  const [quickSearch, setQuickSearch] = useState();

  useEffect(() => {
    fetch(`${url}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setQuickSearch(data);
      });
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: "1",
          position: "absolute",
          right: "9%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: "1",
          position: "absolute",
          left: "8%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    // arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    // speed: 5000,
    // autoplaySpeed: 10000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderQuickSearch = (searchData) => {
    if (searchData) {
      return searchData.map((sData) => {
        // console.log(sData);
        return (
          <>
            <div className="searchBlock" key={sData._id}>
              <div className="containerBlock">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                      <div className="linkBlock">
                        <div className="linkInfo">{sData.quickSearch_name}</div>
                        <Link
                          to={`/listing/${sData.category_id}?prodCatId=${sData.productCategory_id}`}
                          className="btn btn-primary btnViewAll"
                        >
                          view all
                        </Link>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10 prodContainer">
                      <div className="prodBlock">
                        <Slider {...settings}>
                          {renderProdSlider(sData.product)}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      });
    }
  };

  const renderProdSlider = (prodData) => {
    if (prodData) {
      return prodData.map((pData) => {
        return (
          <>
            <Link
              to={`/listing/${pData.category_id}?prodCatId=${pData.productCategory_id}&&prodTypeId=${pData.productType_id}`}
            >
              <div className="slide-div" key={pData.product_id}>
                <div className="productImg">
                  <img src={pData.product_img} alt="product" />
                </div>
                <div className="productDesc">
                  <div className="productTitle">{pData.product_title}</div>
                  <div className="productOffer">{pData.product_offer}</div>
                  <div className="productBrands">{pData.product_brand}</div>
                </div>
              </div>
            </Link>
          </>
        );
      });
    }
  };

  return (
    <>
      {renderQuickSearch(quickSearch)}
      {/* <div className="electronicsBlock">
        <div className="containerBlock">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                <div className="linkBlock">
                  <div className="linkInfo">Best of Electronics</div>
                  <button className="btn btn-primary btnViewAll">
                    view all
                  </button>
                </div>
              </div>
              <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <div className="productBlock">
                  <Slider {...settings}>
                    <div className="slide-div">
                      <div className="productImg">
                        <img
                          src="https://i.ibb.co/QHZmVGX/product1.png"
                          alt="product"
                        />
                      </div>
                      <div className="productDesc">
                        <div className="productTitle">Premium PowerBanks</div>
                        <div className="productOffer">Shop Now</div>
                        <div className="productBrands">Mi, realme & more</div>
                      </div>
                    </div>
                    <div className="slide-div">
                      <div className="productImg">
                        <img
                          src="https://i.ibb.co/M2qQ1DG/product2.png"
                          alt="product"
                        />
                      </div>
                      <div className="productDesc">
                        <div className="productTitle">
                          Top Mirrorless Cameras
                        </div>
                        <div className="productOffer">Shop Now!</div>
                        <div className="productBrands">Canon, Sony & more</div>
                      </div>
                    </div>
                    <div className="slide-div">
                      <div className="productImg">
                        <img
                          src="https://i.ibb.co/kBsjs5L/product3.png"
                          alt="product"
                        />
                      </div>
                      <div className="productDesc">
                        <div className="productTitle">Printers</div>
                        <div className="productOffer">From &#x20B9;10190</div>
                        <div className="productBrands">Brother</div>
                      </div>
                    </div>
                    <div className="slide-div">
                      <div className="productImg">
                        <img
                          src="https://i.ibb.co/zf8bskm/product4.png"
                          alt="product"
                        />
                      </div>
                      <div className="productDesc">
                        <div className="productTitle">Monitors</div>
                        <div className="productOffer">From &#x20B9;7949</div>
                        <div className="productBrands">DELL</div>
                      </div>
                    </div>
                    <div className="slide-div">
                      <div className="productImg">
                        <img
                          src="https://i.ibb.co/c8DcfgS/product5.png"
                          alt="product"
                        />
                      </div>
                      <div className="productDesc">
                        <div className="productTitle">Projectors</div>
                        <div className="productOffer">From &#x20B9;9999</div>
                        <div className="productBrands">ZEBRONICS</div>
                      </div>
                    </div>
                    <div className="slide-div">
                      <div className="productImg">
                        <img
                          src="https://i.ibb.co/Hr555BC/product6.png"
                          alt="product"
                        />
                      </div>
                      <div className="productDesc">
                        <div className="productTitle">
                          Designer Cases & Covers
                        </div>
                        <div className="productOffer">Just &#x20B9;169</div>
                        <div className="productBrands">
                          Check out the new designs
                        </div>
                      </div>
                    </div>
                    <div className="slide-div">
                      <div className="productImg">
                        <img
                          src="https://i.ibb.co/Hz2P44q/product7.png"
                          alt="product"
                        />
                      </div>
                      <div className="productDesc">
                        <div className="productTitle">ASUS Monitors</div>
                        <div className="productOffer">From &#x20B9;9990</div>
                        <div className="productBrands">Top rated</div>
                      </div>
                    </div>
                    <div className="slide-div">
                      <div className="productImg">
                        <img
                          src="https://i.ibb.co/xDWkPcq/product8.png"
                          alt="product"
                        />
                      </div>
                      <div className="productDesc">
                        <div className="productTitle">
                          Best of hair straighteners
                        </div>
                        <div className="productOffer">From &#x20B9;599</div>
                        <div className="productBrands">
                          Philips, Havells & more
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default QuickSearch;
