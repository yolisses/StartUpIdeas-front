import style from '/styles/VoteBox.module.css'
import { useEffect, useState } from 'react'
import { isAuthenticated, retrieveId, retrieveToken } from '../contexts/auth'

import { api } from '../services/api'
import { useForceUpdate } from '../contexts/forceUpdate'

import Image from 'next/image'

export function VoteBox(props) {
    let [voteValue, setVoteValue] = useState(props.value)
    const [count, setCount] = useState(0)

    const refresh = () => {
        const route = isAuthenticated() ? `/idea/${props.id}/user/${retrieveId()}/vote` : `/idea/${props.id}/vote`
        api.get(route)
            .then((res) => {
                const { count, vote } = res.data
                if (vote && vote.is_up !== voteValue) {
                    setVoteValue(vote && vote.is_up)
                }
                setCount(count)
            })
    }

    useEffect(refresh)

    useForceUpdate()

    const conversion = {
        true: 'up',
        false: 'down',
        undefined: undefined
    }

    const sendVote = async (isUp) => {
        if (!isAuthenticated()) {
            return
        }
        if (voteValue === undefined || voteValue !== isUp) {
            setVoteValue(isUp)
            api.post(`/idea/${props.id}/vote`,
                { is_up: isUp },
                {
                    headers:
                        { authorization: retrieveToken() }
                }).then(res => {
                    refresh()
                    if (props.addCallback)
                        props.addCallback(res)
                })
        }
        else {
            setVoteValue(undefined)
            api.delete(`/idea/${props.id}/vote`, {
                headers:
                    { authorization: retrieveToken() },
                data: { is_up: isUp },
            }).then(res => {
                refresh()
                if (props.addCallback)
                    props.addCallback(res)
            })
        }
        refresh()
    }

    let className = 'vote-box '
    if (voteValue !== undefined && isAuthenticated()) {
        className = className + conversion[voteValue]
    }

    const size = 20

    return <div
        className={`${style.box} ${conversion[voteValue]}`}
    >
        <Image
            width={size}
            height={size}
            src="/images/vote.svg"
            alt=""
            onClick={() => sendVote(true)}
            className={style.button}
        />
        <span>{count}</span>
        <Image
            width={size}
            height={size}
            src="/images/downvote.svg"
            alt=""
            onClick={() => sendVote(false)}
            className={style.button}
        />
    </div>
}