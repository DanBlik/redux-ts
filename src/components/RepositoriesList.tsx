import { useState } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  const { data, loading, error } = useTypedSelector(state => state.repositories)

  const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    searchRepositories(term)
  }

  return (
    <div>
      <form>
        <input type="text" value={term} onChange={e => setTerm(e.target.value)}/>
        <button onClick={onSubmit}>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        data.map(dataEl => <div key={dataEl}>{dataEl}</div>)
      )}
    </div>
  )
}

export default RepositoriesList