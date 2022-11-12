import Navbar from "./components/navbar"
import globesvg from "./assets/globe.svg"
import Content from "./components/content"
import data from "/data"

function App() {
  const contents = data.map(item=>{
      return(
      <Content
      key={item.id}
      title={item.title}
      description={item.description}
      coverImg={item.coverImg}
      location={item.location}
      Date={item.Date}
      link={item.link}
      />
      )
  })
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar image={globesvg} title={"My travel Journal"}
      />
      <div className="my-10 grid place-items-center container gap-y-5 px-10 lg:px-48">
        {contents}
      </div>
    </div>
  )
}

export default App
