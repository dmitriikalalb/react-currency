import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'
import CurrencyList from './components/CurrencyList'
import Aside from './components/Aside'
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import Content from './components/Content'
import {useDispatch, useSelector} from 'react-redux'
import {addCurrencyFrom, addCurrencyTo} from './store/actions/currencyAction'

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currencyTo = useSelector(state => state.currencyReducer.to)
  const currencyFrom = useSelector(state => state.currencyReducer.from)

  const addTo = (currency) => {
    dispatch(addCurrencyTo(currency))
    if (currencyFrom && Object.entries(currencyFrom).length !== 0) {
      navigate(`/${currency.link}-to-${currencyFrom.link}`)
    }
  }

  const addFrom = (currency) => {
    dispatch(addCurrencyFrom(currency))
    if (currencyTo && Object.entries(currencyTo).length !== 0) {
      navigate(`/${currencyTo.link}-to-${currency.link}`)
    }
  }

  // if (Object.entries(currencyTo).length !== 0 && Object.entries(currencyFrom).length !== 0) {
  //   navigate(`/${currencyTo.link}-to-${currencyFrom.link}`)
  // }

  // if (currencyFrom && Object.entries(currencyFrom).length !== 0) {
  //   navigate(`/${currencyTo.link}-to-${currencyFrom.link}`)
  // }
  // if (currencyTo && Object.entries(currencyTo).length !== 0) {
  //   navigate(`/${currencyTo.link}-to-${currencyFrom.link}`)
  // }

  return (
    <Container >
      <Flex align={'flex-start'}>
        <Aside>
          <Flex justify={'space-between'}>
            <CurrencyList clickAction={addTo} currency={currencyTo}/>
            <CurrencyList clickAction={addFrom} currency={currencyFrom}/>
          </Flex>
        </Aside>
        <Content>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/:currencyTo-to-:currencyFrom" element={<DetailsPage/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
        </Content>
      </Flex>
    </Container>
  )
}

export default App
