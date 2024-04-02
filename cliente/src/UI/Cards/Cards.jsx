import CustomCard from "../CustomCard/CustomCard"

const Cards = ({cabañas}) => {
  
  return (
    <div className='cards'>
      {cabañas.map((cabaña, index)=>(
        <CustomCard key={index} cabaña={cabaña} />
      ))}      
    </div>
  )
}

export default Cards
