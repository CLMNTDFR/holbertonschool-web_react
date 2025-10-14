import { shallow } from "enzyme";
import App from "./App";

describe("test all app", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders a div with the class App-header", () => {
    const res = shallow(<App />);
    expect(res.find(".App-header").exists()).toBe(true);
  });

  it("renders a div with the class App-body", () => {
    const res = shallow(<App />);
    expect(res.find(".App-body").exists()).toBe(true);
  });

  it("renders a div with the class App-footer", () => {
    const res = shallow(<App />);
    expect(res.find(".App-footer").exists()).toBe(true);
  });
});
