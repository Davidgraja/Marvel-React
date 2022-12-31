import { useParams } from "react-router-dom"

export const ErrorPage = () => {
    const {error} = useParams()

    // console.log(parameters)

    return (
        <div>
            Lo sentimos a ocurrido  un error :
            {error}
            
        </div>
    )
}
