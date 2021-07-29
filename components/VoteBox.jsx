import style from '/styles/VoteBox.module.css'
import { useEffect, useState } from 'react'

import { api } from '../services/api'

import Image from 'next/image'
import { useUser } from '../contexts/AuthContext'

export function VoteBox(props) {
    const [voteValue, setVoteValue] = useState(undefined)
    const [count, setCount] = useState(0)

    const { getToken } = useUser()

    const conversion = {
        true: 'up',
        false: 'down',
        undefined: undefined
    }

    const sendVote = async (isUp) => {
        if (!user) {
            return
        }
        if (voteValue === undefined || voteValue !== isUp) {
            setVoteValue(isUp)
            api.post(`/idea/${props.id}/vote`,
                { is_up: isUp },
                {
                    headers:
                        { authorization: getToken() }
                }).then(res => {
                    if (props.addCallback)
                        props.addCallback(res)
                })
        }
        else {
            setVoteValue(undefined)
            api.delete(`/idea/${props.id}/vote`, {
                headers:
                    { authorization: getToken() },
                data: { is_up: isUp },
            }).then(res => {
                if (props.addCallback)
                    props.addCallback(res)
            })
        }
    }

    let className = 'vote-box '
    if (voteValue !== undefined && user) {
        className = className + conversion[voteValue]
    }

    const size = 20

    return <div
        className={`${style.box} ${style[conversion[voteValue]]}`}
    >

        <style jsx>
            {
                `.button-down {
                    filter: ${voteValue === false ? 'sepia(.4) saturate(10) brightness(1);' : 'none'};
                }
                .button-up {
                    filter: ${voteValue === true ? 'sepia(1) saturate(10);' : 'none'};
                }
                `
            }
        </style>
        <div
            className="button-up">
            <Image
                width={size}
                height={size}
                src="/images/vote.svg"
                alt=""
                onClick={() => sendVote(true)}
                className={style.button}
            />
        </div>
        <span>{count}</span>
        <div
            className="button-down">
            <Image
                width={size}
                height={size}
                src="/images/downvote.svg"
                alt=""
                onClick={() => sendVote(false)}
                className={style.button}
            />
        </div>
    </div>
}