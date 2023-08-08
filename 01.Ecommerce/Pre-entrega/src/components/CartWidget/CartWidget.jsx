const CardWidget = () => {
    return (
        <div>
            <button className="btn btn-outline-primary position-relative">
                <i className="bi bi-cart4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2
                    <span className="visually-hidden">Producto en carrito.</span>
                </span>
            </button>
        </div>
    )
}
export default CardWidget;