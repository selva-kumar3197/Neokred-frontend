import React from 'react'

function BrandValues(prop) {
    // console.log('prop', prop)
    const brandValuesData = [
        {
            id: 0,
            title: 'Novelty',
            description: 'Neokred, as a brand, values an out-of-the-box solution to business problems. The brand stands for novelty and innovation that help it solve problems beyond the ordinary.',
        },
        {
            id: 1,
            title: 'Expertise',
            description: 'The brand does not just offer solutions but also brings its expertise in solving problems to the forefront, establishing itself as a thought leader.',
        },
        {
            id: 2,
            title: 'Openness',
            description: 'Neokred, as a brand, values the importance of trust. The emphasis is always on being transparent in the operation, which adds to the credibility of the brand and helps build trust.',
        },
        {
            id: 3,
            title: 'Knowledgeable',
            description: 'The core team comes with a strong pedigree in their respective fields and is hence knowledgeable enough to drive the success of others.',
        },
        {
            id: 4,
            title: 'Resourceful',
            description: 'Neokred values its ability to use creativity to find a solution to complex problems, underlying its resourcefulness.',
        },
        {
            id: 5,
            title: 'Empathy',
            description: "Neokred and its ability to empathise with the client's problems make it stand out from its competitors. It understands and values the pain points in the clients' journey and musters solutions suited to their needs.",
        },
        {
            id: 6,
            title: 'Dependability',
            description: "Dependability as a value is embedded within the ethos of Neokred. It helps to create trust about how the client's data is being handled and is safe from tampering and leaks.",
        },
    ]
    const displayData = brandValuesData.filter((value) => value.id === prop.brandLetterId);
    // console.log('displayData', displayData)

    return (
        <div style={{ marginTop: 50, alignSelf: 'center' }}>
            {displayData && (
                <div style={{ paddingInline: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div className='popoverCard' style={{ width: 800, zIndex: 1, top: '250px' }}>
                        <h3 className='aboutus-headertext' style={{ textAlign: 'start', marginBlock: 10 }}>{displayData[0]?.title}</h3>
                        <p className='aboutus-text1' style={{ color: '#000' }}>{displayData[0]?.description}</p>
                    </div>
                    <div className='popoverCard' style={{ width: 600, zIndex: 2, top: '200px' }}>
                        <h3 className='aboutus-headertext' style={{ textAlign: 'start', marginBlock: 10 }}>{displayData[0]?.title}</h3>
                        <p className='aboutus-text1' style={{ color: '#000' }}>{displayData[0]?.description}</p>
                    </div>
                    <div className='popoverCard' style={{ width: 400, zIndex: 3, top: '150px' }}>
                        <h3 className='aboutus-headertext' style={{ textAlign: 'start', marginBlock: 10 }}>{displayData[0]?.title}</h3>
                        <p className='aboutus-text1' style={{ color: '#000' }}>{displayData[0]?.description}</p>
                    </div>
                    <div className='popoverCard' style={{ width: 250, zIndex: 4, top: '100px', border: '0px solid', paddingBlock: '10px' }}>
                        <div className='popoverCard-inner'>
                            <h3 className='aboutus-headertext' style={{ textAlign: 'start', marginBlock: 10 }}>{displayData[0]?.title}</h3>
                            <p className='aboutus-text1' style={{ color: '#000' }}>{displayData[0]?.description}</p>
                        </div>
                    </div>

                </div>
                // <div>
                //     <div className='value-itemhead-container' style={{ zIndex: 1, marginInline: 'calc(100vw / 4 - 200)', marginTop: 200 }}>
                //         <div className='value-item-container' style={{ marginRight: 150 }}>
                //             <p>{displayData?.title}</p>
                //             <p>{displayData?.description}</p>
                //         </div>
                //         <div className='value-item-container' style={{ marginLeft: 150 }}>
                //             <p>{displayData?.title}</p>
                //             <p>{displayData?.description}</p>
                //         </div>
                //     </div>
                //     <div className='value-itemhead-container' style={{ marginInline: 'calc(100vw / 4 - 100)', zIndex: 2, border: '1px solid blue', marginTop: 150 }}>
                //         <div className='value-item-container' style={{ marginRight: 100 }}>
                //             <p>{displayData?.title}</p>
                //             <p>{displayData?.description}</p>
                //         </div>
                //         <div className='value-item-container' style={{ marginLeft: 100 }}>
                //             <p>{displayData?.title}</p>
                //             <p>{displayData?.description}</p>
                //         </div>
                //     </div>
                //     <div className='value-itemhead-container' style={{ marginInline: 'calc(100vw / 4)', zIndex: 3, border: '1px solid green', marginTop: 100 }}>
                //         <div className='value-item-container' style={{ marginRight: 50 }}>
                //             <p>{displayData?.title}</p>
                //             <p>{displayData?.description}</p>
                //         </div>
                //         <div className='value-item-container' style={{ marginLeft: 50 }}>
                //             <p>{displayData?.title}</p>
                //             <p>{displayData?.description}</p>
                //         </div>
                //     </div>
                //     <div className='value-itemshow-container1' style={{ marginInline: 'calc(100vw / 3)', marginTop: 50 }}>
                //         <div className='value-itemshow-container'>
                //             <p>{displayData?.title}</p>
                //             <p>{displayData?.description}</p>
                //         </div>
                //     </div>
                // </div>
            )}
        </div>
    )
}

export default BrandValues