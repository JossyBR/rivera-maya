
import Cards from '../UI/Cards/Cards'
import SearchPage from '../UI/SearchPage'

const Home = () => {

  const cabañas=[
    {
      name: "Cabaña A",
      image: "https://th.bing.com/th/id/R.6cb56399f9b637c74f0dbd498d0db31e?rik=OQgc7LrpHcyFyg&pid=ImgRaw&r=0",
      description: "bla bla bla",
      price: 100
    },
    {
      name: "Cabaña B",
      image: "https://th.bing.com/th/id/R.6cb56399f9b637c74f0dbd498d0db31e?rik=OQgc7LrpHcyFyg&pid=ImgRaw&r=0",
      description: "bla bla bla",
      price: 150
    },
    {
      name: "Cabaña C",
      image: "https://th.bing.com/th/id/R.6cb56399f9b637c74f0dbd498d0db31e?rik=OQgc7LrpHcyFyg&pid=ImgRaw&r=0",
      description: "bla bla bla",
      price: 200
    },

  ]
  return (
    <div>
      <SearchPage/>
      <Cards cabañas={cabañas}/>
    </div>
  )
}

export default Home
