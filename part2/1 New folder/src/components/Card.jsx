import Button from "./Button"

function Card(props) {
    return (
        <>
            <div className='max-w-sm bg-white border border-gray-600 rounded-xl mt-8 mb-3 shadow-sm overflow-hidden transition-shadow'>
            <img 
            className='w-full h-48 object-cover'
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.0eRxahXZU2eJkB4_pfGflQHaDm%3Fpid%3DApi&f=1&ipt=9239bf3025aa7602b610e4f8936ac3923fe477629ebea60f7d2f679a4a938821&ipo=images" 
                alt="sample images" />

            <div className='p-4'>
                <h2 className='text-lg font-semibold text-gray-800'>{props.title}</h2>
                <p className='mt-2 text-gray-600 text-sm'>{props.paragraph}</p>
            </div>

            <Button buttonName="i am button of card" />
            </div> 
        </>
    )
}

export default Card