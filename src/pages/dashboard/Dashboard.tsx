import ExpenceList from "../../components/ExpenceList"
import useExpenses from "../../hooks/useExpenses"

const Dashboard = () => {
    const {expenses, error, isLoading} = useExpenses();
    return <div>
            {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
        <ExpenceList expenses={expenses}/>
        </div>
}

export default Dashboard