import React, { useState } from "react"
import Search from "../../assets/img/search.png"
import "./style.css"

interface MovieType {
    moviesByQuery: (query: string) => void
}

export const TopBar = ({moviesByQuery}: MovieType) => {
  const [queryValue, setQueryValue] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    const regex = /\s/i
    const queryURL = queryValue.replace(regex, "+").toLowerCase()
    moviesByQuery(queryURL)
    setQueryValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(e.target.value)
  };

  return (
    <div className="topBar">
      <form className="form-topBar" onSubmit={handleSubmit} id="form-topBar">
        <input className="form-topBar-input" type="text" name="text" value={queryValue} onChange={handleChange} placeholder="Search a movie..." required/>
        <button className="form-topBar-btn">
          <span>Search</span>
          <img className="form-topBar-img" src={Search} alt="search" />
        </button>
      </form>
    </div>
  );
};
