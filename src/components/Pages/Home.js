import Axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUser, setisUser] = useState(false);
  const [userData, setuserData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
      setisUser(true);
      setuserData(user);
    }
  }, []);

  const signOut = () => {
    Axios.post(
      "https://hiring-stackroots-server.herokuapp.com/auth/signout/user",
      {},
      { headers: { Authorization: `Token ${userData.accessToken}` } }
    )
      .then((response) => {
        console.log(response.data, 8998);

        if (response.data.isError === false) {
          localStorage.removeItem("user");
          navigate("../signin", { replace: true });
        } else {
        }
      })

      .catch(function (error) {
        console.warn(error, 88);
        // if (error.response && error.response.status === 400) {
        //   setinvalidCreds(true);
        // }
      });
  };

  return (
    <div className="home">
      <div className="Navbar fixed-top">
        <span className="nav-logo">
          <ion-icon name="bed-outline"></ion-icon> Sofasy{" "}
        </span>
        {isUser ? (
          <React.Fragment>

          <div onClick={signOut} className={`nav-items ${isOpen && "open"}`}>
            {/* <div  className="link">Sign Out from {userData.fullname}</div> */}
             <Link className="link" to="">
                Sign Out from {userData.fullname} 
             </Link>
          </div>
          </React.Fragment>
        ) : (
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link className="link" to="/signin">
              Sign In
            </Link>
            
          </div>
        )}

        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>

      <Carousel className="carousel-inner">
        <Carousel.Item className="carousel-item" interval={1000}>
          <img
            className="d-block w-100 h-100"
            src="https://hips.hearstapps.com/hmg-prod/images/posters-in-cozy-apartment-interior-royalty-free-image-943910360-1534189931.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Your Dream House</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              <a href="#" className="btn btn-warning mt-3">
                Learn More
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 h-100"
            src="https://images6.alphacoders.com/372/372496.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Always Dedicated</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              <a href="#" className="btn btn-warning mt-3">
                Learn More
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://wallpaperaccess.com/full/2076086.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>True Designing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              <a href="#" className="btn btn-warning mt-3">
                Learn More
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section id="about" className="about p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img
                  src="https://media.designcafe.com/wp-content/uploads/2019/12/17054440/living-room-furniture-design-for-your-home.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2>
                  We Provide Best Quality <br />
                  Services Ever
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  dignissimos consequuntur excepturi autem quod provident
                  similique ex necessitatibus harum laborum numquam repudiandae
                  deserunt illum, vero unde aliquam alias expedita maxime sequi!
                  Magnam, eos! Omnis aliquid qui facilis dolorum tempora ullam
                  et. Ullam delectus, quo qui rem unde minima a amet.
                  <br />
                  <br />
                  <a href="#" className="btn btn-warning">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Vero, debitis dolores.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-subtract"></i>
                  <h3 className="card-title">Best Quality</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio saepe, laudantium, est adipisci officia cupiditate
                    tempore quis laborum maiores atque aliquam incidunt velit
                    eum! Non!
                  </p>
                  <button className="btn btn-warning text-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i class="bi bi-slack"></i>
                  <h3 className="card-title">Sustainability</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio saepe, laudantium, est adipisci officia cupiditate
                    tempore quis laborum maiores atque aliquam incidunt velit
                    eum! Non!
                  </p>
                  <button className="btn btn-warning text-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i class="bi bi-playstation"></i>
                  <h3 className="card-title">Integrity</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio saepe, laudantium, est adipisci officia cupiditate
                    tempore quis laborum maiores atque aliquam incidunt velit
                    eum! Non!
                  </p>
                  <button className="btn btn-warning text-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Vero, debitis dolores.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2021/8/GA/RP/MD/12697135/chairs-500x500.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="card-title">Furniture Make</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestiae cupiditate magnam hic voluptas saepe aliquam
                    dolore ipsam adipisci, odit inventore.
                  </p>
                  <button className="btn bg-warning text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img
                      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zara-faux-shearling-chair-1654548559.jpeg?crop=1.00xw:0.668xh;0,0.258xh&resize=480:*"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="card-title">Furniture Make</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestiae cupiditate magnam hic voluptas saepe aliquam
                    dolore ipsam adipisci, odit inventore.
                  </p>
                  <button className="btn bg-warning text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img
                      src="https://m.media-amazon.com/images/I/71EQYH6-FqL._AC_SX466_.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="card-title">Furniture Make</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestiae cupiditate magnam hic voluptas saepe aliquam
                    dolore ipsam adipisci, odit inventore.
                  </p>
                  <button className="btn bg-warning text-dark">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Vero, debitis dolores.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1v3x5PnoOFR8hoSFoyvq_HgI4D4t1Sd-hJrIx8hwU939f7lJ"
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Tommy Shelby</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Explicabo, ratione!
                  </p>

                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVOs2E-VwZgRkjcIiu1DS1hf1rvx54kIIS3ngBS0AN605xG-WC"
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Polly Gray</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Explicabo, ratione!
                  </p>

                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhcubFv92v5grppvkBql2fmDXU7XK-tk_2AlG3khLLITeCfzj"
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Lizzie Shelby</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Explicabo, ratione!
                  </p>

                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2rDjCKS36LoP8J1EpTGzYfrEJcwf3eq2saD1qt7081Ub7nDDB"
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h3 className="card-title py-2">Arthur Shelby</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Explicabo, ratione!
                  </p>

                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Contact Us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Vero, debitis dolores.
                </p>
              </div>
            </div>
          </div>

          <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
              <form action="#" className="bg-light p-4 m-auto">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="Your Full Name"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        required
                        placeholder="Your Email Here"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        rows="3"
                        required
                        className="form-control"
                        placeholder="Your Query Here"
                      ></textarea>
                    </div>
                  </div>

                  <button className="btn btn-warning btn-lg btn-block mt-3">
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark p-2 text-center">
        <div className="container">
          <p className="text-white">
            &copy;{new Date().getFullYear()} www.Sofasy.com - All Rights
            Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Home;
