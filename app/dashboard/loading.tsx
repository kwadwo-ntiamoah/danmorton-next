import { Spinner } from "flowbite-react"

const Loader = () => {
    return (
        <div className="w-full h-1/2 flex justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-5">
            <Spinner size="lg" />
            <p>Please wait</p>
            </div>
        </div>
    )
}

export default Loader