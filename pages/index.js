import MainDataGrid from "./MainDataGrid.js";
import {fetchAllUnits} from "./api/DataFetching.mjs";

export async function getStaticProps(){
    let allUnitsData = await fetchAllUnits()
    return{
        props: {allUnitsData},
        revalidate: 1
    }
}


export default function Home(props) {

  return (
    <div>
        <h1>cybernetic stream</h1>
      <MainDataGrid data = {props.allUnitsData}/>
    </div>
  )
}


