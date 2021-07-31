import Footer from "./Footer";
import Header from "./Header";

export default function DefaultPageLayout(props) {
    return (
        <>
            <Header />
            <div className='full-width center-h'>
                <div className='max-width' style={{ minHeight: 'calc(100vh - 50px)' }}>
                    {props.children}
                </div>
            </div>
        </>
    )
}