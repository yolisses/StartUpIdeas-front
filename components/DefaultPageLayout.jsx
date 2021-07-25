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
            <div style={{ position: 'fixed', bottom: '0', left: '0', zIndex: '5', maxWidth: '300px', fontSize: '0.7rem', fontFamily: 'Alegreya Sans' }}>
                startupideassuport@gmail.com
            </div>
        </>
    )
}