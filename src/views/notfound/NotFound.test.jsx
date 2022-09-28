import NotFound from "./NotFound.jsx";
import React from "react";
import { screen, render } from "@testing-library/react";

describe('NotFound', () => {
    describe('when rendering default', ()=>{
        it('should show an image', () =>{
            render(<NotFound/>)
            const image = screen.getByAltText(/error page not found/i);
            expect(image).toBeInTheDocument();
        })
    })
})