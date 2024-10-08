import React from 'react'

function TodoHeader ({children, loading}) {
    return (
        <div>
             {
             React.Children
             .toArray(children)
             .map(child => React.cloneElement(child, {loading})) 
             }
        </div>
    )
}

export {TodoHeader}