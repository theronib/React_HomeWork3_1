const OtherWorks = () => {

    const pictures = ["picture1.jpg", "picture2.jpg", "picture3.jpg"];

    return (
        <>
            <h1><u>Other Works</u></h1>
            <h5 id="info-title">Meet the Works of Leonardo da Vinci, a comprehensive showcase
                of his masterpieces, brought to life on this page</h5>
            <br></br>
            <div id="pictures">
                <ul>
                    {pictures.map((picture) => (
                        <img src={picture} class="images" alt="picture"></img>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default OtherWorks;