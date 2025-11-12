import { render, screen } from '@testing-library/react'
import NotificationItem from './NotificationItem.jsx'
import '@testing-library/jest-dom'

test("checking if the lists have the right color when the type is default", () => {
    render(<NotificationItem type="default" value="testing" />)
    const listItem = screen.getByText("testing")
    expect(listItem).toBeInTheDocument()
    expect(listItem).toHaveAttribute("data-notification-type", "default")
})

test("checking if the lists have the right color when the type is urgent", () => {
    render(<NotificationItem type="urgent" value="testing" />)
    const listItem = screen.getByText("testing")
    expect(listItem).toBeInTheDocument()
    expect(listItem).toHaveAttribute("data-notification-type", "urgent")
})