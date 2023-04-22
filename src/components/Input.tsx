const Input = (props: InputProps) => {
    return (
        <>
            <label htmlFor={props.id}>{props.text}</label>

            <input 
                id={props.id}
                type="text"
                className="w-full border-gray-500 border rounded focus:outline outline-1 outline-gray-900 pl-2"
            >
            </input>
        </>
    );
}

interface InputProps {
    text: string
    id: string
}

export default Input