// import React from "react";
// import FilterSongCard from "./FilterSongCard";

// export default function FilterSong(props) {
//     const [filteredData, setFilteredData] = React.useState();
//     const [apiCount, setApiCount] = React.useState(0);
//     const [values, setValues] = React.useState({
//         "SongType": ""
//     })
//     const [tracks , setTracks] = React.useState([])
//     const options = {
//         method: 'GET',
// 	    headers: {
// 		    'X-RapidAPI-Key': 'eee5adfe58mshe48de5bf5ea83abp16240ejsn269106eacbb4',
// 		    'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
// 	        }
//     };
//     function HandleChange(event){
//         setValues(prevValues => {
//             return{
//             ...prevValues,
//             [event.target.name] : event.target.value
//             }
//         })
//     }
//     function SearchSongType(event){
//         event.preventDefault()
//         fetch(`https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in_world_by_genre?genre=${values.SongType}&limit=50`,options)
//             .then(res => res.json())
//             .then(data => {
//                 setFilteredData(data);
//                 setTracks(data.tracks)
//             })
//     }
//     const MappedSongData = tracks.map((prop) => {
//         return (
//         <FilterSongCard key={prop.key} img={prop.images.coverart} title={prop.title} subtitle={prop.subtitle} ringtone={prop.url}/>)
//     })
//     console.log(filteredData)
//     return (
//         <div> 
//         <form>
//             <label>Enter a song type</label>
//             <input 
//             type="text"
//             className="form--filter--search"
//             value={values.SongType}
//             name="SongType"
//             onChange={HandleChange}/>
//             <button className="button--filter"onClick={SearchSongType}>Search Songs</button>
//             <small>These are the only supported music types: POP, HIP_HOP_RAP, DANCE, ELECTRONIC, SOUL_RNB, ALTERNATIVE, ROCK, LATIN, FILM_TV, COUNTRY, AFRO_BEATS, WORLDWIDE, REGGAE_DANCE_HALL,HOUSE,K_POP, FRENCH_POP, SING_SONGWRITER AND REG_MEXICO</small>
//         </form>
//         {MappedSongData}
//         </div>
//     );
// }
import React from "react";
import FilterSongCard from "./FilterSongCard";

export default function FilterSong(props) {
  const [filteredData, setFilteredData] = React.useState([]);
  const [values, setValues] = React.useState({
    SongType: ""
  });
  const [tracks, setTracks] = React.useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '814f0e603emshfc37d323a7e9172p1268c8jsn62b9fd022e79',
      'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
    }
  };

  function HandleChange(event) {
    setValues(prevValues => {
      return {
        ...prevValues,
        [event.target.name]: event.target.value
      };
    });
  }

  function SearchSongType(event) {
    event.preventDefault();
    console.log(`Searching for songs in genre: ${values.SongType}`);
    fetch(`https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world-by-genre?genre=${values.SongType}&limit=50`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("API response data:", data);
        if (data && Array.isArray(data.tracks)) {
          setFilteredData(data.tracks);
          setTracks(data.tracks);
        } else {
          setFilteredData([]);
          setTracks([]);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setFilteredData([]);
        setTracks([]);
      });
  }

  const MappedSongData = tracks.length > 0 ? tracks.map((prop) => {
    return (
      <FilterSongCard
        key={prop.key}
        img={prop.images.coverart}
        title={prop.title}
        subtitle={prop.subtitle}
        ringtone={prop.url}
      />
    );
  }) : <p>No songs found.</p>;

  console.log("Filtered Data:", filteredData);
  console.log("Tracks:", tracks);

  return (
    <div>
      <form>
        <label>Enter a song type</label>
        <input
          type="text"
          className="form--filter--search"
          value={values.SongType}
          name="SongType"
          onChange={HandleChange}
        />
        <button className="button--filter" onClick={SearchSongType}>Search Songs</button>
        <small>These are the only supported music types: POP, HIP_HOP_RAP, DANCE, ELECTRONIC, SOUL_RNB, ALTERNATIVE, ROCK, LATIN, FILM_TV, COUNTRY, AFRO_BEATS, WORLDWIDE, REGGAE_DANCE_HALL, HOUSE, K_POP, FRENCH_POP, SING_SONGWRITER AND REG_MEXICO</small>
      </form>
      {MappedSongData}
    </div>
  );
}
