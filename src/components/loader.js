import React, { Suspense, useEffect, useState, useContext } from "react"
import { BlocksContext } from "../context/blocksContext"
import { Popups } from "./popups";
import { Menu } from './menu';
import { Header } from './header';
import { Invest } from "./invest";
import { Graph } from "./graph";
import { Presentation } from "./presentation";
import { BestOffers } from "./best_offers";
// import { Locations } from "./location";
import { GetFlat } from "./get_flat";
import { GetThere } from "./get_there";
import { Podbor } from "./podbor";
import { Ipoteka } from "./ipoteka";
import { Gallery } from "./gallery";
import { Hod_str } from "./hod_str";
import { Contacts } from "./contacts";
import { Footer } from "./footer";

export const Loader = () => {

    const blocksImports = [
        <Menu />,
        <Header />,
        <Invest />,
        <Graph />,
        <Presentation />,
    ]

    const loaded = useContext(BlocksContext)

    const LoadBlock = (block) => {
        return <Suspense fallback={<div>Загрузка...</div>}>{block}</Suspense>
    }

    const generateHtml = () => {
        let toDraw = []
        for (let i = 0; i < loaded.blocks; i++) {
            toDraw.push(LoadBlock(blocksImports[i]))
        }
        return (

            <div className="blocks" data={loaded.menuClick ? "true" : ""}>
                <Popups />
                {toDraw.map((block) =>
                    block
                )}
            </div>

        )
    }
    const handleScroll = (event) => {

        if (loaded.blocks < blocksImports.length) {
            loaded.setBlocks(blocksImports.length) //fix later
            loaded.setPopup(true)
        } else {
            window.removeEventListener('scroll', handleScroll, true);
        }
    }
    useEffect(() => {
        if (loaded.blocks < blocksImports.length) {
            window.addEventListener('scroll', handleScroll, true);
        }
    })
    return generateHtml()

}