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
      />
      )
  })
  return (
    <div className="w-screen h-screen">
      <Navbar image={globesvg} title={"My travel Journal"}
      />
      <div className="my-10 grid place-items-center xs:m-20">
        {contents}
      </div>
    </div>
  )
}

export default App
