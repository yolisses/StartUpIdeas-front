import Header from "./Header";

export default function DefaultPageLayout(props) {
    return (
        <>
            <Header />
            <div className='full-width center-h'>
                <div className='max-width'>
                    {props.children}
                </div>
            </div>
        </>
    )
}