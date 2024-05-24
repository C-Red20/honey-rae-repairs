import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    // /customers/2
    // path="/customers/:customerId"
    const { customerId } = useParams() // { customerId: 2 }

    return <div>Customer #{customerId}</div>
}