import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
    const {orderId} = useParams();

    return (
        <div className="container my-5">
            <div className="row my-3">
                <div className="col-md-12 text-center">
                    {orderId ? <div className="alert alert-warning text-center" role="alert"><h3>Gracias por tu Compra!</h3><p>Se generó una orden de compra con el ID: <b>{orderId}</b></p>
                    </div> : ""}
                    <Link to={"/"} className="btn btn-warning">Volver a menú principal</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;