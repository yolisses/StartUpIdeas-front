import style from "../styles/IdeaListItem.module.css"

import Link from "next/link"

export function IdeaListItem(props) {
    return <>
        <Link draggable="false" href={'/idea/' + props.id}>
            <div className={style.idea_list_item}>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>{props.description}</div>
            </div>
        </Link>
        <hr className={style.hr} />
    </>
}