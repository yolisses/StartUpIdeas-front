import style from "/styles/Comment.module.css"

export function Comment(props) {
    let classes = "comment"
    if (props.level > 0) {
        classes = classes.concat(' junction')
    }
    return <div className={style.comment} style={{ "--level": props.level ? props.level : 0 }}  >
        {/* <div className='comment-user-div'>
                <img src="https://github.com/yowlisses.png" className="round user-image" alt='' />
            </div> */}
        <div>
            <div className={style.user_name}>{props.user.name}</div>
            <p>{props.text}</p>
        </div>
    </div>
}