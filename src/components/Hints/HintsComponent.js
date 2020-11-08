import React from "react"
import { useDispatch } from "react-redux"
import * as imagesActions from "../../store/image-action"
import { withRouter } from "react-router-dom"
const HintsComponent = (props) => {
  const dispatch = useDispatch()

  const { results, query } = props
  const switchPageHandler = () => {
    props.history.push("/results")
  }

  const hints = results
    .filter((results) => results.title.indexOf(query) > -1)
    .map((rs) => {
      return (
        <li
          onClick={() => {
            dispatch(imagesActions.searchByKeyword(rs.title))
            switchPageHandler()
          }}
          key={rs.id}
        >
          {rs.title}
        </li>
      )
    })

  return <>{hints.length > 0 ? hints : "No results"}</>
}

export default withRouter(HintsComponent)
