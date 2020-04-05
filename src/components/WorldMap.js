import React, { useEffect } from "react"
import { VectorMap } from "react-jvectormap"

const WorldMap = () => {
  //   const { getCode, getName, getData } = require("country-list")
  //   console.log(getName("IS")) // Iceland
  //   console.log(getCode("Iceland")) // IS
  //   console.log(getData())
  useEffect(() => {}, [])
  const mapData = {
    CA: 10,
    US: 5,
    DE: 5,
    AT: 5,
    AU: 5,
    CH: 5,
    DK: 5,
    GB: 5,
    ID: 5,
    IT: 5,
    KH: 5,
    NO: 5,
    PH: 5,
    SE: 5,
    SG: 5,
    TH: 5,
    TW: 5,
    VN: 5,
    LA: 5,
  }

  const handleClick = (e, countryCode) => {
    console.log(countryCode)
  }
  const toolTip = (el, code) => {
    const styles = {
      container: `max-width:250px`,
      title: `"margin:8px 0px"`,
    }
    switch (code) {
      case "CA":
        return `<div style=${styles.container}><p style=${
          styles.title
        } class="title">${el.html()}</p> Experienced the hush winter of 2014 and the beauty of British Colombia.</br>Permanent Resident since 2017.</div>`

      case "AU":
        return `<div style=${styles.container}><p style=${
          styles.title
        } class="title">${el.html()}</p> 2 Years of Work and Travel.</br>Experienced the entire continent from east to west. Favorite little town <span>Byron Bay</span> 🤙</div>`
    }
  }
  return (
    <div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        zoomOnScroll={false}
        zoomButtons={false}
        viewBox
        // zoomMin={8}
        containerStyle={{
          width: "100%",
          height: "550px",
          margin: "auto auto 2rem",
        }}
        onRegionClick={handleClick} //gets the country code
        onRegionTipShow={(e, el, code) => {
          el.html(mapData[code] ? toolTip(el, code) : el.html())
        }}
        // markers={[
        //   {
        //     latLng: [41.8781136, -87.6297982],
        //     name: "4 Month east to west",
        //     style: { fill: "yellow" },
        //   },
        // ]}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#eee",
            "fill-opacity": 1,
            stroke: "white",
            "stroke-width": 0.5,
            "stroke-opacity": 1,
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer",
          },
          selected: {
            fill: "red", //color for the clicked country
          },
          selectedHover: {},
        }}
        regionsSelectable={false}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#1967d2", "#174ea6"], //your color game's here
              normalizeFunction: "polynomial",
            },
          ],
        }}
      />
    </div>
  )
}

export default WorldMap
