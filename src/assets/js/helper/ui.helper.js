window.rotateCoupledViewport = () => {
    let X = unlink(TAB().VIEWPORT.X)
    let Y = unlink(TAB().VIEWPORT.Y)
    
    TAB().VIEWPORT.X = Y
    TAB().VIEWPORT.Y = X
}

window.decoupleViewport = () => {
    TAB().VIEWPORT.DECOUPLED = !TAB().VIEWPORT.DECOUPLED
}



window.setCoupledViewport = (viewportstring) => {
    TAB().VIEWPORT.CONTENT = viewportstring
}

window.updateCoupledViewport = () => {
    setCoupledViewport( renderViewport(TAB().DOCUMENT.HTML.children, TAB().DOCUMENT.CSS.children) )
}