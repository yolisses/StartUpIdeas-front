import style from "/styles/TextInput.module.css"

export function TextInput(props) {

    const { value, additionalRows, placeholder, singleLine, onEnterPress } = props

    function textAreaAdjust(element) {
        element.style.height = "0px";
        const newHeight = (element.scrollHeight +
            (additionalRows ? additionalRows * 23 : 0)) + "px"
        element.style.height = newHeight
    }

    function onChange(e) {
        textAreaAdjust(e.target)
        if (props.onChange)
            props.onChange(e)
    }

    function onKeyPress(e) {
        if (e.charCode === 13) {
            if (singleLine)
                e.preventDefault()
            if (onEnterPress)
                onEnterPress(e)
        }
    }

    return <div className={`${style.text_input} ${props.className || ''}`}>
        <textarea
            value={value}
            onChange={onChange}
            rows={1 + (additionalRows ? additionalRows : 0)}
            placeholder={placeholder}
            onKeyPress={onKeyPress}
        />
    </div>
}