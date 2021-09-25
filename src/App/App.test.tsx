import { render, screen } from "@testing-library/react"
import React from "react"

import { App } from "./App"

test("renders the logo", async () => {
  render(<App />)

  expect(await screen.findByTestId("logo")).toBeInTheDocument()
})