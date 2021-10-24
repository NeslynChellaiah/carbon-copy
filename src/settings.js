import './style/settings.css'
const Settings = ({lang, langChanged}) => {
    const languages = [
        {
            name: "JavaScript",
            mode: "js"
        }, 
        {
            name: "HTML",
            mode: "html"
        },
        {
            name: "CSS",
            mode: "css"
        }
    ];

    return (
        <>
            <div className="settings-container">
                <div>
                    <select id="language" value={lang} onChange={(e) => langChanged(e)}>
                        {
                            languages.map((language, i) => {
                                return (
                                    <option value={language.mode} key={i}>{language.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                {/* <div>
                    background
                </div> */}
            </div>
        </>
    )
}

export default Settings;