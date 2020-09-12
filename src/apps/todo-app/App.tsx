import React, { useState } from "react"
export default () => {
    const [list, setList] = useState<string[]>([])
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                const list = Array.from(new FormData(e.currentTarget).values()) as string[]
                setList(prev => [...prev, ...list])
            }}>
                <input type="text" name="app"/>
                <button>add</button>
            </form>
            <div>
                {list.map(item => {
                    return <button key={item}>{item}</button>
                })}
            </div>
        </div>
    )
}