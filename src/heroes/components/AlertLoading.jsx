
export const AlertLoading = ({color , message}) => {
    return (
        <div className= {`alert alert-${color}`} role="alert">
            { message }
        </div>
    )
}
