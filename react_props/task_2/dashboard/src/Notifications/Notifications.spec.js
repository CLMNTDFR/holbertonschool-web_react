import Notifications from './Notifications.jsx'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { v4 as uuidv4 } from 'uuid'


test("testing if the paragraph text is correct", () => {
    render(<Notifications />)
    const p = screen.getByText(/Here is the list of notifications/i)
    expect(p).toBeInTheDocument()
})

test("checking the existance of the button element", () => {
    render(<Notifications />)
    const btn = screen.getByRole("button")
    expect(btn).toBeInTheDocument()
})


test("checking if the right text is logged when the button is clicked", async () => {
    render(<Notifications />)
    const spy = jest.spyOn(console, 'log')
    const btn = screen.getByRole("button")
    const user = userEvent.setup()
    await user.click(btn)
    expect(spy).toHaveBeenCalledWith("Close button has been clicked")
    spy.mockRestore()
})

test("checking if the component renders the 3 li tags", () => {
    const mnotifications = [
        {id: uuidv4(), type: "default", value: "New course available"},
        {id: uuidv4(), type: "urgent", value: "New resume available"},
        {id: uuidv4(), type: "urgent", value: "Urgent requirement - complete by EOD"}
    ]

    render(<Notifications notifications={mnotifications}/>)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(3)
    expect(screen.getByText("New course available")).toBeInTheDocument()
    expect(screen.getByText("New resume available")).toBeInTheDocument()
    expect(screen.getByText("Urgent requirement - complete by EOD")).toBeInTheDocument()
})
