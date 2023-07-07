import React from "react";
import "./QuickSearch.css";

const QuickSearch = () => {
  return (
    <>
      <div className="electronicsBlock">
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
                  <div className="product-slider">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickSearch;
