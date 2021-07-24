import { InfiniteScroll } from "../components/InfiniteScroll";
import { IdeaListItem } from "../components/IdeaListItem";
import { api } from "../services/api";

export function IdeasLoader(props) {
    const fetchData = (addItems, page) => {
        api.get('/idea/page/' + page)
            .then((res) => {
                addItems(res.data)
            })
    }

    const fetchMaxPage = (setMaxPage) => {
        api.get('/ideas_total_count')
            .then((res) => {
                setMaxPage(res.data.count)
            })
    }

    return <div>
        <div className="paper-like" style={{ padding: "10px 0px" }}>
            <InfiniteScroll
                initialPage={props.initialPage}
                fetchData={fetchData}
                fetchMaxPage={fetchMaxPage}
                renderChild={item => <IdeaListItem {...item} key={item.id} />} />
        </div>
    </div>
}