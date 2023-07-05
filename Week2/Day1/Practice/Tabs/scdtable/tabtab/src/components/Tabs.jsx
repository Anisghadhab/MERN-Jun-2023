import React from 'react'
import { useState } from 'react'

const Tabs = ({tabItems}) => {
    const [tabs, setTabs] = useState([{label : 'Tab 1', content : 'This is the content of Tab 1'}])

    const handleTab1 = () => {
        const updatedTab = [...tabItems]
        const tab1 = updatedTab.filter((_, i) => {
            return i === 0
        })
        setTabs(tab1)

    }
    const handleTab2 = () => {
        const updatedTab = [...tabItems]
        const tab2 = updatedTab.filter((_, i) => {
            return i === 1
        })
        setTabs(tab2)

    }
    const handleTab3 = () => {
        const updatedTab = [...tabItems]
        const tab3 = updatedTab.filter((_, i) => {
            return i === 2
        })
        setTabs(tab3)

    }
    return (
        <div>
            <fieldset>
                <legend>Tabs.jsx</legend>

                <div>
                    <button onClick={() => { handleTab1() }}>tab1</button>
                    <button onClick={() => { handleTab2() }}>tab2</button>
                    <button onClick={() => { handleTab3() }}>tab3</button>
                </div>
                <div>
                    {tabs[0].content}
                </div>
            </fieldset>
        </div>
    )
}

export default Tabs