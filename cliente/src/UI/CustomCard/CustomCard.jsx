
const CustomCard = ({cabaña}) => {

  return (
    <div>
     <img src={cabaña.image} alt={cabaña.name} />
     <h3>{cabaña.name}</h3>
     <p>{cabaña.description}</p>
     <p>Price: ${cabaña.price} per night</p>
    </div>
  )
}

export default CustomCard
