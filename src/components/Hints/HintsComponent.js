import React from "react"
import "./HintsComponent.css"
import { useDispatch } from "react-redux"
import * as imagesActions from "../../store/image-action"

const HintsComponent = (props) => {
  const dispatch = useDispatch()

  const { history } = props
  const { results, query } = props
  const switchPageHandler = () => {
    history.push("/results")
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

  return <>{hints}</>
}

export default HintsComponent
