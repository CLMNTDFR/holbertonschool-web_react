import {render, screen} from '@testing-library/react'
import Footer from './Footer.jsx'
import * as myModule from '../utils/utils.js'

describe("Footer component", () => {
    it ("if the footer paragraph rendred", () => {
        render(<Footer />)
        const currentYear = new Date().getFullYear()
        const p = screen.getByText(`Copyright ${currentYear} - Holberton School main dashboard`)
        expect(p).toBeInTheDocument()
    })
    it("checking if the footer renderes the correct paragraph content when the argument of getFooterCopy is true", () => {
        jest.spyOn(myModule, 'getFooterCopy').mockImplementation(() => 'Holberton School')
        render(<Footer />)
        const currentYear = new Date().getFullYear()
        const p = screen.getByText(`Copyright ${currentYear} - Holberton School`)
        expect(p).toBeInTheDocument()
    })
})
