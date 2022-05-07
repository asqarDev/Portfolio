import React from "react";
import scratch from "./../../img/scratch.png";
import scratch1 from "./../../img/Screenshot (43).png";
export default function ScratchGame() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div class="card">
            <img src={scratch} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">Mashina o'yni</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <p className="text-center">
                <a href="/result (3).html" class="btn btn-primary">
                  Start Game
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div class="card">
            <img src={scratch1} class="card-img-top" alt="scratch game" />
            <div class="card-body">
              <h5 class="card-title text-center">Olmacha o'yni</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="text-center">
                <a href="/result (1).html" class="btn btn-primary">
                  Start Game
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
