import React, { Component, useState, useEffect } from "react";
import "isomorphic-fetch";
import Axios from "axios";
import styled from "styled-components";
import Head from "next/head";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Layout from "../components/Layout";

class HomeContent extends Component {
  constructor(props) {
    super(props);

    this.togglePopUp = this.togglePopUp.bind(this);

    this.state = {
      movieNow: props.movieNow,
      movieComing: props.movieComming,
      movieImax: props.movieImax,
      movieDx: props.movieDx,
      loading: true,
      showPopUp: false,
      popupData: props.popupData,
    };
  }

  async componentWillMount() {
    let res = await fetch("http://localhost:3001/movie");
    let data = await res.json();
    console.log(data);

    this.setState({ movieNow: data });
    this.setState({ movieComing: data });
    this.setState({ movieDx: data });
    this.setState({ movieImax: data });
    this.setState({ loading: false });
    console.log(this.state);
    console.log(this.state.movieComing);
    console.log(this.state.movieDx);
    console.log(this.state.movieImax);
  }
  //   const [movieNow, setMovieNow] = useState("a");
  //   const [movieComming, setMovieComming] = useState("a");
  //   const [movieImax, setMovieImax] = useState("a");
  //   const [movieDx, setMovieDx] = useState("a");

  //   useEffect(async () => {
  //     const fecth = async () => {
  //       await Axios.get("http://localhost:3001/movie")
  //         .then((res) => {
  //           return Promise.all(
  //             res.data.map((item) => {
  //               setMovieImax((prev) => ({
  //                 payload: { ...prev, item },
  //               }));
  //             })
  //           );
  //         })
  //         .then((res) => {
  //           setMovieNow(res.data);
  //           setMovieComming(res.data);
  //           setMovieDx(res.data);
  //         });
  //     };
  //     await fecth();
  //     console.log("MOVIE NOW :", movieNow);
  //     console.log("MOVIE Comming :", movieComming);
  //     console.log("MOVIE IMAX :", movieImax);
  //     console.log("MOVIE 4DX :", movieDx);
  //   }, []);
  togglePopUp() {
    this.setState({ showPopUp: !this.state.showPopUp });
    console.log(this.state.showPopUp);
  }

  render() {
    if (!this.state.loading) {
      return (
        <div>
          {/* popup content */}

          {this.state.showPopUp ? (
            <Modal
              isOpen={this.state.showPopUp}
              toggle={this.togglePopUp}
              size="lg"
              style={{
                maxWidth: "1700px",
                width: "90%",
                backgroundColor: "black",
              }}
              className="content-modal"
            >
              <div
                style={{
                  width: "100%",
                  backgroundColor: "black",
                }}
              >
                <div
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "60vh",
                    backgroundImage: `url(${this.state.popupData.image})`,
                  }}
                >
                  <div
                    style={{
                      backgroundImage: "linear-gradient(transparent, black)",
                      width: "100%",
                      height: "100%",
                    }}
                    // style={{
                    //   background:
                    //     "linear-gradient(transparent, rgba(0,0,0, 0.5));"
                    // }}
                  ></div>
                </div>
                <div
                  style={{
                    marginTop: "3rem",
                    marginBottom: "3rem",
                    paddingLeft: "4rem",
                    paddingRight: "5rem",
                  }}
                >
                  <p style={{ marginBottom: "2vw", fontSize: "2.5vw" }}>
                    Storyline
                  </p>
                  <div
                    name="story-row"
                    style={{
                      marginBottom: "3.7rem",
                      display: "inline-block",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "40%",
                        paddingRight: "3%",
                        fontSize: "1.8vw",
                        display: "inline-block",
                        wordWrap: "break-word",
                        margin: 0,
                      }}
                    >
                      <p>{this.state.popupData.story}</p>
                    </div>
                    <div
                      style={{
                        width: "30%",
                        height: "100%",
                        display: "inline-block",
                        paddingLeft: "5rem",
                        paddingRight: "5rem",
                      }}
                    >
                      <div
                        style={{
                          height: "4vh",
                          padding: "0.7vh",
                          fontSize: "2vh",
                          backgroundColor: "#070788",
                          display: "block",
                          marginBottom: "2rem",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                      >
                        Book this
                      </div>
                      <div
                        style={{
                          height: "4vh",
                          padding: "0.7vh",
                          fontSize: "2vh",
                          backgroundColor: "#b22222",
                          display: "block",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                      >
                        Like
                      </div>
                    </div>
                  </div>
                  <hr
                    style={{
                      backgroundColor: "rgb(196, 196, 196, 0.2)",
                      marginBottom: "4rem",
                    }}
                  ></hr>
                  <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "50%" }}>
                      <p style={{ fontSize: "2.5vw", marginBottom: "1.5rem" }}>
                        Details
                      </p>
                      <p style={{ fontSize: "1.2vw" }}>
                        Director: {this.state.popupData.detail.director}
                      </p>
                      <p style={{ fontSize: "1.2vw" }}>
                        {" "}
                        Genre:
                        {this.state.popupData.detail.genre.map((item) => {
                          return item + " ";
                        })}
                      </p>
                      <p style={{ fontSize: "1.2vw" }}>
                        Likes: {this.state.popupData.likes}
                      </p>
                      <p style={{ fontSize: "1.2vw" }}>
                        th_title: {this.state.popupData.th_title}
                      </p>
                      <p style={{ fontSize: "1.2vw" }}>
                        Production: {this.state.popupData.detail.production}
                      </p>
                      <p style={{ fontSize: "1.2vw" }}>
                        Rating: {this.state.popupData.detail.rating}
                      </p>
                      <p style={{ fontSize: "1.2vw" }}>
                        Runtime: {this.state.popupData.detail.runtime}
                      </p>
                      <p style={{ fontSize: "1.2vw" }}>
                        Writing:
                        {this.state.popupData.detail.writing.map((item) => {
                          return item + "   ";
                        })}
                      </p>
                    </div>
                    <div style={{ width: "50%", paddingLeft: "10%" }}>
                      <p style={{ fontSize: "2.5vw", marginBottom: "1.5rem" }}>
                        Cast
                      </p>
                      {this.state.popupData.cast.map((item) => {
                        return (
                          <div>
                            <p style={{ fontSize: "1.2vw" }}>
                              Actor: {item.actor} || Charactor: {item.character}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          ) : (
            <></>
          )}

          {/* ----------- Banner ----------- */}
          <div
            className="vid-cont"
            style={{ overflow: "hidden", width: "100%" }}
          >
            <img
              className="fader"
              id="banner"
              src="../static/images/banner.jpg"
              width="100%"
              style={{ position: "absolute" }}
            />
            <img
              width="30%"
              src="../static/images/trailer_logo.png"
              style={{
                position: "absolute",
                paddingTop: "8%",
                paddingLeft: "4%",
              }}
            />
            <p
              className="fader"
              id="release"
              style={{
                color: "white",
                fontSize: "1.4vw",
                position: "absolute",
                paddingTop: "21%",
                paddingLeft: "4%",
                zIndex: 5,
              }}
            >
              Release Date: 09 / 25 / 2019
            </p>
            <p
              className="fader"
              id="detail"
              style={{
                color: "white",
                fontSize: "1vw",
                position: "absolute",
                paddingTop: "24%",
                paddingLeft: "4%",
                zIndex: 5,
                lineHeight: "1.5vw",
              }}
            >
              Tim Goodman, a former Pokémon Trainer
              <br />
              team up with Detective Pikachu, his
              <br />
              father's Pokémon partner to find out what
              <br />
              happened to his father, Harry Goodman.
            </p>
            <video
              id="vid"
              loop
              width="100%"
              style={{ marginTop: "-8%", marginBottom: "-8%" }}
            >
              <source src="../static/videos/pokemon.mp4" type="video/mp4" />
            </video>
          </div>
          {/* ----------- Content ----------- */}
          <div className="tabs">
            <div className="tab-2">
              <tab1Style>
                <label id="ltab2-1" for="tab2-1" style={{ fontSize: "1.5vw" }}>
                  Now Showing
                </label>
              </tab1Style>
              <input id="tab2-1" name="tabs-two" type="radio" checked />
              <div id="slide1">
                <div
                  className="container-fluid"
                  style={{
                    paddingLeft: "10vw",
                    paddingRight: "10vw",
                    marginTop: "2vw",
                  }}
                >
                  <div className="row">
                    {this.state.movieNow.map((item) => {
                      return (
                        <div
                          className="col-sm-3"
                          onClick={() => {
                            this.setState({ popupData: item });
                            console.log(this.state.popupData);
                            this.togglePopUp();
                          }}
                        >
                          <div
                            className="card my-1 pt-2 bg-dark text-white text-center"
                            onclick="document.body.style.overflow = 'hidden',document.getElementById('content-pop-wrapper').style.display='block',gradientsize()"
                            style={{
                              height: "95%",
                              width: "100%",
                              cursor: "pointer",
                            }}
                          >
                            <img
                              src={item.image}
                              className="card-img-top img-fluid"
                              alt="..."
                              style={{
                                height: "80%",
                                objectFit: "contain",
                                marginTop: "0%",
                              }}
                            />
                            <div
                              className="card-body"
                              style={{ padding: "1.25rem" }}
                            >
                              <p
                                className="card-title"
                                style={{
                                  fontSize: "1.2vw",
                                  marginTop: "-0.5vw",
                                }}
                              >
                                {item.title}
                              </p>
                              <p className="card-text">
                                {item.th_title}
                                <br />
                                <small className="text-muted">
                                  Release Date:
                                  {item.release_date}
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-2">
              <tab2Style>
                <label id="ltab2-2" for="tab2-2" style={{ fontSize: "1.5vw" }}>
                  Coming Soon
                </label>
              </tab2Style>
              <input id="tab2-2" name="tabs-two" type="radio" />
              <div id="slide2">
                <div
                  className="container-fluid"
                  style={{
                    paddingLeft: "10vw",
                    paddingRight: "10vw",
                    marginTop: "2vw",
                  }}
                >
                  <div className="row">
                    {this.state.movieNow.map((item) => {
                      return (
                        <div
                          className="col-sm-3"
                          onClick={() => this.setState({ popupData: item })}
                        >
                          <div
                            className="card my-3 pt-2 bg-dark text-white text-center"
                            onclick="document.body.style.overflow = 'hidden',document.getElementById('content-pop-wrapper').style.display='block',gradientsize()"
                            style={{
                              height: "95%",
                              width: "100%",
                              cursor: "pointer",
                            }}
                          >
                            <img
                              src={item.image}
                              className="card-img-top img-fluid"
                              alt="..."
                              style={{
                                height: "80%",
                                objectFit: "contain",
                                marginTop: "0%",
                              }}
                            />
                            <div
                              className="card-body"
                              style={{
                                padding: "1.25rem",
                              }}
                            >
                              <p
                                className="card-title"
                                style={{
                                  fontSize: "1.2vw",
                                  marginTop: "-0.5vw",
                                }}
                              >
                                {item.title}
                              </p>
                              <p className="card-text">
                                {item.th_title}
                                <br />
                                <small className="text-muted">
                                  Release Date: 22
                                  {item.release_date}
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-2">
              <tab3Style>
                <label id="ltab2-3" for="tab2-3" style={{ fontSize: "1.5vw" }}>
                  IMAX
                </label>
              </tab3Style>
              <input id="tab2-3" name="tabs-two" type="radio" />
              <div id="slide3">
                <div
                  className="container-fluid"
                  style={{
                    paddingLeft: "10vw",
                    paddingRight: "10vw",
                    marginTop: "2vw",
                  }}
                >
                  <div className="row">
                    {this.state.movieNow.map((item) => {
                      return (
                        <div
                          className="col-sm-3"
                          v-for="blog in blogSearchResult"
                        >
                          <div
                            className="card my-3 pt-2 bg-dark text-white text-center"
                            onclick="document.body.style.overflow = 'hidden',document.getElementById('content-pop-wrapper').style.display='block',gradientsize()"
                            style={{
                              height: "95%",
                              width: "100%",
                              cursor: "pointer",
                            }}
                          >
                            <img
                              src={item.image}
                              className="card-img-top img-fluid"
                              alt="..."
                              style={{
                                height: "80%",
                                objectFit: "contain",
                                marginTop: "0%",
                              }}
                            />
                            <div
                              className="card-body"
                              style={{
                                padding: "1.25rem",
                              }}
                            >
                              <p
                                className="card-title"
                                style={{
                                  fontSize: "1.2vw",
                                  marginTop: "-0.5vw",
                                }}
                              >
                                {item.title}
                              </p>
                              <p className="card-text">
                                {item.th_title}
                                <br />
                                <small className="text-muted">
                                  Release Date: 33
                                  {item.release_date}
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-2">
              <tab4Style>
                <label id="ltab2-4" for="tab2-4" style={{ fontSize: "1.5vw" }}>
                  4DX
                </label>
              </tab4Style>
              <input id="tab2-4" name="tabs-two" type="radio" />
              <div id="slide4">
                <div
                  className="container-fluid"
                  style={{
                    paddingLeft: "10vw",
                    paddingRight: "10vw",
                    marginTop: "2vw",
                  }}
                >
                  <div className="row">
                    {this.state.movieNow.map((item) => {
                      return (
                        <div className="col-sm-3">
                          <div
                            className="card my-3 pt-2 bg-dark text-white text-center"
                            onclick="document.body.style.overflow = 'hidden',document.getElementById('content-pop-wrapper').style.display='block',gradientsize()"
                            style={{
                              height: "95%",
                              width: "100%",
                              cursor: "pointer",
                            }}
                          >
                            <img
                              src={item.image}
                              className="card-img-top img-fluid"
                              alt="..."
                              style={{
                                height: "80%",
                                objectFit: "contain",
                                marginTop: "0%",
                              }}
                            />
                            <div
                              className="card-body"
                              style={{
                                padding: "1.25rem",
                              }}
                            >
                              <p
                                className="card-title"
                                style={{
                                  fontSize: "1.2vw",
                                  marginTop: "-0.5vw",
                                }}
                              >
                                {item.title}
                              </p>
                              <p className="card-text">
                                {item.th_title}
                                <br />
                                <small className="text-muted">
                                  Release Date: 44
                                  {item.release_date}
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx global>{`
        #release {
          font-family: "Roboto Condensed";
          letter-spacing: 0.5vh;
        }
        #detail {
          font-family: "Roboto Condensed";
          letter-spacing: 0.3vh;
        }
        input:focus,
        textarea:focus,
        select:focus {
          outline: none;
        }
        .tabs {
          margin-top: 3
          background-color: black;
          display: block;
          display: -webkit-flex;
          display: -moz-flex;
          display: flex;
          -webkit-flex-wrap: wrap;
          -moz-flex-wrap: wrap;
          flex-wrap: wrap;
          margin: 0 4%;
          overflow: hidden;
        }
        .tabs [class^="tab"] label,
        .tabs [class*=" tab"] label {
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          display: block;
          font-size: 1.1em;
          font-weight: 300;
          line-height: 0.1em;
          padding: 2rem 0;
          text-align: center;
        }
        .tabs [class^="tab"] [type="radio"],
        .tabs [class*=" tab"] [type="radio"] {
          border-bottom: 1px solid rgba(239, 237, 239, 0.5);
          cursor: pointer;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          display: block;
          width: 100%;
          -webkit-transition: all 0.4s ease-in-out;
          -moz-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out;
        }
        .tabs [class^="tab"] [type="radio"]:hover,
        .tabs [class^="tab"] [type="radio"]:focus,
        .tabs [class*=" tab"] [type="radio"]:hover,
        .tabs [class*=" tab"] [type="radio"]:focus {
          border-bottom: 1px solid rgb(28, 14, 150);
        }

        .tabs [class^="tab"] label:hover,
        .tabs [class*=" tab"] label:hover {
          color: rgba(255, 255, 255, 1);
          -webkit-transition: all 0.4s ease-in-out;
          -moz-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out;
        }
        .tabs [class^="tab"] [type="radio"]:checked,
        .tabs [class*=" tab"] [type="radio"]:checked {
          border-bottom: 2px solid rgb(28, 14, 150);
          box-shadow: 0 0 0 0 rgb(28, 14, 150) inset, 0 0 0 1px rgb(28, 14, 150);
        }
        .tabs [class^="tab"] [type="radio"]:checked + div,
        .tabs [class*=" tab"] [type="radio"]:checked + div {
          opacity: 1;
        }
        .tabs [class^="tab"] [type="radio"] + div,
        .tabs [class*=" tab"] [type="radio"] + div {
          display: block;
          opacity: 0;
          padding: 2rem 0;
          width: 90%;
          -webkit-transition: all 0.3s ease-in-out;
          -moz-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
        }
        .tabs .tab-2 {
          width: 25%;
        }
        .tabs .tab-2 [type="radio"] + div {
          width: 400%;
          margin-left: 400%;
        }
        .tabs .tab-2 [type="radio"]:checked + div {
          margin-left: 0;
        }
        .tabs .tab-2 [type="radio"] + #slide2 {
          margin-left: 300%;
        }
        .tabs .tab-2 [type="radio"]:checked + #slide2 {
          margin-left: -100%;
        }
        .tabs .tab-2 [type="radio"] + #slide3 {
          margin-left: 400%;
        }
        .tabs .tab-2 [type="radio"]:checked + #slide3 {
          margin-left: -200%;
        }
        .tabs .tab-2:last-child [type="radio"] + div {
          margin-left: 500%;
        }
        .tabs .tab-2:last-child [type="radio"]:checked + div {
          margin-left: -300%;
        }
        .card-text {
            font-family: "Mitr", sans-serif;
            color: rgb(168, 168, 168);
            font-size: 0.8vw;
            margin-top: -4%;
            padding: 0 1vw !important;
        }
        .card-text2 {
            font-family: "Mitr", sans-serif;
            color: rgb(168, 168, 168);
            font-size: 0.8vw;
            margin-top: -4%;
        }
        * {
            box-sizing: border-box;
            font-family: "Roboto Condensed", sans-serif;
        }
        .modal-backdrop {
            background-color: rgb(75, 75, 75);
        }
        .modal-content {
            padding: 0;
            margin: -2;
            color: white;
            backgroundColor: black;
            boder: none;
        }
        .modal-dialog .content-modal{
            backgroundColor: black;
            boder: none;
            margin: -2px;
        }
        .modal-header {
            margin: -2px;
            backgroundColor: black;
        }
      `}</style>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
export default HomeContent;
