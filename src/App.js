import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    items: 0,
    counters: [
      { count: 0, id: "c1", disabled: 1, color: "#ffc109" },
      { count: 0, id: "c2", disabled: 1, color: "#ffc109" },
      { count: 0, id: "c3", disabled: 1, color: "#ffc109" },
    ],
  };

  inc = (id) => {
    this.setState(({ counters }) => {
      for (let i = 0; i < counters.length; i++) {
        if (id === counters[i].id) {
          let c = counters;
          c[i].count += 1;
          return { counters: c };
        }
      }
    });

    this.setState(({ items, counters }) => {
      let count = 0;
      let c = counters;
      for (let i = 0; i < counters.length; i++) {
        if (counters[i].count === 0) count++;
        if (counters[i].count === 0) {
          c[i].disabled = 1;
          c[i].color = "#ffc109";
        } else {
          c[i].disabled = null;
          c[i].color = "#0967ff";
        }
      }
      return { items: counters.length - count, counters: c };
    });
  };
  dec = (id) => {
    this.setState(({ counters }) => {
      for (let i = 0; i < counters.length; i++) {
        if (id === counters[i].id && counters[i].count !== 0) {
          let c = counters;
          c[i].count -= 1;
          return { counters: c };
        }
      }
    });
    this.setState(({ items, counters }) => {
      let count = 0;
      let c = counters;
      for (let i = 0; i < counters.length; i++) {
        if (counters[i].count === 0) count++;
        if (counters[i].count === 0) {
          c[i].disabled = 1;
          c[i].color = "#ffc109";
        } else {
          c[i].disabled = null;
          c[i].color = "#0967ff";
        }
      }
      return { items: counters.length - count, counters: c };
    });
  };
  reset = () => {
    this.setState(({ counters, items }) => {
      let c = counters;
      for (let i = 0; i < c.length; i++) {
        c[i].count = 0;
        c[i].color = "#ffc109";
      }
      return { counters: c, items: 0 };
    });
  };
  render() {
    let s = document.querySelectorAll(".countNum");
    s.forEach((item, i) => {
      item.style.backgroundColor = this.state.counters[i].color;
      item.style.borderColor = this.state.counters[i].color;
    });
    // ).style.backgroundColor = this.state.counters[0].color;
    return (
      <>
        <div className="header">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          <span id="items">{this.state.items}</span>items
        </div>
        <div className="counters">
          <button className="refresh" onClick={this.reset}>
            <FontAwesomeIcon icon={faSync} className="syncIcon" />
          </button>
          <div className="first_counter c">
            <div className="a">
              <span className="countNum">
                {this.state.counters[0].count === 0
                  ? "zero"
                  : this.state.counters[0].count}
              </span>
            </div>
            <button className="inc" onClick={() => this.inc("c1")}>
              <FontAwesomeIcon icon={faPlusCircle} className="syncIcon" />
            </button>
            <button
              className="dec"
              onClick={() => this.dec("c1")}
              disabled={this.state.counters[0].disabled}
            >
              <FontAwesomeIcon icon={faMinusCircle} className="syncIcon" />
            </button>
          </div>
          <div className="second_counter c">
            <div className="a">
              <span className="countNum">
                {this.state.counters[1].count === 0
                  ? "zero"
                  : this.state.counters[1].count}
              </span>
            </div>
            <button className="inc" onClick={() => this.inc("c2")}>
              <FontAwesomeIcon icon={faPlusCircle} className="syncIcon" />
            </button>
            <button
              className="dec"
              onClick={() => this.dec("c2")}
              disabled={this.state.counters[1].disabled}
            >
              <FontAwesomeIcon icon={faMinusCircle} className="syncIcon" />
            </button>
          </div>
          <div className="third_counter c">
            <div className="a">
              <span className="countNum">
                {this.state.counters[2].count === 0
                  ? "zero"
                  : this.state.counters[2].count}
              </span>
            </div>
            <button className="inc" onClick={() => this.inc("c3")}>
              <FontAwesomeIcon icon={faPlusCircle} className="syncIcon" />
            </button>
            <button
              className="dec"
              onClick={() => this.dec("c3")}
              disabled={this.state.counters[2].disabled}
            >
              <FontAwesomeIcon icon={faMinusCircle} className="syncIcon" />
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
