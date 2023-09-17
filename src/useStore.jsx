import { create } from "zustand";

export const URIStore = create((set) => ({
    uris: [
        {
            text: 'Stay Connected',
            address: '.'
        },
        {
            text: 'Education',
            address: '.'
        },
        {
            text: 'Community',
            address: '.'
        },
        {
            text: 'About Us',
            address: '.'
        },
    ]
}))