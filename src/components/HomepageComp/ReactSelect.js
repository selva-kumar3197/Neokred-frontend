import imageUrl from "@/imageUrl";



const options = [
    { value: 'CollectBot', label: 'CollectBot', image: imageUrl?.homePage?.section2One },
    { value: 'ProfileX', label: 'ProfileX', image: imageUrl?.homePage?.section2Two },
    { value: 'DATAi', label: 'DATAi', image: imageUrl?.homePage?.section2Three },
];




const ReactSelectComp = ({ setActiveCards }) => {
    return (
        <>
            <select className="select_contanier_section4" onChange={e => setActiveCards(e.target.value)}>
                {options?.map((items) => {
                    return <option key={items?.value} className="select_mobile_version" value={items?.value}>{items?.label}</option>
                })}
            </select>

        </>
    )

}

export default ReactSelectComp