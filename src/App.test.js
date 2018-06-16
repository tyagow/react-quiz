import React from "react";
import * as Enzyme from "enzyme";
import { MemoryRouter } from "react-router";

import App from "./App";
import Home from "./container/Home/Home";
import { NotFound } from "./container/NotFound/NotFound";

describe("App component", () => {
  it("should ", () => {
    expect(true).toBe(true);
  });

  // test("valid path / should render HomePage component", () => {
  //   // const store = global.mockStore(initialState);
  //   const wrapper = Enzyme.mount(
  //     // <Provider store={store}>
  //     <MemoryRouter initialEntries={["/"]}>
  //       <div>
  //         <App />
  //       </div>
  //     </MemoryRouter>
  //     // </Provider>
  //   );
  //   expect(wrapper.find(Home)).toHaveLength(1);
  //   expect(wrapper.find(NotFound)).toHaveLength(0);
  // });
  // test("invalid path /invalid should render NotFound component", () => {
  //   // const store = global.mockStore(initialState);
  //   const wrapper = Enzyme.mount(
  //     // <Provider store={store}>
  //     <MemoryRouter initialEntries={["/invalid"]}>
  //       <div>
  //         <App />
  //       </div>
  //     </MemoryRouter>
  //     // </Provider>
  //   );
  //   expect(wrapper.find(NotFound)).toBe(1);
  //   expect(wrapper.find(Home)).toHaveLength(0);
  // });
});
