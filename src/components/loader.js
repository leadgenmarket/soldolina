import React, { Suspense, useEffect, useState, useContext } from "react"
import { BlocksContext } from "../context/blocksContext"
import { Popups } from "./popups";
import { Menu } from './menu';
import { Header } from './header';
import { Genplan } from './genplan';
import { Plan_price } from './plan_price';
import { How_buy } from './how_buy';
import { Galery } from './galery';
import { Hod_str } from './hod_str';
import { Contacts } from './contacts';
import { Footer } from './footer';
import { Example } from "./example";




export const Loader = () => {

    const blocksImports = [
        <Header />,
        <Example />,
        <Menu />,
        <Genplan />,
        <Plan_price />,
        <How_buy />,
        <Galery />,
        <Hod_str />,
        <Contacts />,
        <Footer />,
    ]

    const loaded = useContext(BlocksContext)
    loaded.setBlocks(blocksImports.length)

    const LoadBlock = (block) => {
        return <Suspense fallback={<div>Загрузка...</div>}>{blocksImports}</Suspense>
    }

    const generateHtml = () => {
        /*let toDraw = []
        for (let i = 0; i < loaded.blocks; i++) {
            toDraw.push(LoadBlock(blocksImports[i]))
        }*/
        return (

            <div className="blocks" data={loaded.menuClick ? "true" : ""}>
                <Popups />
                {blocksImports.map((block) =>
                    block
                )}
            </div>

        )
    }
    /*const handleScroll = (event) => {

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
    })*/
    return generateHtml()

}