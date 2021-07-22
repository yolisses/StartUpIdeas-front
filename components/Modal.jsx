import style from "../styles/Modal.module.css"

export function Modal(props) {
    return (<>
        {props.visible &&
            <div
                className={style.overlay} >
                <div className=" paper-like" id={style.modal}>
                    <div className="">
                        <div
                            className={style.button}
                            onClick={() => props.close()}
                        >
                            <span className="material-icons cursor-pointer"
                                style={{ verticalAlign: "top" }}
                            >close</span>
                        </div>
                    </div>
                    {props.children}
                </div>
            </div>}
    </>)
}