import { Provider } from "react-redux";
import "./App.css";
import { AddTransaction } from "./components/AddTransaction/AddTransaction";
import { Balance } from "./components/Balance/Balance";
import { Header } from "./components/Header/Header";
import { IncomeExpenses } from "./components/IncomeExpenses/IncomeExpenses";
import { TransactionList } from "./components/TransactionList/TransactionList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
