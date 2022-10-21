import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import CardHome from "./Homecard";
import Smallcard from "./Smallcard";
import fetchData from "./api";

const Home = () => {
  const [apidata,setApiData]=useState([]);
    useEffect(()=>{
        const apiFetch=async()=>{
            setApiData(await fetchData());
        };
        apiFetch();

    },[apidata]);
  return (
    <div>
      <div className="Home">
        <div className="Componenthome">
          <div className="Home1"></div>
          <div className="Homerightcom">
            <div className="Helicopter">
              <Link to="/bollywood">
                {" "}
                <img
                  src="https://media.istockphoto.com/photos/kerala-most-beautiful-place-of-india-picture-id1347088244?k=20&m=1347088244&s=612x612&w=0&h=9Gi-HxTnFYahEpLMOzm_r8glsrtHSHfQSU37S5MrEek="
                  alt="not found"
                />
              </Link>
            </div>

            <div className="Nature">
              <Link to="/food">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="not found"
                />
              </Link>
            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className="homeleft left1 ">
          {apidata
            .filter((article) => {
              return article.category === "bollywood" ;
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
               
              />
            ))}
        </div>
        <div className="homeleft left1">
          {apidata
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
              
              />
            ))}
        </div>
        <div className="homeleft left1">
          {apidata
            .filter((article) => {
              return article.category === "food";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Articles
        </h1>

        <h1 className="Top">Top Posts</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />

        <div className="Rightside2">
          {apidata
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="Leftside2">
          {apidata
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Smallcard
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                description={n.description.slice(0, 200)}
                title={n.title.slice(0, 25)}
                author={n.author}
              />
            ))}

          <div className="advertisement">
            <p>Advertisement</p>
          </div>
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Stories
        </h1>
        <hr />

        <div className="homeleft">
          {apidata
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>

        <div className="homeleft">
          {apidata
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
              
              />
            ))}
        </div>

        <div className="homeleft">
          {apidata
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
               
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;